import { LuClock5 } from "react-icons/lu";
import { FaCheckDouble } from "react-icons/fa6";
import { TfiAlarmClock } from "react-icons/tfi";
import "/src/styles/component styles/choose-section.css"

export default function Choose(){
    return(
        <div className="choose-section">
            <div className="top-right-choose">
                <h2>Why Choose Grindoff?</h2>
                <h4>Choose from the category, request a provider,
                meet your provider, enjoy the experience</h4>
            </div>
            <div className="green-block-section">
                <div className="each-block">
                    <h1><LuClock5 /></h1>
                    <div>
                        <h2>Save your Time</h2>
                        <p>We will handle your request and help you 
                    accomplish more, everyday.</p>
                    </div>
                </div>
                <div className="each-block">
                    <h1><FaCheckDouble /></h1>
                    <div>
                        <h2>Safe and convenient</h2>
                        <p>Tasking with Grind is easy, convenient and safe.</p>
                    </div>
                </div>
                <div className="each-block">
                    <h1><TfiAlarmClock /></h1>
                    <div>
                        <h2>Always there for you</h2>
                        <p>Get fast support, whenever you need it.</p>
                    </div>
                </div>
            </div>
        </div>
    )
       
    
}