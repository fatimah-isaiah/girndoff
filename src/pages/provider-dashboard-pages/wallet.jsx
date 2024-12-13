// import walletServices from "../../data/walletServices";
import { FaMoneyBill,FaMoneyBillTrendUp } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { useState, useRef, useEffect } from "react";
import "/src/styles/wallet.css"

import { HiDevicePhoneMobile } from "react-icons/hi2";
import { GrWifiLow } from "react-icons/gr";
import { FaCreditCard, FaTv } from "react-icons/fa";
import { RiHomeWifiFill } from "react-icons/ri";
import { MdElectricBolt } from "react-icons/md";
import { FaPlaneArrival } from "react-icons/fa6";
import { FaCloudversify } from "react-icons/fa6";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { NavLink, Outlet} from "react-router-dom";

export default function Wallet(){
    const walletServices = [
        {
            title:"Buy Airtime",
            icon:<HiDevicePhoneMobile/>,
        },{
            title:"Buy Mobile Data",
            icon:<GrWifiLow />,
        },{
            title:"Bill Payment",
            icon:<FaCreditCard/>,
        },{
            title:"DSTV",
            icon:<FaTv/>,
        },{
            title:"GOtv",
            icon:<RiHomeWifiFill/>,
        },{
            title:"Electricity Bill",
            icon:< MdElectricBolt/>,
        },{
            title:"Book Flight",
            icon:<FaPlaneArrival/>,
        },{
            title:"Buy Data",
            icon:<FaCloudversify/>,
        },{
            title:"Tips",
            icon:<FaHandHoldingUsd/>,
        }
    ];
   

    const summary =[{
        title:"Transaction History",
        path:"."
    },{
        title:"Payment Summary",
        path:"./paymentsummary"
    }]

const scrollableRef = useRef(null)
const [scrollLeft, setScrollLeft] = useState(true)
const [scrollRight, setScrollRight] = useState(false)

const handleScroll = () => {
    if (scrollableRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollableRef.current;
      setScrollLeft(scrollLeft > 0);
      setScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

useEffect(() => {
  const scrollContainer = scrollableRef.current;
  if (scrollContainer) {
    scrollContainer.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
  }
  return () => scrollContainer.removeEventListener('scroll', handleScroll);
}, []);

function scroll(direction){
    const scrollDirection = direction === "left"? -300:300
    scrollableRef.current.scrollBy({left:scrollDirection, behavior:"smooth"})
  }
    return(
        <div className="total-wallet">
            <div className="top-wallet">
                <h3>Wallet</h3>
            </div>
            <div className="bottom-wallet">
                <div>
                    <div className="wallet-balance-section">
                        <div>
                            <p>Wallet Balance</p>
                            <p className="money-available">N 13,500</p>
                        </div>
                        <div className="deposit-withdraw-section">
                            <button className="deposite-wallet-btn" >
                                <div className="deposit-wallet-start">
                                    <div className="bill-icons">
                                        <FaMoneyBill/>
                                    </div>Deposit
                                </div>
                                <div>
                                    <IoIosArrowForward/>
                                </div>
                            </button>
                            <button className="withdraw-wallet-btn">
                            <div className="deposit-wallet-start">
                                    <div className="bill-icons">
                                        <FaMoneyBillTrendUp/>
                                    </div>Withdraw Balance
                                </div>
                                <div>
                                    <IoIosArrowForward/>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div>
                        <p style={{marginLeft:"20px"}}>Quick Actions</p>
                        <div className="quick-action-container">
                            {scrollLeft &&
                            <button 
                            onClick={()=>scroll("left")}
                            className="scroll-left-wallet-btn">
                                <FaArrowLeftLong /></button>}
                             <div className="scrollable-wallet-section"
                             ref={scrollableRef}>
                                {walletServices.map((item,index)=>{
                                return( <div key={index} 
                                className="each-wallet-service">
                                     <div className="each-wallet-service-icon">
                                        {item.icon}
                                     </div>
                                     <p className="each-wallet-service-title">{item.title}</p>
                                 </div>)
                                })}
                             </div>
                             {scrollRight &&
                             <button 
                            onClick={()=>scroll("right")}
                            className="scroll-right-wallet-btn">
                                <FaArrowRight /></button>}
                        </div>
                    </div>
                    <div>
                        <ul className="wallet-history">
                            {summary.map((item,index)=>{
                                return(
                                <NavLink to={item.path} key={index}
                                className={"each-wallet-history"}
                                end
                                >
                                    <li>{item.title}</li>
                                </NavLink>)
                            })}
                        </ul>
                    </div>
                    <div>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    )
}