import { SiGoogleplay } from "react-icons/si";
import { IoLogoApple } from "react-icons/io5";

export default function Comfortable(){
    return(
        <div>
        <div className="total-comfortable-section">
            <div className="comfortable-left-section">
                <h1>We make things easily and comfortable for you to live life</h1>
                <p className="minute">Download the App, Sign Up in minutes and that’s  all you need to get help. <span>Hassle FREE. </span></p>
                <p className="download">Download the App on Google Play or the App Store</p>
                <div>
                    <button className="google-play-btn">
                        <div className="arragement-div yup">
                           <span className="download-icon"><SiGoogleplay /></span>
                           <div className="button-words-div">
                                <p className="get-it">Get it on </p> 
                                <h4 className="button-words" >Google Play</h4>
                            </div>
                        </div>
                    </button>
                    <button className="apple-store-btn">
                        <div className="arrangement-div">
                           <span className="download-icon"><IoLogoApple /></span>
                           <div className="button-words-div" >
                              <p className="get-it">Get it on </p> 
                               <h4 className="button-words" >Apple Store</h4>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            <div>
                <img src="src/assets/mockup 1.png"/>
            </div>
            <img className="ellipse-div" src="src/assets/Ellipse 9.png"/>
        </div>
        <div className="bottom-comfort">
            <div>
                <ul  className="discover-list">
                <h2>Discover</h2>
                    <li>Become a Tasker</li>
                    <li>All Services</li>
                    <li>Elite Taskers</li>
                    <li>Help</li>
                </ul>
            </div>
            <div>
                <ul className="company-list">
                   <h2>Company</h2>
                    <li>About Us</li>
                    <li>Privacy Policy</li>
                    <li>Contact Us</li>
                    <li>Careers</li>
                    <li>Terms</li>
                    <li>FAQs</li>
                </ul>
            </div>
            <div>
                <h1>Discover Our App</h1>
                <p>Tackle your to-do list wherever you are with our Mobile App</p>
                <div>
                    <button className="google-play-btn-bottom">
                        <div className="arragement-div yup">
                           <span className="download-icon"><SiGoogleplay /></span>
                           <div className="button-words-div">
                                <p className="get-it">Get it on </p> 
                                <h4 className="button-words" >Google Play</h4>
                            </div>
                        </div>
                    </button>
                    <button className="apple-store-btn-bottom">
                        <div className="arrangement-div">
                           <span className="download-icon"><IoLogoApple /></span>
                           <div className="button-words-div" >
                              <p className="get-it">Get it on </p> 
                               <h4 className="button-words" >Apple Store</h4>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
        </div>
    )
} 