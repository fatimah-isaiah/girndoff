import { useState, } from "react";
import { RiMapPin2Fill } from "react-icons/ri";
import "/src/styles/account-location.css"
import { IoSearch } from "react-icons/io5";


export default function AccountLocation(){
    const [location, setLocation] = useState("")
    const [currentLocation, setCurrentLocation] = useState("")
    const [showNoLocation, setShowNoLocation] = useState(true)

    const handleLocationChange = (event)=>{
        setLocation(event.target.value)
        setShowNoLocation(false)
    }

   
    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setCurrentLocation([latitude,longitude])
   }
      
    const handleCurrentLocation = ()=>{
        
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success)
        }
        else {
            console.error('Geolocation is not supported by this browser.');
        }
    }



    return(
        <div className="total-account-location">
            <div className="location-header">
                <h4>View and update your service location address</h4>
            </div>
            <div className="input-location-section">
                <p>Service Starting Address</p>
                <div className="input-button-line">
                    <div className="total-input-location">
                        <IoSearch />
                         <input 
                         className="input-location"
                         placeholder="Type a location"
                         name="location"
                         value={location}
                         onChange={handleLocationChange}/>
                    </div>
                    <button onClick={handleCurrentLocation}
                    className="current-acccount-location-btn"> <RiMapPin2Fill /> Use Current Location</button>
                </div>
            </div>
            {showNoLocation ?
            <div className="no-location-section">
                <img src="/src/assets/35.png"/>
                <p>Whoops!</p>
                <p>No location selected yet...</p>
            </div>: location ?<h5>{location}</h5>:<h5>{currentLocation.latitude}</h5>}
        </div>
    )
}