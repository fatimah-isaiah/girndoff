import "/src/styles/accountModal.css" 

export default function ContactModal({showContactModal, accountDetails,handleChange,closeModal,submitChangeContact}){
    return(
        <div>
            {showContactModal && 
            <div className="total-modal">
                <div className="account-modal-header">
                    <h2>Edit</h2>
                    <button onClick={closeModal}
                    className="closeModal-btn">X</button>
                </div>
                <div className="warning-section">
                    <p>Your Contact will be change on GrindOff and cannot be change until <strong>60days</strong></p>
                </div>
                <div className="input-section">
                    <p>Change Contact</p>
                    <input
                    className="modal-input"
                    name="Contact"
                    value={accountDetails.Contact}
                    onChange={handleChange}/>
                </div>
                <button 
                onClick={submitChangeContact}
                className="submitchange-btn">Change</button>
            </div>}
        </div>
    )
}