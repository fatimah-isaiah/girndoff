import { NavLink, Outlet } from "react-router-dom"
import "/src/styles/income-layout.css"


export default function IncomeLayout(){
    const income = [{
        title:"Total amount made",
        path:".",
    },{
        title:"Total number of upcoming jobs",
        path:"upcomingjobs"
    },  { 
        title:"Total number of completed jobs",
        path:"completedjobs"
    },{
        title:"Total number of cancelled jobs",
        path:"cancelledjobs"
    },{
        title:"Total amount made on each service",
        path:"incomeperservice"
    },{
        title:"Total amount made so far this month",
        path:"incomepermonth"}
    ]

    return(
        <div>
            <div className="total-income-nav">
                <ul className="income-nav-bar">
               {income.map((item, index)=>{
                return(
                    <NavLink to={item.path}
                    end
                    key={index} className= {`nav-income ${({isActive})=> isActive? "active":""}`}>
                        <li  className="each-income-bar">{item.title}</li>
                    </NavLink>
                )
               })}
               </ul>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}