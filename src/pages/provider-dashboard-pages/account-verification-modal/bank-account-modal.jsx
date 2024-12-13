import { useState } from "react"
import "/src/styles/bvn-verification-modal.css"

export default function AddAccountNumber({closeIdModal, showAccountNumber, getIdImage}){
    const nigerianBanks=["UBA","FirstBank","Access","Wema","keyStone","Ecobank","Polaris"]

    const [accountDetails, setAccountDetails]= useState({
           accountNumber:"",
           bankUsed:""
    })

    function handleChange(event){
       const {name, value}=event.target
       setAccountDetails(prevData =>{
        return{
            ...prevData,
           [name]:value
        }
       })
    }
    function handleSaveDetails(){
       getIdImage(accountDetails)
       closeIdModal()
    }
    console.log(accountDetails)
    return(
        <>
        {showAccountNumber &&
        <div  className="total-bank-account">
            <div className="bank-acc-header">
                <p>Add Bank Account</p>
                <button
                onClick={closeIdModal}
                className="close-bank-modal-btn">X</button>
            </div>
            <div className="lower-bank-section">
                <div className="input-bank-number-section">
                    <label htmlFor="account-number" className="account-label">Account No:</label>
                    <input
                    required
                    type="number"
                    id="account-number"
                    className="accountNumber-input"
                    name="accountNumber"
                    value={accountDetails.accountNumber}
                    onChange={handleChange}/>
                </div>
                <div className="select-bank-section">
                    <select 
                    required
                    className="select-bank-input"
                    name="bankUsed"
                    onChange={handleChange}>
                       {nigerianBanks.map((bank, index)=>{
                        return(
                            <option key={index} value={bank}>{bank}</option>
                        )
                       })}
                    </select>
                </div>
                <button className="save-details-btn"
                onClick={handleSaveDetails}>Save</button>
            </div>
           
        </div>
    }
        </>
    )
}