import './App.css'
import MainPage from './mainpage'
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Layout from "/src/components/layout/layout.jsx"
import SignUp from './pages/provider/signup-provider'
import ServiceProfile from './pages/provider/service-profile'
import Verification from './pages/provider/verification'
import Pricing from './pages/provider/pricing'
import ProviderLayout from "/src/components/layout/provider-layout.jsx"
import Login from './pages/login/login'
import RequestLayout from './components/layout/user-request-layout'
import ServiceRequest from './pages/service request/service-request-signup'
import FindRates from './pages/service request/findRates'
import ChooseTime from './pages/service request/chooseTime'
import ConfirmDetails from './pages/service request/confirmDetails'

function App() {

  
 return(
   <BrowserRouter>
       <Routes>
           <Route path='/' element={ <Layout/>}>
               <Route index element={ <MainPage/>}/>
                   <Route path='signup' element={<ProviderLayout/>}>
                       <Route index element={ <SignUp/>}/>
                       <Route path='serviceprofile' element={ <ServiceProfile/>}/>
                       <Route path='verification' element={ <Verification/>}/>
                       <Route path='pricing' element={ <Pricing/>}/>
                   </Route>
                   <Route path='servicedescription' element={<RequestLayout/>}>
                        <Route index element={<ServiceRequest/>}/>
                        <Route path='findrates' element={<FindRates/>}/>
                        <Route path="choosetime" element={<ChooseTime/>}/>
                        <Route path='confirmdetails' element={<ConfirmDetails/>}/>
                   </Route >
            </Route>
        <Route path='login' element={<Login/>}/>
       </Routes>
   </BrowserRouter>
   
 ) 
}

export default App
