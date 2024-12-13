import imageURL from "/src/assets/profile images/off1.jpeg"
import { useState } from "react"
import { RiPencilFill } from "react-icons/ri";
import FirstNameModal from "./account-modals/firstnameModal";
import LastNameModal from "./account-modals/lastnameModal";
import ContactModal from "./account-modals/contactModal";
import EmailModal from "./account-modals/emailModal";
import "/src/styles/account.css"

export default function Account(){
    const [showFirstNameModal,setShowFirstName] =useState(false)
    const [showLastNameModal,setShowLastName] =useState(false)
    const [showContactModal,setShowContact] =useState(false)
    const [showEmailModal,setShowEmail] =useState(false)


    const [showModal,setShowModal] =useState(false)

    const [accountDetails, setAccountDetails] =useState({
        firstName:"",
        lastName:"",
        Contact: "",
        Email:"",
        AlternativeContact: "",
        Description:""
})

    const [firstNameState, setFirstNameState] = useState("Godswill")
    const [lastNameState, setLastNameState] = useState("Ejike")
    const [ContactState, setContactState] = useState("07069298070")
    const [EmailState, setEmailState] = useState("godswilldesmond@gmail.com")


    function handleShowModal(modalName){
        setShowModal(true)
        if(modalName ==="firstName"){
            setShowFirstName(true)
        }else if(modalName ==="lastName"){
            setShowLastName(true)
        }else if(modalName==="contact"){
            setShowContact(true)
        }else{
            setShowEmail(true)
        }
    }

    function closeModal(){
        setShowFirstName(false)
        setShowLastName(false)
        setShowContact(false)
        setShowEmail(false)
        setShowModal(false)
    }

    function  submitChange(modalName){
       
       if(modalName ==="firstName"){
        setFirstNameState(accountDetails.firstName)
        setShowFirstName(false)
        setShowModal(false)
       }else if(modalName === "lastName"){
        setLastNameState(accountDetails.lastName)
        setShowLastName(false)
        setShowModal(false)
       }else if(modalName==="contact"){
        setContactState(accountDetails.Contact)
        setShowContact(false)
        setShowModal(false)
       }else{
        setEmailState(accountDetails.Email)
        setShowEmail(false)
        setShowModal(false)
       }
    }


    function handleChange(event){
        const {name, value}= event.target
        setAccountDetails(prevData =>{
            return{
                ...prevData,
                [name]:value
            }
        })
    }
    
    return(
        <div className="total-account-page">
            <div>
            
            <div className="bottom-account-page">
                <div className="account-image-section">
                    <img src={imageURL} alt="profile-img" className="account-profile-img"/>
                    <button className="edit-photo-btn">Edit photo </button>
                </div>
                <div className="firstname-section">
                    <div className="wordsPart">
                        <h4>First Name:</h4>
                        <h4>{firstNameState}</h4>
                    </div>
                    <button className="edit-btn"
                    onClick={()=>handleShowModal("firstName")}><RiPencilFill />Edit </button>
                </div>
                <div className="lastname-section">
                    <div className="wordsPart">
                        <h4>Last Name:</h4>
                        <h4>{lastNameState}</h4>
                    </div>
                    <button className="edit-btn"
                    onClick={()=>handleShowModal("lastName")}><RiPencilFill />Edit </button>
                </div>
                <div className="contact-section">
                    <div className="wordsPart">
                       <h4>Contact:</h4>
                       <h4>{ContactState}</h4>
                    </div>
                    <button className="edit-btn"
                    onClick={()=>handleShowModal("contact")}><RiPencilFill />Edit </button>
                </div>
                <div className="email-section">
                    <div className="wordsPart">
                        <h4>Email:</h4>
                        <h4>{EmailState}</h4>
                    </div>
                    <button className="edit-btn"
                    onClick={()=>handleShowModal("email")}><RiPencilFill />Edit </button>
                </div>
                <div className="alternative-section"> 
                    <h4>Alternative Contact (Optional) : </h4>
                    <input
                    className="AlternativeContact-input"
                    type="text"
                    name="AlternativeContact"
                    value={accountDetails.AlternativeContact}
                    onChange={handleChange}/>
                </div>
                <div className="description-section">
                    <h4>Description : </h4>
                    <textarea
                    className="description-textarea"
                    type="text"
                    name="Description"
                    placeholder="Type description here...."
                    value={accountDetails.Description}
                    onChange={handleChange}/>
                </div>
                <button className="change-details-btn">Continue</button>
            </div>
            </div>
          
            { showModal &&
              <div>
                 <div className="account-modal">
                <FirstNameModal 
                showFirstNameModal={showFirstNameModal}
                handleChange={handleChange}
                accountDetails={accountDetails}
                closeModal={closeModal}
                submitChangeFirstName={() => submitChange("firstName")}/>
                 </div>
                 <div className="account-modal">
                <LastNameModal
                showLastNameModal={showLastNameModal}
                handleChange={handleChange}
                accountDetails={accountDetails}
                closeModal={closeModal}
                submitChangeLastName={() => submitChange("lastName")}/>
                 </div>
                 <div className="account-modal">
                <ContactModal
                  showContactModal={showContactModal}
                  handleChange={handleChange}
                  accountDetails={accountDetails}
                  closeModal={closeModal}
                  submitChangeContact={() => submitChange("contact")}/>
                 </div>
                 <div className="account-modal">
                <EmailModal
                  showEmailModal={showEmailModal}
                  handleChange={handleChange}
                  accountDetails={accountDetails}
                  closeModal={closeModal}
                  submitChangeEmail={() => submitChange("email")}/>
                 </div>
            </div>
            }
           
        </div>
    )
}