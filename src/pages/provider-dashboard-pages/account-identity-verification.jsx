import "/src/styles/account-identity-verification.css"
import { FaRegIdCard } from "react-icons/fa6";
import { TbMessageChatbot } from "react-icons/tb";
import { MdFormatListNumbered } from "react-icons/md";
import { RiBankLine } from "react-icons/ri";
import { useState } from "react";
import GovernmentIssued from "./account-verification-modal/government-issued-modal";
import IssuedNIN from "./account-verification-modal/uploadNIN-modal";
import BvnVerification from "./account-verification-modal/BVN-verification-modal";
import AddAccountNumber from "./account-verification-modal/bank-account-modal";


export default function AccountIdentityVerification(){
    const [showModal, setShowModal] = useState(false)

    const [showGovernmentId, setShowGovernmentId] = useState(false)
    const [showUploadNin, setShowUploadNin] = useState(false)
    const [showBvnVerification, setShowBvnVerification] = useState(false)
    const [showAccountNumber, setShowAccountNumber] = useState(false)

    const [governmentURL, setGovernmentURL] = useState("")
    const [uploadNinURL, setUploadNinURL] = useState("")
    const [bvnNumber, setBvnNumber]= useState("")
    const [bankAccount, setBankAccount] = useState({})

    function handleShowIdModal(modalType) {
            return () => {  // Return a function instead of executing immediately
                setShowModal(true)
                if(modalType === "governmentId") {
                    setShowGovernmentId(true)
                    setShowUploadNin(false)
                    setShowBvnVerification(false)
                    setShowAccountNumber(false)
                } else if(modalType === "uploadNin") {
                    setShowUploadNin(true)
                    setShowGovernmentId(false)
                    setShowBvnVerification(false)
                    setShowAccountNumber(false)
                }else if(modalType==="bvn"){
                    setShowBvnVerification(true)
                    setShowUploadNin(false)
                    setShowGovernmentId(false)
                    setShowAccountNumber(false)
                }else{
                    setShowAccountNumber(true)
                    setShowBvnVerification(false)
                    setShowUploadNin(false)
                    setShowGovernmentId(false)
                }
            }
    }
    


    function getIdImage(imageUrl, type) {
        if(type === "governmentId") {
            setGovernmentURL(imageUrl)
        } else if(type === "uploadNin") {
            setUploadNinURL(imageUrl)
        }else if(type ==="bvn"){
            setBvnNumber(imageUrl)
        }else{
            setBankAccount(imageUrl)
        }
    }
    function closeIdModal(){
        setShowBvnVerification(false)
        setShowGovernmentId(false)
        setShowModal(false)
        setShowUploadNin(false)
        setShowAccountNumber(false)
    }
    return(
        <div className="total-account-verification">
            <div>
                  <div className="verification-header">
                     <p>To Enjoy the full benefit of GrindOff without any restriction, Please Complete your Account settings below to enjoy the all benefits of GrindOff Services</p>
                  </div>
                  <div className="verification-button-section">
                      <div>
                            <button className="verification-button"
                            onClick={handleShowIdModal("governmentId")}>
                            <div className="id-icon"><FaRegIdCard /></div>
                            Upload Government Issued ID
                            </button>
                            {governmentURL && <img src={governmentURL} style={{width:"200px",marginTop:"10px"}}/>}
                        </div>
                        <div>
                            <button className="verification-button"
                            onClick={handleShowIdModal("uploadNin")}>
                               <div className="id-icon"><TbMessageChatbot /></div>
                            Upload NIN</button>
                            {uploadNinURL && <img src={uploadNinURL} style={{width:"200px",marginTop:"10px"}}/>}
                        </div>
                        <div>
                           <button className="verification-button"
                            onClick={handleShowIdModal("bvn")}>
                                <div className="id-icon"><MdFormatListNumbered  /></div>
                              Input your BVN</button>
                            {bvnNumber && <p>{bvnNumber}</p>}
                        </div>
                        <div>
                            <button className="verification-button"
                            onClick={handleShowIdModal("accountNumber")}>
                                <div className="id-icon"><RiBankLine  /></div>
                            Bank Account information</button>
                            {bankAccount? 
                                <div>
                                    <p> {bankAccount.accountNumber}</p>
                                    <p> {bankAccount.bankUsed}</p>
                                </div>
                             : ""}
                       </div>
                  </div>
                  <div>
                      <button
                     className="save-verification-btn">Save</button>
                  </div>
            </div>
            {showModal &&
            <div className="verification-modal">
                
                <div className="each-modal">
                    <GovernmentIssued
                    showGovernmentId={showGovernmentId}
                    getIdImage={(url) => getIdImage(url, "governmentId")}
                    closeIdModal = {closeIdModal}/>
                </div>
                
                <div className="each-modal">
                    <IssuedNIN 
                    showUploadNin={showUploadNin}
                    getIdImage={(url) => getIdImage(url, "uploadNin")}
                    closeIdModal={closeIdModal}/>
                </div>
               
                <div className="each-modal">
                    <BvnVerification
                    showBvnVerification={showBvnVerification}
                    getIdImage={(url) => getIdImage(url, "bvn")}
                    closeIdModal={closeIdModal}
                    />
                </div>
                <div className="each-modal">
                    <AddAccountNumber
                    showAccountNumber={showAccountNumber}
                    closeIdModal={closeIdModal}
                    getIdImage={(url) => getIdImage(url, "accountnumber")}
                    />
                </div>
                
            </div>}

        </div>
    )
}