
import "/src/styles/newjobsCard.css"
import { TiArrowBack } from "react-icons/ti";
import { LuClock } from "react-icons/lu";
import { GiTie } from "react-icons/gi";
import { FaLocationArrow } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaMoneyBill } from "react-icons/fa6";




export default function HistoryCard({item,onOpenModal}){
  
    
    return(
        <>
        <div className="total-each-newjob">
            <div className="newjob-header">
                <h3>Medical Check-Up</h3>
            </div>
            <div>
                <div className="requestdate">
                    <p style={{margin:"5px"}}>
                        <TiArrowBack 
                        style={{marginRight:"5px"}} />
                        Request Date :</p>
                     <h6 style={{margin:"5px"}}>{item.requestDate}</h6>
                </div>
                <div className="budgetRate">
                    <p style={{margin:"5px"}}>
                    <LuClock style={{marginRight:"5px"}}
                    />Budget Rate :</p>
                     <h6 style={{margin:"5px"}}> N {item.budgetRate}/hr</h6>
                </div>
                <div className="jobType">
                    <p style={{margin:"5px"}}>
                    <GiTie style={{marginRight:"5px"}}
                    />Job Type :  </p>
                     <h6 style={{margin:"5px"}}>{item.jobType}</h6>
                </div>
                <div className="posted">
                    <p style={{margin:"5px"}}>
                    <FaLocationArrow style={{marginRight:"5px"}}
                    />Posted :   </p>
                     <h6 style={{margin:"5px"}}>{item.posted}</h6>
                </div>
                <div className="location">
                    <p style={{margin:"5px"}}>
                    < IoLocationSharp style={{marginRight:"5px"}}
                    /> Location :   </p>
                     <h6 style={{margin:"5px"}}>{item.location}</h6>
                </div>
                <div className="bid-section">
                    <p>
                        <FaMoneyBill style={{marginRight:"5px"}} />Bid Amount :</p>
                        <h6>0</h6>
                </div>
            </div>
            <div>
                <button className="history-viewJob-btn"
                onClick={() => onOpenModal(item)}>View Job</button>
            </div>
        </div>
       
        </>
     
    )
}