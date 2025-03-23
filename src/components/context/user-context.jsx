import { createContext, useState } from "react"
import AccessLocal from "../functions/accessLocal"
import profileImage from "/public/publicAssets/profile.jpg"

const LoginDetailsContext = createContext()

export default function UserContext({children}){
    const loginDetail = {
        firstName:"fatimah",
        lastName:"isaiah",
        image: profileImage,
    }

    const [showHomePage,setShowHomepage] = useState(false)

    function toggleHomePage(){
        setShowHomepage(prevData => !prevData)
    }

    const email = AccessLocal("userEmail")
    return(
        <LoginDetailsContext.Provider value={{loginDetail, email,toggleHomePage,showHomePage}}>
            {children}
        </LoginDetailsContext.Provider>
    )
}

export {LoginDetailsContext}