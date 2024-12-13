import { useState } from "react"
import "/src/styles/billingAccountModal.css"

export default  function BillingAccountModal({showModal,getNewAccountDetails, closeAccountModal}){
    const [CardHolderDetails,setCardHolderDetails] = useState({
        CardHolderName:"",
        CardNumber:"",
        ExpiryDate:"",
        bankName:""
    })

    function handleAccountChange(event){
    const {name,value} = event.target
    setCardHolderDetails((prevData) =>{
        return{
            ...prevData,
            [name]: value
        }
    })
    }

    function addNewAccount(){
        getNewAccountDetails(CardHolderDetails)
    }
    return(
        <>
        {showModal &&
        <div className="totalBillinginfo">
            <div className="top-section-add-card">
                <p>Add Your Card</p>
                <div className="button-div">
                    <button
                    onClick={closeAccountModal}
                    className="delete-billinfo-mmodal-btn">X</button>
                </div>
            </div>
            <form>
                <div className="cardholdername-section">
                     <label htmlFor="CardHolderName">Card Holder Name</label>
                     <input 
                     id="CardHolderName"
                     className="CardHolderName"
                     type="text"
                     name="CardHolderName"
                     value={CardHolderDetails.CardHolderName}
                     onChange={handleAccountChange}/>
                </div>
                <div className="card-number-section">
                     <label htmlFor="Card Number">Card Number</label>
                     <input 
                     id="Card Number"
                     className="CardNumber"
                     type="text"
                     name="CardNumber"
                     value={CardHolderDetails.CardNumber}
                     onChange={handleAccountChange}/>
                </div>
                <div>
                     <div className="expiry-date-section">
                         <label htmlFor="Expiry Date">Expiry Date</label>
                         <input 
                         id="Expiry Date"
                         className="ExpiryDate"
                         type="date"
                         name="ExpiryDate"
                         value={CardHolderDetails.ExpiryDate}
                         onChange={handleAccountChange}/>
                     </div>
                     <div className="bank-name-section">
                        <label htmlFor="bankName">Bank Name</label>
                        <input 
                        id="bankName"
                        className="bankName"
                        type="text"
                        name="bankName"
                        value={CardHolderDetails.bankName}
                        onChange={handleAccountChange}/>
                     </div>
              </div>
            </form>
            <button onClick={addNewAccount}
            className="add-new-account-btn">Add Card</button>
        </div>
}
        </>
    )
}
