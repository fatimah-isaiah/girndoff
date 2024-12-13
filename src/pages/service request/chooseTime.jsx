import { useLocation ,Link} from "react-router-dom"
import { useEffect, useState } from "react";
import "/src/styles/chooseTime.css"

export default function ChooseTime() {
    const location = useLocation()

    const [chooseTimeData, setChooseTimeData] = useState({
        month: "",
        day: "",
        year: "",
        time: "",
    })

    const [showTime, setShowTime] = useState(false)



    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const days = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
    ];
    const years = [
        2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034
    ];
    const times = [
        "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
        "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
    ];


    function handleChooseTimeData(event) {
        const { name, value } = event.target
        setChooseTimeData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    useEffect(() => {
        function handleCheckState() {
            if (!chooseTimeData.day || !chooseTimeData.time || !chooseTimeData.month || !chooseTimeData.year) {
                setShowTime(false);
            } else {
                setShowTime(true);
            }
        }
        handleCheckState();
    }, [chooseTimeData]);


    console.log(chooseTimeData)


    if (!location.state || !location.state.providerName) {
        return <h1>No provider selected</h1>;
    }

    return (
        <div className="total-chooseTime">
            <h1 className="choose-header">Choose your task date and start time</h1>
            <div className="choose-section-total-bottom">
                <div className="left-choosetime-section">
                    <div className="choosetime-image-div" >
                        <img className="choosetimeImage" src={location.state?.profileImg} />
                        <h3>{location.state?.providerName}</h3>
                    </div>
                    <div className="chooseTime-date-section">
                        <div>
                            <select
                                className="choosetime-month"
                                name="month"
                                value={chooseTimeData.month}
                                onChange={handleChooseTimeData}
                                >
                                {months.map((month, index) => {
                                    return (<option key={index}>{month}</option>)
                                })}
                            </select>
                        </div>
                        <div>
                            <select
                                className="choosetime-day"
                                name="day"
                                value={chooseTimeData.day}
                                onChange={handleChooseTimeData}>
                                {days.map((day, index) => {
                                    return (<option key={index}>{day}</option>)
                                })}
                            </select>
                        </div>
                        <div>
                            <select
                                className="choosetime-year"
                                name="year"
                                value={chooseTimeData.year}
                                onChange={handleChooseTimeData}>
                                {years.map((year, index) => {
                                    return (<option key={index}>{year}</option>)
                                })}
                            </select>
                        </div>
                    </div>
                    <div>
                        <select
                            className="choosetime-time"
                            name="time"
                            value={chooseTimeData.time}
                            onChange={handleChooseTimeData}>
                            {times.map((time, index) => {
                                return (<option key={index}>{time}</option>)
                            })}
                        </select>
                        <p className="choosetime-left-words">You can chat to adjust task details or change start time after confirming.</p>
                    </div>
                </div>
                {showTime && <div className="right-choosetime-section">
                    {showTime && (
                        <div>
                            <h3>Request for:</h3>
                            <h1>{chooseTimeData.month} {chooseTimeData.day}, {chooseTimeData.time}</h1>
                            <Link to="confirmDetails" className="choose-time-button">Select & continue</Link>
                            <div className="confirm-time">
                                <img width={100} src="/src/assets/To Do List.png" />
                                <p className="confirm-time-words">Next, confirm your details to
                                    get connected with your Provide.</p>
                            </div>
                        </div>
                    )}
                </div>}
            </div>

        </div>
    )

}