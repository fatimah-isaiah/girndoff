import { useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import "/src/styles/bvn-verification-modal.css"

export default function BvnVerification( {showBvnVerification, getIdImage, closeIdModal}){
    const [bvnVerification, setBvnVerification] = useState("")

    function handleChange(event){
        setBvnVerification(event.target.value)
        
    }
    function validateBvn(){
        getIdImage(bvnVerification)
        closeIdModal()
    }

    return(
        <>
        {showBvnVerification &&
        <div className="total-bvn-verification">
            <div className="bvn-verification-header">
                <p>BVN Verification</p>
                <button onClick={closeIdModal}
                className="close-bvn-modal-btn">X</button>
            </div>
            <div className="lower-bvn-section" >
                <div className="input-bvn-section">
                    <p>BVN:</p>
                    <input
                    className="input-bvn"
                    type="number"
                    value={bvnVerification}
                    onChange={handleChange}/>
                </div>
                <div className="bvn-warning-section">
                     <IoIosInformationCircleOutline style={{fontSize:"24px"}}/>
                     <p>Your BVN information will be used to match your data with 
                     your bank details</p>
                </div>
                <button className="validate-bvn-btn" onClick={validateBvn}>Validate BVN</button>
            </div>
            
        </div>
}
        </>
    )
}