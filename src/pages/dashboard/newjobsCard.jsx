import { useState } from "react"
import { IoHeartCircleOutline } from "react-icons/io5";
import "/src/styles/newjobsCard.css"
import { TiArrowBack } from "react-icons/ti";
import { LuClock } from "react-icons/lu";
import { GiTie } from "react-icons/gi";
import { FaLocationArrow } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaMoneyBill } from "react-icons/fa6";


export default function NewjobsCard({item}){
    const [bidInput, setBidInput] = useState("")
    return(
        <div className="total-each-newjob">
            <div className="newjob-header">
                <h3>Medical Check-Up</h3>
                <IoHeartCircleOutline style={{color:"#FE0C0C"}} />
            </div>
            <div>
                <div className="requestdate">
                    <p style={{margin:"5px"}}>
                        <TiArrowBack 
                        style={{color:"#14A000",marginRight:"5px"}} />
                        Request Date :</p>
                     <h6 style={{margin:"5px"}}>{item.requestDate}</h6>
                </div>
                <div className="budgetRate">
                    <p style={{margin:"5px"}}>
                    <LuClock style={{color:"#14A000",marginRight:"5px"}}
                    />Budget Rate :</p>
                     <h6 style={{margin:"5px"}}> N {item.budgetRate}/hr</h6>
                </div>
                <div className="jobType">
                    <p style={{margin:"5px"}}>
                    <GiTie style={{color:"#14A000",marginRight:"5px"}}
                    />Job Type :  </p>
                     <h6 style={{margin:"5px"}}>{item.jobType}</h6>
                </div>
                <div className="posted">
                    <p style={{margin:"5px"}}>
                    <FaLocationArrow style={{color:"#14A000",marginRight:"5px"}}
                    />Posted :   </p>
                     <h6 style={{margin:"5px"}}>{item.posted}</h6>
                </div>
                <div className="location">
                    <p style={{margin:"5px"}}>
                    < IoLocationSharp style={{color:"#14A000",marginRight:"5px"}}
                    /> Location :   </p>
                     <h6 style={{margin:"5px"}}>{item.location}</h6>
                </div>
                <div className="bid-section">
                    <p>
                        <FaMoneyBill style={{color:"#14A000",marginRight:"5px"}} />Bid Amount :</p>
                    <div className="input-submit-bid">
                        <input className="bid-input"
                        name="bidInput"
                        onChange={(event)=>setBidInput(event.target.value)}
                        value={bidInput}
                        placeholder="N  0.00"/>
                        <button
                        className="submitBid-btn">Bid</button>
                    </div>
                </div>
            </div>
            <div>
                <button className="requestJob-btn">Request Job</button>
                <button className="viewJob-btn">View Job</button>
            </div>
        </div>
    )
}