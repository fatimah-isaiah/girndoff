import { useState } from "react"
import "/src/styles/changePassword.css"


export default function ChangePassword(){

    const [changedPasswordData, setChangedPasswordData] = useState({
        currentPassword:"",
        newPassword:"",
        reTypePassword:""
    })

    function handleChangePassword(event){
        const {name,value} = event.target
        setChangedPasswordData((prevData)=>{
            return{
                ...prevData,
                [name]:value
            }
        })
    }
    console.log(changedPasswordData)
    return(
        <div className="total-change-password">
            <div className="top-change-password">
                <h3> Change Password</h3>
            </div>
            <div className="bottom-change-password">
                <div className="delete-account-section">
                    <section>
                       <p className="change-pass-line"> Change Password</p>
                       <p className="strongPassword">It is a good idea to use a strong password that youre not using elsewhere</p>
                    </section>
                    <div>
                        <button 
                        className="delete-acc-btn">Delete Account</button>
                    </div>
                </div>
                <div className="password-input-padlock">
                    <div>
                        <form>
                            <div className="crrent-password-section">
                                <label htmlFor="currentPassword">Current Password</label>
                                <input 
                                type="password"
                                id="currentPassword"
                                name="currentPassword"
                                className="currentPassword"
                                value={changedPasswordData.currentPassword}
                                onChange={handleChangePassword}/>
                            </div>
                            <div className="new-password-section">
                                <label htmlFor="newPassword">New Password</label>
                                <input 
                                type="password"
                                id="newPassword"
                                name="newPassword"
                                className="newPassword"
                                value={changedPasswordData.newPassword}
                                onChange={handleChangePassword}/>
                            </div>
                            <div className="re-type-password-section">
                                <label htmlFor="reTypePassword">Re-Type Password</label>
                                <input 
                                type="password"
                                id="reTypePassword"
                                name="reTypePassword"
                                className="reTypePassword"
                                value={changedPasswordData.reTypePassword}
                                onChange={handleChangePassword}/>
                            </div>
                            <button type="submit"
                            className="save-password-changes-btn">Save Changes</button>
                        </form>
                        
                    </div>
                    <div>
                        <img src="/src/assets/Group 1414.png" alt="an image of a padlock behind some fog"/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}