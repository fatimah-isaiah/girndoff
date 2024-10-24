import Header from "/src/components/header"
import {Outlet} from "react-router-dom"


export default function Layout(){
    return(
        <>
        <Header/>
        <div style={{marginTop:"80px",}}>
        <Outlet/>
        </div>
        </>
    )
}