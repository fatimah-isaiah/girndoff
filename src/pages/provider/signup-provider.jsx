import { useState } from "react"
import "/src/styles/signup-provider.css"

export default function SignUp(){
    const [formData,setFormData] = useState("")
    function handleChange(event){
        event.preventDefault()
        const {name,value} =event.target
        setFormData(prevData =>{
          return  {...prevData,
            [name]:value}
        })
    }
    return(
        <div className="total-provider-div">
            <form className="signup-form">
                <div className="firstName-provider-div">
                    <label htmlFor="firstName-provider">First Name</label>
                        <input 
                        id="firstName-provider" 
                        type="text"
                        name ="firstName" 
                        onChange={handleChange}
                        value={formData.firstName}/>
                </div>
                    
                <div  className="lastName-provider-div">
                    <label htmlFor="lastName-provider">Last Name</label>
                        <input 
                        id="lastName-provider" 
                        type="text"
                        name ="lastName" 
                        value={formData.lastName}
                        onChange={handleChange}/>
                </div>

                <div className="email-provider-div">
                    <label htmlFor="email-provider">Email</label>
                        <input 
                        id="email-provider" 
                        type="text"
                        name="email" 
                        onChange={handleChange}
                        value={formData.Email}/>
                </div>

                <div className="phoneNumber-provider-div">
                    <label htmlFor="phoneNumber-provider">Phone Number</label>
                        <input 
                        id="phoneNumber-provider" 
                        type="number"
                        name ="phoneNumber" 
                        onChange={handleChange}
                        value={formData.phoneNumber}/>
                </div>

                <div className="DOB-provider-div">
                    <label htmlFor="DOB-provider">Date Of Birth</label>
                        <input 
                        id="DOB-provider"
                        type="date"
                        name ="DOB"
                        onChange={handleChange}
                        value={formData.DOB}/>
                </div>

                <div className="Address-provider-div">
                    <label htmlFor="Address-provider">Address</label>
                        <input
                        id="Address-provider"
                        type="text"
                        name ="Address"
                        onChange={handleChange}
                        value={formData.Address}/>
                </div>
                <button type="submit" className="submit-provider-form-btn">Continue</button>
            </form>
        </div>
    )
    
}