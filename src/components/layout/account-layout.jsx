import {  Outlet,NavLink } from "react-router-dom"
import "/src/styles/account-layout.css"


export default function AccountLayout(){
    const layout= [{
        title:"Profile",
        path: "./"
    },{
        title:"Identity Verification",
        path:"accountverification"
    },{
        title:"Gallery",
        path:"accountgallery"
    },{
        title:"Services",
        path:"accountservices"
    },{
        title:"Service Location",
        path:"accountlocation"
    }]

return(
    <div style={{marginLeft:"30px"}} className="total-account-media">
        <div className="total-account-header">
            <ul className="account-list">
                {layout.map((item,index)=>{
                   return(
                    <NavLink 
                    to={item.path}
                     key={index}
                     className={"account-navigation"}>
                    <li 
                    className="each-account-list">{item.title}
                    </li>
                    </NavLink>
                   )
                })}
            </ul>
        </div>
        <div className="account-header">
                <h2>Account</h2>
                <p className="second-line-heading">View and update basic information</p>
            </div>
        <div>
            <Outlet/>
        </div>
    </div>
)
}