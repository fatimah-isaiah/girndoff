import { HiClipboardList } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { Outlet, useLocation, NavLink } from "react-router-dom";

export default function RequestLayout(){
    const location = useLocation()
    const steps = [
        {
            icon: <HiClipboardList />,
            label: "Service Description",
            path: ".",
            step: 1
        },
        {
            icon: <IoSearch  />,
            label: "Find Providers & Rates",
            path: "findrates",
            step: 2
        },
        {
            icon: < FaClock />,
            label: "Choose Time & Date",
            path: "choosetime",
            step: 3
        },
        {
            icon: <FaCheckCircle />,
            label: "Confirm Details",
            path: "confirmdetails",
            step: 4
        }
    ];
    
    function getCurrentStep(){
       const currentStepObeject = steps.filter(each => location.pathname.includes(each.step))
       return currentStepObeject? currentStepObeject.step: 1
    } 

    const currentStep = getCurrentStep()
    return (
        <div>
            <div className="total-nav">
                <div className="top-div">
                    <h1>Service Request</h1>
                    <p>Tell us about your service. We use these details to show Providers in your area who fit your needs.</p>
                </div>

                <nav className="nav-bar">
                    <ul className="nav-links">
                        {steps.map((step, index) => {
                            // Mark step as active if the step value is less than or equal to the current step
                            const isActive = step.step <= currentStep;

                            return (
                                <li key={index}>
                                    <NavLink
                                        to={step.path}
                                        className={`nav-link ${isActive ? "active-link" : ""}`}>
                                        <span className="icon">{step.icon}</span>
                                        {step.label}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>

            {/* Outlet for rendering the content of each step */}
            <div style={{ backgroundColor: "#F9FAFB" }}>
                <Outlet />
            </div>
        </div>
    );
}