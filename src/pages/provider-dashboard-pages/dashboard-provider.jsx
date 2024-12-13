import "/src/styles/dashboard-provider.css"
import { Outlet } from "react-router-dom"


export default function DashboardForprovider(){
    const dashboard =["New Jobs ","Assigned Jobs","Negotiate","Confirmed Jobs",
        "Ongoing Jobs","Completed Jobs"
    ]
    return(
        <div className="total-dashboard-section">
            <div className="top-dashboard-section">
                <h2>Dashboard</h2>
                <div className="total-dashboard-nav-bar">
                    <ul className="dashboard-nav-bar">
                        {dashboard.map((item,index)=>{
                        return(
                            <li key={index}
                            className="each-item">{item}</li>
                        )
                    })}</ul>
                </div>
            </div>
          <div>
                <Outlet/>
          </div>

        </div>
    )
}