import {useState} from "react"
import { Link } from "react-router-dom"

export default function Login(){

    const [loginData, setLoginData] = useState({
        loginInput:"",
    })

    function handleLoginChange(event){
        const {name, value} = event.target
        setLoginData(prevdata =>{
            return{
                ...prevdata,
                [name]:value
            }
        })
    }
    return(
        <div className="total-login-page">
            <div className="left-side-login">
                <div className="get-job-div">
                   <p className="get-job">Get the Job done and get paid seamlessly for your effort with GrindOff</p>
                </div>
            </div>
            <div className="right-side-login">
                <div className="login-logo-div">
                    <img src="src/assets/logo 1.png" className="login-logo"/>
                </div>
                <form className="login-form">
                    <h2>Login</h2>
                    <label htmlFor="loginInput">Email or Phone Number</label>
                    <input
                    type="text"
                    id="loginInput"
                    name="loginInput"
                    onChange={handleLoginChange}
                    value={loginData.loginInput}/>

                   <label htmlFor="password">Password</label>
                    <input
                    type="text"
                    id="password"
                    name="password"
                    onChange={handleLoginChange}
                    value={loginData.password}/>

                    <p><Link to="#" className="forget-link">Forgot Password?</Link></p>

                    <button className="submit-login-btn">Login</button>

                </form>
                <h4 className="have-account">Don’t have an account? <Link to="signup" className="login-signup-link"> Sign Up </Link></h4>
            </div>
        </div>
    )
}