import { TiArrowBack } from "react-icons/ti";
import { LuClock } from "react-icons/lu";
import { GiTie } from "react-icons/gi";
import { FaLocationArrow } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaMoneyBill } from "react-icons/fa6";

import "/src/styles/historyModal.css"

export default function HistoryModal({showModal,modalData, onClose}){
    return(
        <div>
              { showModal &&
                <div>
                    <div className="modal-header">
                        <h2 className="job-header">Job Details</h2>
                        <button 
                        onClick={onClose}
                        className="close-history-modal-btn">X</button>
                    </div>
                    <div>
                        <p>We are urgently looking for a medical practitioner expert that is good with all medical treatment and has the experience working with other medical practitioners.</p>
                    </div>
                    <div>
                        <div className="requestdate">
                            <p style={{margin:"5px"}}>
                                <TiArrowBack 
                                 style={{marginRight:"5px"}} />Request Date :</p>
                             <h6 style={{margin:"5px"}}>{modalData.requestDate}</h6>
                        </div>
                        <div className="budgetRate">
                            <p style={{margin:"5px"}}><LuClock style={{marginRight:"5px"}}
                            />  Budget Rate :</p>
                             <h6 style={{margin:"5px"}}> N {modalData.budgetRate}/hr</h6>
                        </div>
                        <div className="jobType">
                            <p style={{margin:"5px"}}>
                            <GiTie style={{marginRight:"5px"}}  />
                              Job Type :  </p>
                             <h6 style={{margin:"5px"}}>{modalData.jobType}</h6>
                        </div>
                       <div className="posted">
                           <p style={{margin:"5px"}}> <FaLocationArrow style={{marginRight:"5px"}}
                    />Posted :   </p>
                            <h6 style={{margin:"5px"}}>{modalData.posted}</h6>
                       </div>
                        <div className="location">
                            <p style={{margin:"5px"}}>
                            < IoLocationSharp style={{marginRight:"5px"}}
                    /> Location :   </p>
                             <h6 style={{margin:"5px"}}>{modalData.location}</h6>
                        </div>
                        <div className="bid-section">
                            <p> <FaMoneyBill style={{marginRight:"5px"}} />Bid Amount :</p>
                            <h6>0</h6>
                        </div>
                   </div>
            </div>
            }
        </div>
    )
}