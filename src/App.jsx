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
import RequestDetailsLayout from './components/layout/user-request-details-layout'
import RequestDetails from './pages/user-service-request-/user-request-details'
import ProviderDashboard from './components/layout/provider-dashboard-layout'
import DashboardForprovider from './pages/provider-dashboard-pages/dashboard-provider'
import Newjobs from './pages/dashboard/NewJobs'
import History from './pages/provider-dashboard-pages/history'
import Account from './pages/provider-dashboard-pages/account'
import AccountLayout from './components/layout/account-layout'
import AccountIdentityVerification from './pages/provider-dashboard-pages/account-identity-verification'
import AccountGallery from './pages/provider-dashboard-pages/account-gallery'
import AccountServices from './pages/provider-dashboard-pages/account-services'
import AccountLocation from './pages/provider-dashboard-pages/account-location'
import AuthRequired     from './components/authentication'
import Document from './pages/provider-dashboard-pages/document'
import IncomeLayout from './components/layout/income-layout'
import TotalIncome from './pages/provider-dashboard-pages/income/totalIncome'
import UpcomingJobs from './pages/provider-dashboard-pages/income/upcomingJobs'
import CompletedJobs from './pages/provider-dashboard-pages/income/completedJobs'
import CancelledJobs from './pages/provider-dashboard-pages/income/cancelledJobs'
import IncomePerService from './pages/provider-dashboard-pages/income/incomePerService'
import IncomePerMonth from './pages/provider-dashboard-pages/income/incomePerMonth'
import Referrals from './pages/provider-dashboard-pages/referrals'
import BillingInformation from './pages/provider-dashboard-pages/billingInformation'
import Wallet from './pages/provider-dashboard-pages/wallet'
import ChangePassword from './pages/provider-dashboard-pages/changePassword'
import Support from './pages/provider-dashboard-pages/support'
import TransactionHistory from './pages/provider-dashboard-pages/walletpath/transactionHistory'
import PaymentSummary from './pages/provider-dashboard-pages/walletpath/paymentsummary'

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
                        <Route path="findrates/choosetime" element={<ChooseTime/>}/>
                        <Route path='findrates/choosetime/confirmdetails' element={<ConfirmDetails/>}/>
                   </Route >
            </Route>
            <Route path='login' element={<Login/>}/>
            <Route element={<AuthRequired />}>
                <Route path="requestDetails" element={<RequestDetailsLayout/>}>
                    <Route index element={<RequestDetails/>}/>
                    <Route path='providerdashboard' element={<ProviderDashboard/>}>
                         <Route path='newjobs' element={<DashboardForprovider/>}>
                             <Route index element={<Newjobs/>} />
                         </Route>
                         <Route path='history' element={<History/>}/>
                         <Route path='account' element={<AccountLayout/>} >
                             <Route index element={<Account/>} />
                             <Route path='accountverification' element={<AccountIdentityVerification/>}/>
                             <Route path='accountgallery' element={<AccountGallery/>} />
                             <Route path='accountservices' element={<AccountServices/>}/>
                             <Route path='accountlocation' element={<AccountLocation/>}/>                 
                        </Route>
                        <Route path='document' element={<Document/>}/>
                        <Route path='income' element={<IncomeLayout/>}>
                             <Route index element ={<TotalIncome/>}/>
                             <Route path='upcomingjobs' element={<UpcomingJobs/>}/>
                             <Route path='completedjobs' element={<CompletedJobs/>}/>
                             <Route path='cancelledjobs' element={<CancelledJobs/>}/>
                             <Route path='incomeperservice' element={<IncomePerService/>}/>
                             <Route path='incomepermonth' element={<IncomePerMonth/>}/>
                        </Route>
                        <Route path='referrals' element={<Referrals/>}/>
                        <Route path='billinginformation' element={<BillingInformation/>}/>
                        <Route path='wallet' element={<Wallet/>}>
                             <Route index element={<TransactionHistory/>}/>
                             <Route path='paymentsummary' element={<PaymentSummary/>}/>
                        </Route>
                        <Route path='changepassword' element={<ChangePassword/>}/>
                        <Route path='support' element={<Support/>}/>
                   </Route>
                </Route>
            </Route>

       </Routes>
   </BrowserRouter>
   
 ) 
}

export default App
