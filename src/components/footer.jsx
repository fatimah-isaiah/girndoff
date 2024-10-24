import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer(){

let currentDate = new Date();
let year = currentDate.getFullYear();
console.log(year);

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