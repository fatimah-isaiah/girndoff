import "/src/styles/accountModal.css" 

export default function EmailModal({showEmailModal, accountDetails,handleChange,closeModal,submitChangeEmail}){
    return(
        <div>
            {showEmailModal && 
            <div className="total-modal">
                <div className="account-modal-header">
                    <h2>Edit</h2>
                    <button onClick={closeModal}
                     className="closeModal-btn">X</button>
                </div>
                <div className="warning-section">
                    <p>Your Email will be change on GrindOff and cannot be change until <strong>60days</strong></p>
                </div>
                <div className="input-section">
                    <h6>Change Email</h6>
                    <input
                    className="modal-input"
                    name="Email"
                    value={accountDetails.Email}
                    onChange={handleChange}/>
                </div>
                <button 
                onClick={submitChangeEmail}
                className="submitchange-btn">Change</button>
            </div>}
        </div>
    )
}