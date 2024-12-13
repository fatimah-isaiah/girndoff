import "/src/styles/accountModal.css" 
export default function LastNameModal({showLastNameModal, accountDetails,handleChange,closeModal,submitChangeLastName}){
    return(
        <div>
            {showLastNameModal && 
            <div className="total-modal">
                <div className="account-modal-header">
                    <h2>Edit</h2>
                    <button onClick={closeModal}
                    className="closeModal-btn">X</button>
                </div>
                <div className="warning-section">
                    <p>Your name will be change on GrindOff and cannot be change until <strong>60days</strong></p>
                </div>
                <div  className="input-section">
                    <h6>Change Last Name</h6>
                    <input
                    className="modal-input"
                    name="lastName"
                    value={accountDetails.lastName}
                    onChange={handleChange}/>
                </div>
                <button 
                onClick={submitChangeLastName}
                className="submitchange-btn">Change</button>
            </div>}
        </div>
    )
}