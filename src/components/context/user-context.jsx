import { createContext } from "react"
import AccessLocal from "../functions/accessLocal"

const LoginDetailsContext = createContext()

export default function UserContext({children}){
    const loginDetail = {
        firstName:"omeriji",
        lastName:"Eze",
        image:"/src/assets/professional head shot woman.jpeg"
    }

    const email = AccessLocal("userEmail")
    return(
        <LoginDetailsContext.Provider value={{loginDetail, email}}>
            {children}
        </LoginDetailsContext.Provider>
    )
}

export {LoginDetailsContext}