import { FaArrowDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import "/src/styles/hero.css"

export default function Hero(){
    return(
        <section>
        <div className="hero-section">
            <div className="word-section">
                <h1 className="discover">Discover and Connect Instantly </h1>
                <p>The Fastest and reliable way to get things done.</p>
                <div className="search-input">
                    <div className="position-search-icon">
                        <FaSearch className="search-icon"/>
                        <input className="input-bar" placeholder="for popular sevices around you" type="text"  />
                    </div>
                    <button className="search-bar">Search</button>
                </div>
                <div className="popular-section">
                <p>Popular:</p>
                     <span className="popular-span">Plumbering</span>
                     <span className="popular-span">HairCut Home Service</span>
                     <span className="popular-span">Generator Repair</span>
                     <a className="popular-link" href="#">See More.</a>
                </div>
           </div>
           <img className="hero-image" src= "src\assets\grindoff-hero.jpeg"/>
        </div>
        <button className="downward-arrow"><FaArrowDown /></button>
        </section>
    )
}

