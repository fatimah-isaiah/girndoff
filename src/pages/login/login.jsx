import {useState} from "react"
import { Link,useNavigate} from "react-router-dom"

import "/src/styles/login.css"
import { UserData } from "../../data/user_data"

export default function Login(){
    const navigate =useNavigate()

    const [loginData, setLoginData] = useState({
        loginInput:"",
        password:""
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
    function submitLogin(e){
        e.preventDefault()
        localStorage.setItem("loggedin", true)
        localStorage.setItem( "userData", JSON.stringify(UserData, null,2) )
        navigate("/requestDetails", { replace: true })
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
                <form onSubmit={submitLogin} className="login-form">
                    <h2>Login</h2>
                    <label htmlFor="loginInput">Email or Phone Number</label>
                    <input
                    required
                    type="text"
                    id="loginInput"
                    name="loginInput"
                    onChange={handleLoginChange}
                    value={loginData.loginInput}/>

                   <label htmlFor="password">Password</label>
                    <input
                    required
                    type="text"
                    id="password"
                    name="password"
                    onChange={handleLoginChange}
                    value={loginData.password}/>

                    <p><Link to="#" className="forget-link">Forgot Password?</Link></p>

                    <button type="submit" className="submit-login-btn"
                    >Login</button>

                </form>
                <h4 className="have-account">Don’t have an account? <Link to="/signup" className="login-signup-link"> Sign Up </Link></h4>
            </div>
        </div>
    )
}