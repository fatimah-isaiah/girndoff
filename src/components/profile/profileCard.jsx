import { FaRegCircleCheck } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";


export default function ProfileCard({profile}){
    return(
        <div className="scroll-div">
        <div className="profile-card">
            <div className="star-div">
                <FaStar className="white-star"/>
            </div>
            <div className="profile-header">
                <img src={profile.image} alt="Profile Image" className="profile-image" />
                <div>
                    <div className="profile-name">{profile.name}</div>
                    <div><FaStar className="star" /> {profile.positiveReviews} positive reviews</div>
                    <div><FaRegCircleCheck className="check"/> {profile.completedTasks} completed tasks</div>
                </div>
            </div>
            <h3>My Services</h3>
            <ul className="services-list">
                {profile.services.map((item,index) => {
                   return(
                    <li key={index}>
                        <span>{item.name}</span>
                            <span>{item.price}</span>
                    </li>
                   )
                })}
            </ul>
            <p><strong>Provider description:</strong> {profile.description}</p>
        </div>
       </div>
    )
}