import { useState } from "react"
import "/src/styles/document.css"


export default function Document(){
    const [documentData, setDocumentData] =useState({
        name:"",
        organisation:"",
        issuedDate:"",
        toEnd:"",
        description:""
    })

    const years = [1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005] 

    function handleDocumentChange(event){
        const {name,value} = event.target
        setDocumentData(prevData =>{
            return{
                ...prevData,
                [name]:value
            }
        })
    }

    console.log(documentData)
    return(
        <div className="total-document">
            <div className="total-header">
                <h2>Document</h2>
                <p>Upload Training Certificates</p>
            </div>
            <div className="bottom-document">
                <div className="add-certificate-top-section">
                    <p>Add Certificates</p>
                </div>
                <div>
                    <form>
                        <div style={{margin:"20px 0px 10px 0px"}}>
                            <label htmlFor="name">Name</label>
                            <input
                            name="name"
                            id="name"
                            className="documentName"
                            value={documentData.name}
                            onChange={handleDocumentChange}/>
                        </div>
                        <div style={{margin:"20px 0px 10px 0px"}}>
                            <label htmlFor="organisation">Issuing Organization</label>
                            <input
                            id="organisation"
                            name="organisation"
                            className="IssuingOrganization"
                            value={documentData.organisation}
                            onChange={handleDocumentChange}/>
                        </div>
                        <div className="two-selection-section" style={{margin:"20px 0px 10px 0px"}}>
                             <div>
                                <label htmlFor="issuedDate">Issued Date</label>
                                <select 
                                 id="issuedDate"
                                  className="issuedDate"
                                name="issuedDate"
                                value={documentData.issuedDate}
                            onChange={handleDocumentChange}>
                                    {years.map((item, index)=>{
                                        return(
                                            <option key={index} value={item}>{item}</option>
                                        )
                                    })}
                                </select>
                             </div>
                             <div>
                                <label htmlFor="toEnd">To</label>
                                 <select 
                                 id="toEnd"
                                 name="toEnd"
                                 className="toEnd"
                                 value={documentData.toEnd}
                                 onChange={handleDocumentChange}>
                                        {years.map((item, index)=>{
                                            return(
                                                <option key={index} value={item}>{item}</option>
                                            )
                                        })}
                                    </select>
                             </div>
                        </div>
                        <div style={{margin:"20px 0px 10px 0px"}}>
                            <label htmlFor="description">Description</label>
                            <textarea
                            id="description"
                            name="description"
                            className="documentDescription"
                            value={documentData.descripion}
                            onChange={handleDocumentChange}/>
                        </div>
                    </form>
                    <button type="submit" 
                    className="save-document-btn">Save</button>
                </div>
            </div>
        </div>
    )
}