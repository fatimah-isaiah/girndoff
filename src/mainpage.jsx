import './App.css'
import Hero from "./components/hero.jsx"
import data from "/src/data/data.js"
import Trend from "./components/trend-section.jsx"
import { SlArrowDown } from "react-icons/sl";
import Choose from "./components/choose-section.jsx"
import Works from "./components/works.jsx"
import ScrollableProfileCards from './components/profile/profile-section.jsx'
import Testimonial from "./components/Testimonial-section.jsx"
import Comfortable from './components/comfortable.jsx';
import Footer from './components/footer.jsx';
import Covid from './components/covid-banner.jsx';
import {useContext} from "react"
import { LoginDetailsContext } from "./components/context/user-context";

function MainPage() {
  const trends = data.map(function(item){
    return(
      <Trend key={item.id}
             item={item}/>
    )

  })

  const {showHomePage} = useContext(LoginDetailsContext)
  
 return(
     <div className='container'>
      <Covid/>
     <Hero />
     {showHomePage &&
     <>
     <div className='third-section'>
            <div className="writings">
                <h1>Trending Grind near you</h1>
                <p>Choose a service you need, eanter a few details, and get matched with vetted qualified and available Grinds</p>
            </div>

         <section className="service-grid">
             {trends}
         </section>
         <button className='view-all-btn'>View All Services<SlArrowDown /></button>
     </div>
     <Choose />
     <Works/>
     <ScrollableProfileCards />
     <Testimonial/>
    <Comfortable/>
    <Footer/>
    </>}
     </div>
 ) 
}

export default MainPage
