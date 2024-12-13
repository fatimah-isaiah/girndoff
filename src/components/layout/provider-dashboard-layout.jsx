import {  NavLink, Outlet,useNavigate } from "react-router-dom";
import { GiBackwardTime } from "react-icons/gi";
import { TbPentagonFilled } from "react-icons/tb";
import { FaUser,FaMoneyBillTransfer } from "react-icons/fa6";
import { PiClipboardTextDuotone } from "react-icons/pi";
import { GoGitBranch } from "react-icons/go";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { IoWallet } from "react-icons/io5";
import { BiSolidLock } from "react-icons/bi";
import  customerCare from "/src/assets/customer-care2 2.png" 
import "/src/styles/provider-dashboard-layout.css"
import { PiSignOutBold } from "react-icons/pi";
 
 export default function ProviderDashboard(){

    const sideBar =[
        {
          title:"Dashboard",
          icon:<TbPentagonFilled />,
          path:"./newjobs",
          step:1,
        },
        { 
            title:"History",
            icon:<GiBackwardTime />,
            path:"./history",
            step:2
        },
        {
            title:"Account",
            icon:<FaUser/>,
            path:"./account",
            step:3
        },
        {
            title:"Document",
             icon:<PiClipboardTextDuotone />,
             path:"./document",
             step:4,
        },
        {
            title:"Income",
            icon: <FaMoneyBillTransfer />,
            path:"./income",
            step:5

        },
        {
            title:"Referrals",
            icon:<GoGitBranch />,
            path:"./referrals",
            step:6

        },
        {
            title:"Billing Information",
            icon:<LiaFileInvoiceDollarSolid />,
            path:"./billinginformation",
            step:7
        },
        {
            title:"Wallet",
            icon:< IoWallet />,
            path:"./wallet",
            step:8

        },
        {
            title:"Change Password",
            icon:<BiSolidLock />,
            path:"./changepassword",
            step:9
        },
        {
            title:"Support",
            icon: <img src={customerCare}/>,
            path:"./support",
            step:10
        }]
 
        const navigate = useNavigate()
        function handleLogout(){
            localStorage.removeItem("loggedin")
            navigate("/login")
        }

    return(
        <div className="total-provider-dashboard">
            <div className="side-navigator">
                {sideBar.map((eachBar,index)=>{
                    return(
                        <ul key={index} className="eachBar">
                              <NavLink 
                                to={eachBar.path} 
                                className={"eachbar-provider"}
                                > 
                             <li className="eachBar-title"> 
                                    <span className="eachBar-icon">{eachBar.icon}</span>
                                    {eachBar.title}
                            </li>
                            </NavLink> 
                            
                        </ul>
                    )
                })}
                <div>
                    <button className="provider-signout-btn"
                    onClick={handleLogout}>
                    <PiSignOutBold /> LogOut
                    </button>
                </div>
            </div>
            <div >
                <Outlet/>
            </div>
        </div>
    )
 }