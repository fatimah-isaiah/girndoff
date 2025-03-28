import { useState } from "react"
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "/src/styles/service-request-signup.css"

export default function ServiceRequest(){
    const [submitted, setSubmitted] = useState(false)
    const [formData, setFormData] = useState(
        {
            serviceRequest:"",
            startingAddress:"",
            destinationAddress:"",
            serviceRate:"",
            serviceCategory:"",
            shortDescription:"",
            longDescription:""
        }
    )
    function handleRequestChange(event){
        const {name, value} = event.target
        setFormData(prev =>{
            return {
                ...prev,
                [name]:value,
            }
        }
         )

         setSubmitted(true)
    }

    
    const serviceRate = ["Engage Provider for Service Rate","Pay Per Hour","Fixed Price"]

    const category = ["","Furniture","Plumbing","Grocery","shopping","Cleaning","Movers","Tailoring","Baking","Catering",
        "Capentering","Repair","Painting","Fumigation","Landscaping","Mechanics","Electricians","Pharmacy","supermarket"
    ]
   return(
    <div className="total-service-description">
         <h1 className="description-header">Service Description</h1>
        <form>
            <div className="service-request-radio">
            <h4>Service Request Type</h4>
            <div className="right-radio">
            <input 
            type="radio"
            id="Right-Now"
            name="serviceRequest"
            value="Right-Now"
            checked={formData.serviceRequest === "Right-Now"}
            onChange={handleRequestChange}
            required/>
            <label htmlFor="Right-Now">Right Now</label>
            </div>

            <input 
            type="radio"
            id="Later Request"
            name="serviceRequest"
            value="Later Request"
            checked={formData.serviceRequest === "Later Request"}
            onChange={handleRequestChange}
            required/>
            <label htmlFor="Later Request">Later Request</label>
           
            </div>

            <label htmlFor="startingAddress" style={{marginRight:"auto"}}><h3>Service Starting Address</h3></label>
            <div className= "startingAddress-div">
                 <input
                 type="text"
                 id="startingAddress"
                 name="startingAddress"
                 value={formData.startingAddress}
                 onChange={handleRequestChange}
                 required/>
                 <button className="startingAddress-btn"><FaLocationDot />
                 Use Current Location</button>
            </div>

            <label htmlFor="destinationAddress"  style={{marginRight:"auto"}}><h3>Service Destination Address (Optional)</h3></label>
            <div className="destinationAddress-div">
                 <input
                 type="text"
                 id= "destinationAddress"
                 name="destinationAddress"
                 value={formData. destinationAddress}
                 onChange={handleRequestChange}
                 required/>
                 <button className="destinationAddress-btn" ><FaLocationDot />
                 Use Current Location</button>
            </div>

            <div className="service-rate-section">
                <h3>Service Rate Options</h3>
                {serviceRate.map((eachRate,index) =>{
                       return(
                        <div key={index}>
                            <input 
                            type="radio"
                            id= {eachRate}
                            name="serviceRate"
                            value={eachRate}
                            checked={formData.serviceRate === eachRate}
                            onChange={handleRequestChange}
                            required/>
                            <label htmlFor={eachRate}>{eachRate}</label>
                        </div>
                    )
                })}
            </div>

            <div className="category-section">
                <h3>Service Request Category</h3>
                <p>Please follow all public health guidance and regulations during your task, including social distancing. Your Tasker will do the same to ensure everyone’s safety. You can edit task details anytime.</p>
                <select  
                id="serviceCategory"
                name="serviceCategory"
                value={formData.serviceCategory} // Controlled input: selected value is tied to state
                onChange={handleRequestChange}>
                   { category.map((eachCategory,index)=>{
                    return(
                        <option value={eachCategory} key={index}>
                            {eachCategory}
                        </option>
                    )
                   })}
                    
                </select>
            </div>

            <div className="user-description">
                <label htmlFor="userDescription" ><h3>Service Short Description</h3></label>
                <p>Please follow all public health guidance and regulations during your task, including social distancing. Your Tasker will do the same to ensure everyone’s safety. You can edit task details anytime.</p>
                <input
                  type="text"
                  id="shortDescription"
                  name="shortDescription"
                  placeholder="Max length of 30 characters"
                  value={formData.shortDescription} 
                  onChange={handleRequestChange}
                  required/>
            </div>

            <div>
            <label htmlFor="longDescription"><h3>Service Long Description</h3></label>
            <p>Please follow all public health guidance and regulations during your task, including social distancing. Your Tasker will do the same to ensure everyone’s safety. You can edit task details anytime.</p>
            <textarea
            id="longDescription"
            className="longDescription"
            name="longDescription"
            placeholder="Provide a summary of what you need done for your provider."
            value={formData.longDescription} 
            onChange={handleRequestChange}
            required
             />
            </div>

            <Link 
            to="findrates" 
            className="serviceRequest-btn"
            state={{categoryFilter:formData.serviceCategory}}
            disable={submitted}>Continue</Link>
        </form>
    </div>
   )
}