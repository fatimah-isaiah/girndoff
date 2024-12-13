import { useLocation, Link } from "react-router-dom"
import { useState } from "react"
import serviceData from "/src/data/serviceRendereddata.js"
import { IoShieldCheckmark } from "react-icons/io5";
import ServiceModal from "../../components/service-modal/service-modal";
import "/src/styles/findRates.css"



export default function FindRates() {
    const location = useLocation()
    const categoryFilter = location.state.categoryFilter
    const selectedServices = serviceData.filter((eachService) => {
        return eachService.category.includes(categoryFilter.toLowerCase())
    })

    const [findRateData, setFindRateData] = useState({
        serviceTime: "",
        taskTime: "",
        flexible: "",
        isElite: false,
        isGreat: false,
    })

    const [selectedModalService, setSelectedModalService] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    function handleFindRateChange(event) {
        const { name, value, } = event.target
        setFindRateData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    // Handle service click
    const handleServiceClick = (eachService) => {
        setSelectedModalService(eachService);
        setIsModalVisible(true);
    };
    console.log(selectedModalService, " latest console")
    const closeModal = () => {
        setIsModalVisible(false);
        setSelectedModalService(null);
    };


    console.log(findRateData)
    const taskTime = ["Morning (8am - 12pm)", "Afternoon (12pm - 5pm)", "Evening (5pm - 9:30pm)"]
    return (
        <div className="total-find-rate">

            <div className="top-find-rate">
                <h1 className="find-rate-header">{location.state.categoryFilter}</h1>
                <div className="filter-button-section">
                    <button>All Providers</button>
                    <button>Nearby Providers</button>
                    <button>Available Providers</button>
                    <label htmlFor="sorted">Sorted By:</label>
                    <select
                        id="sorted">
                        <option>Recommended</option>
                    </select>
                </div>
            </div>

            <div className="total-bottom-findrate-section">

                <div className="bottom-left-section">
                    <div className="sheild-learn-more-section">
                        <IoShieldCheckmark className="sheildcheckmark" />
                        <p className="sheild-words">Always have peace of mind. All Taskers undergo ID and background checks. <span className="learn-more-green">Learn More</span></p>
                    </div>
                    <form>
                        <div className="task-date">
                            <h2>Task Date</h2>
                            <div className="right-now-radio"
                                style={{
                                    backgroundColor: findRateData.serviceTime === "Right Now" ? "#14A800" : "", // Change color when selected
                                    color: findRateData.serviceTime === "Right Now" ? "white" : "",
                                }}>
                                <label htmlFor="right-now">Right Now</label>
                                <input
                                    type="radio"
                                    style={{ display: "none" }}
                                    id="right-now"
                                    name="serviceTime"
                                    value="Right Now"
                                    onChange={handleFindRateChange} />
                            </div>

                            <div className="later-date-radio"
                                style={{
                                    backgroundColor: findRateData.serviceTime === "Later Date" ? "#14A800" : "", // Change color when selected
                                    color: findRateData.serviceTime === "Later Date" ? "white" : "",
                                }}>
                                <label htmlFor="later-date">Later Date</label>
                                <input
                                    type="radio"
                                    id="later-date"
                                    style={{ display: "none" }}
                                    name="serviceTime"
                                    value="Later Date"
                                    onChange={handleFindRateChange} />
                            </div>
                        </div>
                        <div>
                            <h2>Task Time</h2>
                            {taskTime.map((time, index) => {
                                return (
                                    <div key={index} className="tasktime-checkboxes">
                                        <input
                                            type="checkbox"
                                            id={time}
                                            name="taskTime"
                                            value={time}
                                            checked={findRateData.taskTime === time}
                                            onChange={handleFindRateChange} />
                                        <label htmlFor={time}>{time}</label>
                                    </div>

                                )
                            })}
                        </div>
                        <div className="choose-specific-time">
                            <p>or choose a specific time</p></div>
                        <div>
                            <select
                                id="select-flexible"
                                name="flexible"
                                value={findRateData.flexible}
                                onChange={handleFindRateChange}>
                                <option value="I Am Flexible">I Am Flexible</option>
                                <option value="Not Flexible">Not Flexible</option>
                            </select>
                        </div>
                        <div className="last-checkbox">
                            <div className="elite-checkbox">
                                <input
                                    type="checkbox"
                                    id='elite'
                                    name="isElite"
                                    value='elite provider'
                                    checked={findRateData.isElite}
                                    onChange={handleFindRateChange} />
                                <label htmlFor="elite">Elite Provider</label>
                            </div>

                            <input
                                type="checkbox"
                                id='great'
                                name="isGreat"
                                value='Great Value'
                                checked={findRateData.isGreat}
                                onChange={handleFindRateChange} />
                            <label htmlFor="great">Great Value</label>
                        </div>
                    </form>
                </div>

                <div className="bottom-right-section">
                    {selectedServices.map((eachService, index) => {
                        return (
                            <div key={index}
                                className="allAvailableCategory"
                                onClick={() => handleServiceClick(eachService, index)}>
                                <div className="top-available-category">
                                    <img className="eachCategoryImage" src={eachService.profileImg} />
                                    <div>
                                        <h2>{eachService.providerName}</h2>
                                        <p>{eachService.completedTasks} completed tasks</p>
                                        <p>{eachService.positiveReviews} positive reviews</p>
                                        <p>{eachService.reliability}reliable</p>
                                    </div>
                                    <h4>{eachService.ratePerHour}</h4>
                                </div>
                                <div className="bottom-available-category">
                                    <div className="bottom-left-category">
                                        <h2>View Profile & Reviews</h2>
                                        <Link
                                            to="choosetime"
                                            state={{ providerName: eachService.providerName,
                                                profileImg:eachService.profileImg
                                             }}
                                            className="select-continue-btn">Select & continue</Link>
                                        <p>You can chat with your Provider, adjust task details, or change service time after booking. </p>
                                    </div>
                                    <div className="bottom-right-category">
                                        <div className="bottom-right-words">
                                            <h2>How can we help:</h2>
                                            <p>You can chat with your Provider, adjust task details, or change service time after booking. You can chat with your Provider, adjust task details, or change service time after booking.</p>
                                        </div>
                                        <div className="bottom-right-review">
                                            <h4>Reviews({eachService.reviews})</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Modal Component */}
                <ServiceModal
                    selectedModalService={selectedModalService}
                    isModalVisible={isModalVisible}
                    closeModal={closeModal} />

            </div>

        </div>
    )
}