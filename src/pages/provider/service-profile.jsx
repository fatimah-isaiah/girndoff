import { useState,useEffect,useRef } from "react";
import { FaLocationDot } from "react-icons/fa6";

import "/src/styles/service-profile.css"

export default function ServiceProfile() {
    const servicesArray = [
        "Beauty & Services",
        "Car & Machine Repair",
        "Home & Home Cleaning",
        "Home & Office Repair",
        "Grocery Shopping & Delivery",
        "Virtual & Online Task",
        "Food & Drinks Delivery",
        "Logistics, Errands & Message Services",
        "Moving Services"
      ];

    const completionRef  = useRef("")

  const [chosenServices, setChosenServices] = useState([]);

  const [formData, setFormData] = useState(
    servicesArray.reduce((acc, service) => {
      acc[service] = false;
      return acc;
    }, {})
  );

  const [openDiv, setOpenDiv] = useState(false)

  const [form,setForm] = useState({
    textArea:"",
    skill:"",
    insertLocation:"",
  })

  const [selectedImage, setSelectedImage] = useState("")
  const [error, setError] = useState(null)

  function handleChange(event) {
    const { name, checked } = event.target;

    setFormData(prevFormData => {
      const updatedFormData = {
        ...prevFormData,
        [name]: checked
      };

      const updatedChosenServices = Object.keys(updatedFormData).filter(
        service => updatedFormData[service]
      );

      setChosenServices(updatedChosenServices);
      setOpenDiv(true)
      return updatedFormData;
    });
  }

  useEffect(()=>{
    if(chosenServices.length===0){
      setOpenDiv(false)
    }
  },[chosenServices])

  function removeService(service) {
    setFormData(prevFormData => ({
      ...prevFormData,
      [service]: false
    }));

    setChosenServices(prevChosenServices =>
      prevChosenServices.filter(item => item !== service)
    );
  }


  function handleUploadImage(event){
    const file = event.target.files?.[0]
    console.log(event.target.files)
    if(!file.name.match(/\.(jpg|jpeg|png)$/)){
   const newError = "wrong file type"
   setError(newError)
    return
    }else{
      setSelectedImage(
        file ? URL.createObjectURL(file) : null
      )
      
    }
   
  }

  const skills = ["Self Taught",
    "Trained by a professional",
    "Technical Institute",
   "Polytechnic",
   "University Education",
"No, I’ve not been trained, I’d like to signup for a training"]
  

  function handleSecondForm(event){
     event.preventDefault()
     const {name, value, checked,type} = event.target
     setForm(prevForm => {
        return{
            ...prevForm,
            [name]: type === "checkbox" ? checked : value
        }
     })
  }


  return (
    <div className="service-profile-total">
        <h3 className="service-h3">Select the categories of service you want to provide</h3>
     { openDiv && <div className="selected-top">
        {chosenServices.map(service => (
          <div key={service} className="each-selected-service">
            <span>{service}</span>
            <button className="remove-service-btn" onClick={() => removeService(service)}>x</button>
          </div>
        ))}
      </div>}

    <div className="suggested-services">
        <p>Suggested services:</p>
        <div className="form-grid">
        {servicesArray.map((item, index) => (
          <div key={index} >
            <form >
               <div>
                  <input
                    type="checkbox"
                    id={item}
                    name={item}
                    onChange={handleChange}
                    checked={formData[item]}
                  />
                  <label htmlFor={item}>{item}</label>
              </div>
            </form>
          </div>
        ))}
      </div>
    </div>
    <div className="lowerForm">
            <label htmlFor="textArea">Describe the services you want to provide</label>
            <textarea
            id="textArea"
            className="textArea"
            name="textArea"
            placeholder="Type your message here..."
            onChange={handleSecondForm}
            value={form.textArea} />
                <h3>How did you learn your skills</h3>
                <div className="radio-div">
                {skills.map((item,index) => {
                    return(
                        <div key={index}>
                           <input 
                             type="radio"
                             id={item}
                             name="skill"
                             value={item}
                             checked={form.skill === item}
                             onChange={handleSecondForm}
                            />
                             <label htmlFor={item}>{item}</label>
                             <br />
                        </div>
                    )
                })}
                </div>
            <label className="label-completion">Upload certificates of any training completion (Optional)</label>
            <button onClick={()=>completionRef.current.click()} id="completion"></button>
            <input
            type="file"
            ref={completionRef}
            style={{display:"none"}}
            name="completion"
            value={form.completion}
            onChange={handleUploadImage}/>

            {error && <p style={{color:"red"}}>{error}</p>}
            {selectedImage && (
              <img
              src={selectedImage}
              width={"400px"}
              className="selected-image"/>
            )}

            <label className="label-current-location">Insert Service Location</label>
            <div className="current-location-div">
            <input
            type="text"
            id="insertLocation"
            name="insertLoaction"
            value={form.insertLocation}
            onChange={handleSecondForm}/>
            <button className="current-location-btn"><FaLocationDot/> Use Current Location</button>
            </div>
        </div>
        <button className="service-profile-continue">Continue</button>
    </div>
  );
}
