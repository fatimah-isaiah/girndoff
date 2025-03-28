import { FaArrowDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import "/src/styles/hero.css"
import { LoginDetailsContext } from "./context/user-context";
import { useContext } from "react";
// import hero-image from "src\assets\grindoff-hero.jpeg"
import heroImage from "/public/publicAssets/grindoff-hero.jpeg"


export default function Hero(){

    const {toggleHomePage} = useContext(LoginDetailsContext)
    return(
        <section>
        <div className="hero-section">
            <div className="word-section">
                <h1 className="discover">Discover and Connect Instantly </h1>
                <p className="fastest-words">The Fastest and reliable way to get things done.</p>
                <div className="search-input">
                    <div className="position-search-icon">
                        <FaSearch className="search-icon"/>
                        <input className="input-bar" placeholder="for popular sevices around you" type="text"  />
                    </div>
                    <button className="search-bar">Search</button>
                </div>
                <div className="popular-section">
                <p className="popular-word">Popular:</p>
                     <span className="popular-span">Plumbering</span>
                     <span className="popular-span">HairCut Home Service</span>
                     <span className="popular-span">Generator Repair</span>
                     <a className="popular-link" href="#">See More.</a>
                </div>
           </div>
           <div>
              <img className="hero-image" src={heroImage} />
           </div>
        </div>
        <button className="downward-arrow"
        onClick={()=> toggleHomePage()}><FaArrowDown /></button>
        </section>
    )
}

