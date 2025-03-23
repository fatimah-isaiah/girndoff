import { IoLinkSharp } from "react-icons/io5";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { GrDocumentText } from "react-icons/gr";
import { Link } from "react-router-dom";
import "/src/styles/component styles/works.css"
import man1 from "/public/publicAssets/man1 1.png"
import man2 from "/public/publicAssets/man2 1.png"

export default function Works(){
    const workData = [{
        icon:<GrDocumentText />,
        title:"Tell Us What and Where",
        paragraph:"Enter a service  description along with your name, locations and phone number."
    },{
        icon:<IoLinkSharp />,
        title:"Get Connected",
        paragraph:"We use ratings, reviews, performance metrics to find the best pros. In minutes we will connect you with trusted providers."
    },{
        icon:<IoShieldCheckmarkOutline />,
        title:"Get It Done",
        paragraph:"Just like that, your provider steps in,offer you quality service and you make your payment through the app."
    }]
    return(
        <div className="total-works-section">
            <div className="top-section-with-title">
             <h1 className="works-title">How it Works</h1>
            <div className="how-it-works-top-section">
                {workData.map((item,index) =>{
                    return(
                        <div className="each-works" key={index}>
                        <div className="icon-each">
                            <h1 className="h1">{item.icon}</h1>
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.paragraph}</p>
                    </div>
                    )
                })}
            </div>
            </div>
            <div className="bottom-works-section">
                <div className="bottom-words">
                   <h1>Earn up to <span className="green-money"> N200,000 </span> monthly on Grindoff</h1>
                   <Link to="signup" className="provider-btn">Become a Provider</Link>
                </div>
                <div>
                   <img className="man1" src={man1}  alt="man1" />
                   <img className="man2" src={man2}  alt="man2" />
                </div>
            </div>
        </div>
    )
}