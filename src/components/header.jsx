
import { SlArrowDown } from "react-icons/sl";
import { useState } from "react";
import Menu from "./menu/Menu"
import MenuButton from "./menu/MenuButton"
import MenuDropDown from "./menu/MenuDropDown"
import {Link} from "react-router-dom"
import imageURL from "/src/assets/logo 1.png"



export default function Header(){
    const serviceArray =["carpenter amd Furniture Repair", "Haircut Home Service","Virtual & Online Task","Home & Office Cleaning","moving serivices","food and drink delivery","Grocery shopping"]
  const [openService,setOpenService] = useState(false)
  function toggleService(){
      console.log("button clicked")
      setOpenService(!openService)
  }

  const eachservice = serviceArray.map((each,index)=> (
  <MenuDropDown
      key={index}
      each={each}
      openService= {openService}
      />))
   
    return(
        <div className="header-section">
            <img className="logo" src={imageURL}/>
            <ul className="nav-bar">
                <li><Link to="/" className="link-to-home">Home</Link></li>
                <li>About Grindoff</li>
                <li className="service-point">Services 
                    <Menu className="menu">
                        <MenuButton toggle={toggleService}><SlArrowDown className="service-arrow-btn"/></MenuButton>
                        <div style={{ display: openService ? 'block' : 'none' }}>
                            <div 
                            className='serviceDropdown'>
                                {eachservice}
                                {openService && <a href="#">View all..</a>}
                            </div>
                        </div>
                      </Menu> </li>
                <li ><Link to="login" className="signin-link">Sign in </Link></li>
            </ul>
            <div className="header-buttons">
               <Link to="signup" className="provider-btn">Become A Provider</Link>
               <Link to="servicedescription" className="signUp-btn">Sign Up </Link>
            </div>
        </div>
    )

}