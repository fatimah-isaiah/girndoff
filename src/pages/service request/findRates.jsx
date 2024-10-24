import { useLocation } from "react-router-dom"
import serviceData from "/src/serviceRendereddata.js"
export default function FindRates(){
    const location = useLocation()
    const categoryFilter = location.state.categoryFilter
    const selectedServices = serviceData.filter((eachService)=>{
       return  eachService.providerName.toLowerCase().includes(categoryFilter.toLowerCase())
    })
    console.log(selectedServices, "used location from service-request page to filter the data array")
    return(
        <div>
            <h1>{location.state.categoryFilter}</h1></div>
    )
}