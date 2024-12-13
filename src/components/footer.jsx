import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "/src/styles/footer.css"

export default function Footer(){

let currentDate = new Date();
let year = currentDate.getFullYear();

    return(
        <div className="total-footer">
            <div>
                <p>(c){year} GrindOff</p>
            </div>
            <div>
                <p>Connect With Us <span className="connect-icon-span"><FaInstagram /><FaFacebookSquare /><FaTwitter /></span></p>
            </div>
        </div>
    )
}