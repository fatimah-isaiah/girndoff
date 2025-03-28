import testimonialData from "/src/data/testimonial.js"
import {useRef, useState, useEffect} from "react"
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import "/src/styles/component styles/testimonial-section.css"

export default function Testimonial(){

const scrollableRef = useRef(null)
const [scrollLeft, setScrollLeft] = useState(true)
const [scrollRight, setScrollRight] = useState(false)

const handleScroll = () => {
    if (scrollableRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollableRef.current;
      setScrollLeft(scrollLeft > 0);
      setScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

useEffect(() => {
  const scrollContainer = scrollableRef.current;
  if (scrollContainer) {
    scrollContainer.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
  }
  return () => scrollContainer.removeEventListener('scroll', handleScroll);
}, []);
    const eachTestimonial = testimonialData.map((item,index) => {
        return(
            <div className="each-testimonial" key={index}>
            <h4 className="testimonial-qoute">{`"${item.quote}"`}</h4>
            <div className="each-testimonial-bottom">
                <img src={item.avatar} className="avatar"/>
                <div className="name-role-div">
                    <h4>{item.name}</h4>
                    <p>{item.role}</p>
                </div>
            </div>
            </div>
        )
    })
function scroll(direction){
  const scrollDirection = direction === "left"? -300:300
  scrollableRef.current.scrollBy({left:scrollDirection, behaviour:"smooth"})
}

    return(
        <div className="testimonial-container">
            <div className="relative-part">
        {scrollLeft &&<button className="left-scroll-btn position-left-btn" onClick={() =>{scroll("left")}}><FaArrowLeft className="scroll-arrow"/></button>}
        <h1 className="testimonial-heading">What People Are Saying</h1>
          <div ref = {scrollableRef} className="scrollable-testimonial-div">
            {eachTestimonial}
          </div>
        {scrollRight && <button className="right-scroll-btn position-right-btn"
        onClick={()=>{scroll("right")}}><FaArrowRight className="scroll-arrow" /></button>}
           </div>
        <div className="ready-section">
            <h1 className="ready-heading">Ready to Get Started?</h1>
            <div className="provider-user-section">
                <div className="user-part">
                    <div className="user-part-text">
                        <h4>Hear that? The sweet sigh of relief.Start geting more done</h4>
                        <button>Sign Up as a User</button>
                    </div>
                </div>
                <div className="provider-part">
                  <div className="provider-part-text">
                    <h4>Grow your own business while saving the day for the busy people</h4>
                    <button className="provider-part-btn">Become a Provider</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

