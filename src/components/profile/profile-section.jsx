import {useRef, useState,useEffect} from "react"
import profileCardsData from "/src/profileCards.js"
import ProfileCard from "./profileCard"
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";


export default function ScrollableProfileCards() {
    const scrollContainerRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
  
    const handleScroll = () => {
        if (scrollContainerRef.current) {
            console.log(scrollContainerRef.current)
          const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
          setShowLeftArrow(scrollLeft > 0);
          setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
        }
      };
  
    useEffect(() => {
      const scrollContainer = scrollContainerRef.current;
      if (scrollContainer) {
        scrollContainer.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial state
      }
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }, []);
  
    const scroll = (direction) => {
      if (scrollContainerRef.current) {
        const scrollAmount = direction === 'left' ? -300 : 300;
        scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    };
  
    return (
      <div className="relative">
        <h1 className="featured-h1">Featured Providers</h1>
        {showLeftArrow && (
          <button
            onClick={() => scroll('left')}
            className="left-scroll-btn"
            aria-label="Scroll left"
          >
            <FaArrowLeft className="scroll-arrow" />
          </button>
        )}
        <div
          ref={scrollContainerRef}
          className="scroll-container"
          style={{ scrollBehavior: 'smooth' }}
        >
          {profileCardsData.map((profile) => (
            <ProfileCard key={profile.id}
                        profile={profile} />
          ))}
        </div>
        {showRightArrow && (
          <button
            onClick={() => scroll('right')}
            className="right-scroll-btn"
            aria-label="Scroll right"
          >
            <FaArrowRight className="scroll-arrow"/>
          </button>
        )}
      </div>
    );
  };
  
  