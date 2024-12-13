import { useState } from "react"
import "/src/styles/confirmDetails.css"

export default function ConfirmDetails(){
    const [loading, setLoading] = useState(false)
    const [userData,setUserData]=useState({
        userFirstName:"",
        userLastName:"",
        userEmail:"",
        userPassword:"",
        userPhoneNumber:""

    })
    const handleChange=(event)=>{
        const {name, value}= event.target
        setUserData(prevdata=>{
            return{
                ...prevdata,
                [name]:value

            }
        })
    }
    

    function submitUserDetails(){
        setLoading(true)
        // try{
        //     fetch("userdetailsapi",
        //         {method:"POST",
        //         body:JSON.stringify( userDetails)}
        //     )
        // }catch(err){
        //      setError(err)
        // }finally{
        //     setLoading(false)
        // }
    }
    
    return(
        <div className="total-confirm-details">
            {loading && (<h1>it is loading!!!!</h1>)}
            <div className="top-confirm-details">
                <h1>Create an account</h1>
                <p>You will be able to review everything before booking</p>
            </div>
            <form className="confirm-details-form">
            <label htmlFor="userFirstName">First Name</label>
                    <input 
                    id="userFirstName" 
                    type="text"
                    name ="userFirstName" 
                    onChange={handleChange}
                    value={userData.firstName}/>
                    
                <label htmlFor="userLastName">Last Name</label>
                    <input 
                    id="userLastName" 
                    type="text"
                    name ="userLastName" 
                    value={userData.userLastName}
                    onChange={handleChange}/>
                <label htmlFor="userEmail">Email</label>
                    <input 
                    id="userEmail" 
                    type="text"
                    name="userEmail" 
                    onChange={handleChange}
                    value={userData.userEmail}/>
                 <label htmlFor="userPassword">Password</label>
                    <input 
                    id="userPassword"
                    type="text"
                    name ="userPassword"
                    onChange={handleChange}
                    value={userData.userPassword}/>
                <label htmlFor="userPhoneNumber">Phone Number</label>
                    <input 
                    id="userPhoneNumber" 
                    type="number"
                    name ="userPhoneNumber" 
                    onChange={handleChange}
                    value={userData.userPhoneNumber}/>
                <div>
                    <p>By clicking below and creating an account, I agree to Taskrman’s Terms of Service and Privacy Policy.</p>
                </div>
               
                <button 
                type="submit" 
                className="submit-user-form-btn"
                onClick={()=>submitUserDetails(userData)}>Continue</button>
            </form>
        </div>
    )
}