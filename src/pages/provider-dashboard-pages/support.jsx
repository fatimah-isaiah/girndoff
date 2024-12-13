import customerQuestions from "../../data/customerServiceQuestions"
import { IoSearch } from "react-icons/io5";
import {  useState,useMemo } from "react";
import "/src/styles/support.css"
import { IoIosArrowForward } from "react-icons/io";
import { ImLocation2 } from "react-icons/im";
import { FaEnvelope } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";

export default function Support(){
   // Use useMemo to generate the random slice of questions only once
   const threeQuestions = useMemo(() => {
    const randomStart = Math.floor(Math.random() * 18)
    const randomEnd = randomStart + 3
    return customerQuestions.slice(randomStart, randomEnd)
  }, [])

    const [openQuestionIndex, setOpenQuestionIndex] = useState(null)
    const [openTenQuestionIndex, setOpenTenQuestionIndex] = useState(null)

    const [showTen, setShowTen] = useState(false)

    function handleAnswer(index){
      // If the clicked question is already open, close it
      // Otherwise, open the clicked question
      setOpenQuestionIndex(prevIndex => prevIndex === index ? null : index)
    }
    
     const tenQuestion =  useMemo(()=>{
            const startTen = Math.floor(Math.random()*10)
            return customerQuestions.slice(startTen,startTen + 10)
        },[])

    function handleTenQuestions(index){
        setOpenTenQuestionIndex(prevIndex => prevIndex === index ? null : index)
    }

    function handleshowTenQuestios(){
        setShowTen(prev => !prev)
    }
    
    return(
        <div className="total-service-support">
            <div className="top-service-support">
                <h3>Support Service</h3>
            </div>
            <div className="bottom-service-support">
                <div className="quick-help-section">
                    <p>Need Quick Help?</p>
                    <div  className="input-customer-questions-section" >
                       <IoSearch />
                       <input 
                       type="text"
                       className="input-customer-questions"
                       placeholder="Search helpful tips..."/>
                    </div>
                </div>
                <div className="question-answer-section">
                    {threeQuestions.map((item,index)=>{
                        const isOpen = openQuestionIndex === index;
                        return(
                            <div key={index}>
                                <div 
                                onClick={() =>handleAnswer(index)}
                                className="customer-question">
                                   <p>{item.question}</p>
                                   <IoIosArrowForward />
                                </div>
                                {isOpen && 
                                <div className="customer-answer">
                                    <p>{item.answer}</p>
                                </div>}
                            </div>
                        )
                    })}
                    <button onClick={handleshowTenQuestios}
                    className="helpful-tips-btn">Show 10 more helpful tips</button>
                    { showTen && tenQuestion.map((item,index)=>{
                        const isTenOpen = openTenQuestionIndex===index
                        return(
                          
                            <div key={index}>
                                <div onClick={() => handleTenQuestions(index)}
                                    className="customer-question">
                                    <p>{item.question}</p>
                                    <IoIosArrowForward />
                                </div>
                                {isTenOpen && 
                                <div className="customer-answer">
                                    <p>{item.answer}</p>
                                </div>}
                            </div>
                        )
                    })}
                </div>
                <div className="admin-info">
                    <h4>Get more support from the team at GrindOff</h4>
                    <div>
                        <p> <ImLocation2 /> 38B, Adeola Pedro Road, Lekki Phase 1, Lagos</p>
                        <p> <FaEnvelope /> hello@grindoff.com</p>
                        <p className="number"> <BiSolidPhoneCall /> +234 804 765 7863, +234 706 879 5342</p>
                    </div>
                </div>
            </div>
        </div>
    )
}