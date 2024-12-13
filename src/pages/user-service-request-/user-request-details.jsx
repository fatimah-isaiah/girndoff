 import "/src/styles/user-request-details.css"
 import { BsFillExclamationCircleFill } from "react-icons/bs";
 import { LuShieldCheck } from "react-icons/lu";
 import { FaHeart } from "react-icons/fa";
 import { FaCheckCircle } from "react-icons/fa";
 import { FaEnvelope } from "react-icons/fa6";
 import  { useEffect, useState } from 'react';
 import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
 import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { FaCircle } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { PiDotsThreeBold } from "react-icons/pi";
import { FaRegSmileBeam } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";



 delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

export default function RequestDetails(){
    const [userLocation,setUserLocation] =useState(null)
    const [providerCoordinate,setProviderCoordinate] =useState(null)
    const [showMap, setShowMap] =useState(true)
    const [showChat, setShowChat] = useState(false)
    const [inputValue, setInputValue] = useState(null)
    const [chats, setChats] = useState([]); 
   
    const provider =["Job Type:","Request status:","Provider status:","Category:","Sub Category:","Address:",
        "Payment Mode:","Price Type:","Price:",]
    const services =[
        "On Demand",
        "Ongoing",
        "Waiting for Provider",
        "Hospitals & Pharmacy",
        "Clinical Services",
        "28 Allen Avenue, Ikeja, Nigeria",
        "In app payment",
        "Hourly Base Price",
       "N5000/hr"]
       const providerLocation = services[5]
       function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setUserLocation([latitude,longitude])
      }
      

       useEffect(() => { 
        const getProviderLocation = async()=>{
            const response = await fetch(`https://api.geoapify.com/v1/geocode/search?text=${providerLocation}&apiKey=9a9adbe153924934976c38990fe4fb68`)
            const data = await response.json()
           setProviderCoordinate(data.features[0].geometry.coordinates)
        }
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success)
        }
        else {
            console.error('Geolocation is not supported by this browser.');
        }
        getProviderLocation()
       },[providerLocation])

       function handleChatProvider(){
        setShowChat(true)
        setShowMap(false)
       }

       function cancelChat(){
        setShowChat(false)
        setShowMap(true)
       }

       function handleSendChat(){
        if (inputValue) {
            setChats((prevChats) => [...prevChats, inputValue]);
            setInputValue(""); // Clear input after sending
        }
       }
    return(
        <div className="total-user-details-section" >
            <h1 className="user-header">Provider Details</h1>
            <div style={{backgroundColor:"#FFFFFF"}}>
                <div className="top-user-details-section">
                    <h1>Hosipitals & Pharmacy</h1>
                    <div>
                    <ul className="user-update">
                        <li>Requested</li>
                        <li>Assigned</li>
                        <li>
                            <button 
                            className="accepted-btn">Accepted</button>
                        </li>
                        <li>Provider on the Move</li>
                        <li>onGoing</li>
                        <li>Finished</li>
                    </ul>
                    </div>
                </div>
                <div className="bottom-user-details-section">
                <div className="bottom-left-user-details-section">
                    <div className="provider-details">
                        <img src="/src/assets/Ellipse 25.png" />
                        <div>
                            <p><FaCheckCircle style={{color:"#14A800",marginRight:"10px"}} />80 completed tasks</p>
                            <p><FaHeart style={{color:"FFD703",marginRight:"10px"}}  />100% positive reviews<BsFillExclamationCircleFill style={{color:"#14A800",marginLeft:"5px" }}  /></p>
                            <p><LuShieldCheck style={{color:"#14A800",marginRight:"10px"}} />80% Reliable<BsFillExclamationCircleFill style={{color:"#14A800",marginLeft:"5px"}}  /></p>
                        </div>
                    </div>
                    <div className="under-provider-details">
                        <div>
                            <ul>
                                <li className="provider-heading">Provider:</li>
                                {provider.map((provider,index)=>{
                                    return(
                                        <li key={index}>{provider}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div>
                        <ul>
                            <li className="service-heading">Agape Stores</li>
                                {services.map((service,index)=>{
                                    return(
                                        <li key={index}>{service}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="bottom-right-user-details-section">
                   { showMap && (
                    <>
                    <div className="chat-cancel-buttons-section">
                        <button
                        className="chat-provider-btn"
                        onClick={handleChatProvider}><FaEnvelope className="envelop-icon"/>
                         Chat with Provider</button>
                        <button 
                        className="cancel-btn"> X Cancel</button>
                    </div>
                    <div
                    style={{ height: "300px", width: "510px"}}>
                        {/* <img src="/src/assets/Rectangle 205.png" width={"510px"}/> */}
                        {userLocation ? (
                            <MapContainer center={userLocation} zoom={13} style={{ height: "100%", width: "100%" }}>
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <Marker position={userLocation}>
                                    <Popup>Your Location</Popup>
                                </Marker>
                               { providerCoordinate && <Marker position={providerCoordinate}>
                                    <Popup>Your Location</Popup>
                                </Marker>}
                            </MapContainer>
                        ) : (
                            <p>Loading map...</p>
                        )}
                    </div>
                </>)}
                {showChat &&(
                    <div className="total-chat-section">
                        <div className="top-chat-section">
                            <div className="top-chat-left">
                                <p style={{fontSize:"16px"}}>Agape Stores</p>
                                <p  style={{fontSize:"12px"}}><FaCircle /> Available</p>
                            </div>
                            <div className="top-chat-right" >
                                <BsFillTelephoneFill />
                                <PiDotsThreeBold />
                                <button 
                                className="cancel-chat-btn"
                                onClick={cancelChat}> X </button>

                            </div>
                        </div>
                        <div>
                            {chats.length ===1 ? (
                                <div style={{position:"relative", border:"2px solid red",padding:"5px"}}>
                                    <p style={{textAlign:"center"}}>
                                        <span className="new-message">1</span> New Message
                                    </p>
                                </div>
                            ): null}
                            { chats.length > 0 ?
                                chats.map((eachChat,index)=>{
                                    return(
                                        <div key={index} className="each-sent-chat">
                                        <p >{eachChat}</p>
                                        </div>
                                    )
                                }):
                            <p style={{fontSize:"12px",color:"#00000099"}}>
                                Your conversations with Kharis Clinic starts here.
                            </p>}

                        </div>
                        <div className="bottom-chat-section">
                           <div className="Compose-your-message">
                             < input 
                             className="compose-input"
                             placeholder="Compose your message..."
                             value={inputValue}
                             onChange={(event)=>setInputValue(event.target.value)}/>
                             <div>
                                <button className="send-chat-btn"
                                onClick={handleSendChat}>Send</button>
                                <button className="confirm-chat-btn">Confirm</button>
                             </div>
                           </div>
                           <div className="smiley-emoji">
                           <FaRegSmileBeam />
                           <FaPlus />
                           </div>
                        </div>
                    </div>

                )}
                </div>
                </div>
            </div>
        </div>
    )
}