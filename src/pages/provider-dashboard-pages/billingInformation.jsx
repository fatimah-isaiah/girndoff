import { ImBin2 } from "react-icons/im";
import creditCard from "/src/assets/Group 1060.png"
import { useState,useRef } from "react";
import "/src/styles/billing-information.css"
import { FiPlusCircle } from "react-icons/fi";
import BillingAccountModal from "../billingInfoAccountModal";

export default function BillingInformation(){

    const [cardImage, setCardImage] = useState(creditCard)
    const [showModal, setShowModal] = useState(false)
    const cardImageRef = useRef()

    const [newAccount, setNewAccount] = useState({
        bankName : "First Bank PLC",
        CardHolderName: "Ejike Godswill",
        CardNumber: "00985426344",
        ExpiryDate:"5/4/25"
    })

    function handleCardChange(event){
        const file = event.target.files[0]
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setCardImage(e.target.result)
            };
            reader.readAsDataURL(file);
           
        }
   }

   const deleteImage = ()=>{
    setCardImage("")
   }

   function handleModal(){
    setShowModal(true)
   }

   function closeAccountModal(){
    setShowModal(false)
   }

   function getNewAccountDetails(Details){
       setNewAccount(Details)
   }
    return(
        <div className="total-bill-info">
            <div className="bill-info-header">
                <h3>Billing Information</h3>
            </div>
            <div style={{backgroundColor:"#FFFFFF"}}>
                <div className="paymentcards-top">
                    <p>Payment Cards</p>
                    <div>
                         <button onClick={()=> cardImageRef.current.click()} 
                            className="add-card-btn"> 
                            <FiPlusCircle />
                            Add New Card</button>
                         <input
                         type="file"
                         style={{display:"none"}}
                         ref={cardImageRef}
                         onChange={handleCardChange}/>
                    </div>
                </div>
                <div className="image-section">
                    <div className="each-card-section">
                        <img src={cardImage}/>
                        <div>
                            <button onClick={deleteImage}
                            className="delete-card-image-btn"><ImBin2 /></button>
                        </div>
                    </div>
                    <div  className="each-card-section">
                        <img src={cardImage}/>
                        <div>
                            <button onClick={deleteImage}
                            className="delete-card-image-btn"><ImBin2 /></button>
                        </div>
                    </div>
                </div>
                <div className="bill-info-acc-details">
                    <div className="bank-details">
                        <p >Bank Account Details</p>
                    </div>
                    <div className="details-acc">
                        <div>
                            <p>Bank Name : {newAccount.bankName}</p>
                            <p>Account Name : {newAccount.CardHolderName}</p>
                            <p>Account Number: {newAccount.CardNumber}</p>
                            <p>Expiry Date : {newAccount.ExpiryDate}</p>
                        </div>
                        <div>
                            <button className="add-new-bank-btn" 
                            onClick={handleModal}> <FiPlusCircle/> Add New Bank</button>
                        </div>
                    </div>
                </div>
            </div>
           {showModal &&  <div className="billing-info-modal">
                <BillingAccountModal 
                showModal={showModal}
                getNewAccountDetails={getNewAccountDetails}
                closeAccountModal={closeAccountModal}/>
            </div>}
        </div>
    )
}