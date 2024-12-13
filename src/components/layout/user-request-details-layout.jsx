import { FaBell } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import "/src/styles/request-details-layout.css"
import { IoSearch } from "react-icons/io5";
import { useState,useContext } from "react";
// import imageURL from "/src/assets/profile images/off1.jpeg"
import { NavLink, Outlet} from "react-router-dom";
import { LoginDetailsContext } from "../context/user-context";


export default function RequestDetailsLayout(){
    const [inputData,setInputData]= useState("")

    const {loginDetail} = useContext(LoginDetailsContext)
   
    const userNavBar = [
        {
            title:"Create Job",
            path:"."
        },{
            title:"Wallet",
            path:"providerdashboard/wallet"
        },{
            title:"History",
            path:"providerdashboard/history"
        },{
            title:"Account",
            path:"providerdashboard/account"
        },{
            title:"Support",
            path:"providerdashboard/support"
        }
    ]
    return(
        <>
        <div className="user-request-header">
            <img src="/src/assets/logo 1.png" className="logo"/>
            <div className="user-search-bar">
               <IoSearch />
               <input
               className="search-input-bar"
               name="search"
               placeholder="Search...."
               value={inputData}
               onChange={(event)=>setInputData(event.target.value)}/>
            </div>
            <div className="user-nav-bar">
                <ul className="user-bar">
                   {userNavBar.map((item,index) =>{
                    return(
                        <NavLink to={item.path} key={index}
                        className="each-user-bar"
                        end>
                            <li>{item.title}</li>
                        </NavLink>
                    )
                   })}
                </ul>
            </div>
            <div className="notification-bar">
                 <FaBell className="notification-bell" />
                 <FaChevronDown />
            </div>
            <div className="user-details">
                <img src={loginDetail.image} className="user-profile-image"/>
                <p>{loginDetail.firstName} {loginDetail.lastName}</p>
                <FaChevronDown />
               
            </div>
        </div>
        <div style={{ backgroundColor: "#F9FAFB" }} >
            <Outlet />
        </div>
        </>
    )
}