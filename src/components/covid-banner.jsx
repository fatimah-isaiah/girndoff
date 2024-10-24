import { useRef,useEffect } from "react"

export default function Covid(){
 const ExitBtnRef = useRef()
 const totalCovidBannerRef = useRef()
 useEffect(()=>{
    const exitContainer = ExitBtnRef.current
    if(exitContainer){
        exitContainer.addEventListener("click",function(){
            totalCovidBannerRef.current.style.display = "none"
        })
    }
 },[])
    return(
        <div ref= {totalCovidBannerRef} className="total-covid-banner">
            <div className="covid-banner">
                <p>See our safety standards for COVID-19</p>
                <button className="learn-more-btn">Learn More</button>
            </div>
            <div>
                <button ref={ExitBtnRef} className="covid-exit-btn">X</button>
            </div>
        </div>
    )
}