import { useSearchParams } from "react-router-dom"
import referredData from "/src/data/userReferrals.js"
import "/src/styles/referrals.css"
export default function Referrals(){
    const userReferralDetails = [
{
        id:1,
        title:"Referral Code:",
        info:"8763u7643uour6"
},{
    id:2,
    title:"Total:",
    info:"0",
},{
    id:3,
    title:"Earnings:",
    info:"N 0.00",
}]
const[getCurrentPage, setGetCurrentPage] = useSearchParams()

const currentPage = parseInt(getCurrentPage.get("page")|| "1",10)

const dataPerPage = 4
const startIndex = (currentPage -1 )* dataPerPage
const endIndex = startIndex + dataPerPage
   
const paginatedData= referredData.slice(startIndex, endIndex)

function goToNextPage(){
    setGetCurrentPage({page: currentPage + 1})
}
function goToPreviousPage(){
    if(currentPage>1){
        setGetCurrentPage({page:currentPage - 1})
    }
}
console.log(paginatedData)
    return(
        <div className="total-referrals">
            <div className="referral-header">
                <h3>Referrals</h3>
            </div>
            <div style={{backgroundColor:"#FFFFFF",padding:"20px",marginTop:"20px"}}>
                   <div className="top-referral-section">
                       <div className="left-top-referral-section">
                           <div>
                                <img src="/src/assets/referral1 1.png"/>
                          </div>
                          <div >
                               <h3 className="spread-header">Spread the word and earn rewards</h3>
                               <p className="someone-line">When someone signs up with your referral link, you will get 
                               below benefits</p>
                               <div className="commission-div">
                                   <p>Referral Commission:  N 1,000</p>
                               </div>
                               <p>Click to copy invite link</p>
                               <div className="refferal-link">
                                   <p>http://grindoff.com/8u6etd76du676dreferral</p>
                               </div>
                          </div>
                       </div>
                       <div className="right-top-referral-section">
                             <div className="right-referral-header">
                               <h3>Referrals</h3>
                             </div>
                             <div>
                             {userReferralDetails.map((item,index)=>{
                               return(
                                   <div key={index} className="each-referral-detail">
                                       <p>{item.title}</p>
                                       <p>{item.info}</p>
                                   </div>
                               )
                             })}
                             </div>
                       </div>
                </div>
                <div>
                      <table>
                          <tr>
                              <th>S/N</th>
                              <th>image</th>
                              <th>UserName</th>
                              <th>Joined</th>
                          </tr>
                          {paginatedData.map((item)=>{
                              return(
                              <tr key={item.id}>
                                  <td>{item.id}</td>
                                  <td>< img src={item.image}/></td>
                                  <td>{item.username}</td>
                                  <td>{item.joined}</td>
                              </tr>
                              )
                          })}
                   
                      </table>
                </div>
                <div className="referrals-footer">
                     <p>Showing {currentPage} to 2 of 2 entries</p>
                     <div className="referral-page-button" >
                         <button onClick={goToPreviousPage}
                         className="previous-page-btn">Previous</button>
                         <span className="currenpage-span">{currentPage}</span>
                         <button onClick={goToNextPage}
                         className="next-page-btn">Next</button>
                     </div>
                </div>
            </div>
         
        </div>
    )
}