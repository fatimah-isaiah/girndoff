from flask import Flask, jsonify, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_oauthlib.client import OAuth

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///grindoff.db"
app.config["SECRET_KEY"] = "Whatever_bro"
db = SQLAlchemy(app)
oauth = OAuth(app)

# Google OAuth configuration
google = oauth.remote_app(
    'google',
    consumer_key='YOUR_GOOGLE_CLIENT_ID',
    consumer_secret='YOUR_GOOGLE_CLIENT_SECRET',
    request_token_params={
        'scope': 'email',
    },
    base_url='https://www.googleapis.com/oauth2/v1/',
    request_token_url=None,
    access_token_method='POST',
    access_token_url='https://accounts.google.com/o/oauth2/token',
    authorize_url='https://accounts.google.com/o/oauth2/auth'
)

# Data Models
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)

class Service(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)

class ServiceProvider(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    service_id = db.Column(db.Integer, db.ForeignKey('service.id'), nullable=False)

# Endpoints

@app.route('/about', methods=['GET'])
def about():
    return jsonify({"message": "About GrindOff"})

@app.route('/learn_more', methods=['GET'])
def learn_more():
    return jsonify({"message": "Learn more about GrindOff"})

@app.route('/services', methods=['GET'])
def services():
    services = Service.query.all()
    return jsonify([{"id": s.id, "name": s.name, "description": s.description} for s in services])

@app.route('/become_a_provider', methods=['POST'])
def become_a_provider():
    data = request.json
    new_provider = ServiceProvider(name=data['name'], email=data['email'], service_id=data['service_id'])
    db.session.add(new_provider)
    db.session.commit()
    return jsonify({"message": "Provider added"}), 201

# Google Sign-In
@app.route('/login')
def login():
    return google.authorize(callback=url_for('authorized', _external=True))

@app.route('/logout')
def logout():
    session.pop('user_id', None)
    return redirect(url_for('about'))

@app.route('/login/authorized')
def authorized():
    response = google.authorized_response()
    if response is None or response.get('access_token') is None:
        return 'Access denied: reason={} error={}'.format(
            request.args['error_reason'],
            request.args['error_description']
        )
    session['google_token'] = (response['access_token'], '')
    user_info = google.get('userinfo')
    user = User.query.filter_by(email=user_info.data['email']).first()
    if user is None:
        user = User(name=user_info.data['name'], email=user_info.data['email'])
        db.session.add(user)
        db.session.commit()
    session['user_id'] = user.id
    return redirect(url_for('about'))

@google.tokengetter
def get_google_oauth_token():
    return session.get('google_token')

if __name__ == "__main__":
    db.create_all()
    app.run(debug=True)
