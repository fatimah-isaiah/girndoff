import { useState } from "react"

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
        <div>
            <form className="signup-form">
                <label htmlFor="firstName">First Name</label>
                    <input 
                    id="firstName" 
                    type="text"
                    name ="firstName" 
                    onChange={handleChange}
                    value={formData.firstName}/>
                    
                <label htmlFor="lastName">Last Name</label>
                    <input 
                    id="lastName" 
                    type="text"
                    name ="lastName" 
                    value={formData.lastName}
                    onChange={handleChange}/>
                <label htmlFor="email">Email</label>
                    <input 
                    id="email" 
                    type="text"
                    name="email" 
                    onChange={handleChange}
                    value={formData.Email}/>
                <label htmlFor="phoneNumber">Phone Number</label>
                    <input 
                    id="phoneNumber" 
                    type="number"
                    name ="phoneNumber" 
                    onChange={handleChange}
                    value={formData.phoneNumber}/>
                <label htmlFor="DOB">Date Of Birth</label>
                    <input 
                    id="DOB"
                    type="date"
                    name ="DOB"
                    onChange={handleChange}
                    value={formData.DOB}/>
                <label htmlFor="Address">Address(Your Home Address)</label>
                    <input
                    id="Address"
                    type="text"
                    name ="Address"
                    onChange={handleChange}
                    value={formData.Address}/>
                <button type="submit" className="submit-form-btn">Continue</button>
            </form>
        </div>
    )
    
}