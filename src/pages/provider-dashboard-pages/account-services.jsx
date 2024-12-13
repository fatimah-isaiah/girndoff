import "/src/styles/account-services.css"
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";
import { RiCheckDoubleFill } from "react-icons/ri";
import { FaMoneyBill } from "react-icons/fa6";
import { useState, useEffect } from "react";

export default function AccountServices(){
    const topData = [
        {   icon:<IoShieldCheckmarkSharp />,
            title:"We are the best in medical services...",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore et dolore magna aliqua."
        },{
            icon:<FaClock />,
            title:"Time management",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,vincididunt ut labore et dolore magna aliqua."
        },{
            icon:<RiCheckDoubleFill />,
            title:"Delivers the best services",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore et dolore magna aliqua."
        },{
            icon:<FaMoneyBill />,
            title:"Low chargers",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore et dolore magna aliqua."
        }
    ]

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

      const [chosenServices, setChosenServices] = useState([]);
      const [openDiv, setOpenDiv] = useState(false)

  const [formData, setFormData] = useState(
    servicesArray.reduce((acc, service) => {
      acc[service] = false;
      return acc;
    }, {})
  );

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


    return(
        <div>
            <div className="total-top-section">
                <div className="update-service">
                    <p>View and update the services you want to offer</p>
                </div>
                <div className="top-grid-section">
                    {topData.map((item,index)=>{
                        return(
                            <div key={index} className="each-item-description">
                                <div className="icon-section">
                                    <p className="icon">{item.icon}</p>
                                </div>
                                <div className="words-section">
                                    <h4 style={{margin:"0px",fontSize:"12px"}}>{item.title}</h4>
                                    <p style={{margin:"0px",fontSize:"10px"}} >{item.body}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <p>Services Offered</p>
            <div className="bottom-section-account-services">
                <p>Select the services you want to provide</p>
                { openDiv && <div className="chosenServices-div">
                   {chosenServices.map(service => (
                      <div key={service} className="each-selected-account-service">
                        <span>{service}</span>
                        <button className="remove-service-btn" onClick={() => removeService(service)}>x</button>
                      </div>
                    ))}
                </div>}

                <div className="service-grid-section">
                     {servicesArray.map((item, index) => (
                      <div key={index} >
                        <form >
                          <input
                            type="checkbox"
                            id={item}
                            name={item}
                            onChange={handleChange}
                            checked={formData[item]}
                          />
                          <label htmlFor={item}>{item}</label>
                        </form>
                      </div>
                    ))}

                </div>
            </div>
        </div>
    )
}