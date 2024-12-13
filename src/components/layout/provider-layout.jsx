

import { Outlet, useLocation } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { BsWrenchAdjustable, BsClipboard2CheckFill, BsCashCoin } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import "/src/styles/provider-layout.css"

// Stepper component for provider onboarding flow
export default function ProviderLayout() {
    const location = useLocation();

    // Steps array defining the step navigation
    const steps = [
        {
            icon: <IoPerson />,
            label: "SignUp",
            path: ".",
            routeLocation: "Become a Provider",
            step: 1
        },
        {
            icon: <BsWrenchAdjustable />,
            label: "Build your service profile",
            path: "serviceprofile",
            routeLocation: "Build your service profile",
            step: 2
        },
        {
            icon: <BsClipboard2CheckFill />,
            label: "Identity Verification",
            path: "verification",
            routeLocation: "Identity Verification",
            step: 3
        },
        {
            icon: <BsCashCoin />,
            label: "Set weekly availabilities and pricing",
            path: "pricing",
            routeLocation: "Set weekly availabilities and pricing",
            step: 4
        }
    ];

    // Function to get the current step based on the URL path
    const getCurrentStep = () => {
        const currentStep = steps.find(step => location.pathname.includes(step.path));
    
        return currentStep ? currentStep.step : 1;
    };

    const currentStep = getCurrentStep();
       console.log(currentStep, "this should be a single number")
    return (
        <div>
            <div className="total-nav">
                <div className="top-div">
                    <h1>{location?.state?.routeLocation || "Sign Up"}</h1>
                    <p>Fill out the form with basic information</p>
                </div>

                <nav className="nav-bar">
                    <ul className="nav-links">
                        {steps.map((step, index) => {
                            // Mark step as active if the step value is less than or equal to the current step
                            const isActive = step.step <= currentStep;

                            return (
                                <li key={index}>
                                    <NavLink
                                        state={{
                                            routeLocation: step.routeLocation
                                        }}
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



// import {  Outlet, useLocation} from "react-router-dom"
// import { IoPerson } from "react-icons/io5";
// import { BsWrenchAdjustable } from "react-icons/bs";
// import { BsClipboard2CheckFill } from "react-icons/bs";

// import { BsCashCoin } from "react-icons/bs";
// import { NavLink } from "react-router-dom";



// export default function ProviderLayout() {
//     const location = useLocation()
//     const steps = [
//         {
//          icon:  <IoPerson />,
//          label:"SignUp",
//          path:".",
//          routeLocation:"Become a Provider",
//          step:1
//         },{
//             icon: <BsWrenchAdjustable /> ,
//          label:"Build your service profile",
//          path:"serviceprofile",
//          routeLocation:"Build your service profile",
//          step:2
//         },{
//             icon:  <BsClipboard2CheckFill />,
//             label:"Identity Verification",
//             path:"verification",
//             routeLocation:"Identity Verification", 
//             step:3
//         },{
//             icon:  <BsCashCoin />,
//          label:"Set weekly availabilities and pricing",
//          path:"pricing" ,
//          routeLocations: "Set weekly availabilities and pricing", 
//          step:4
//         }
//     ]


//     return (
//         <div>
//         <div className="total-nav">
//             <div className="top-div">
//                <h1>{location?.state?.routeLocation || "Sign Up"}</h1> 
//                <p>Fill out form with basic information</p>
//             </div>
//             <nav className="nav-bar">
//                 <ul className="nav-links">
                
//                     {steps.map((step,index)=>{
                        
//                           const isActive =  step?.step<=step[location.pathname]?.step;
//                         return(
//                         <li key={index}>
//                             <NavLink
                             
//                              state={{
//                              routeLocation: step.routeLocations
//                             }} 
//                            to={step.path} 
//                            className={`nav-link ${isActive ? "active-link": null}  `}>
//                                      <span className="icon">
//                                      {step.icon}
//                                       </span>
//                                       {step.label}
//                               </NavLink> 
//                         </li>
//                         )
//                     })}
                   
                   
                    
//                 </ul>
//             </nav>
//             </div>
//             <div style={{backgroundColor:"#F9FAFB",}}>
//                 <Outlet />
//             </div>
//         </div>
//     )
// }

