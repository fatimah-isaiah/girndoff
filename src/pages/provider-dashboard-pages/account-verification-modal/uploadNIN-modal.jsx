import { useRef } from "react";
import { FiUpload } from "react-icons/fi";
import "/src/styles/government-issued-modal.css"

export default function IssuedNIN({showUploadNin, getIdImage, closeIdModal}){
   

    const uploadNinInputRef = useRef(null)

    function handleInputChange(event){
        const file = event.target.files[0]
        if (file) {
            const reader = new FileReader();
            console.log(reader, "reader show")
            reader.onload = (e) => {
                
                getIdImage(e.target.result);
            };
            reader.readAsDataURL(file);
           
        }
        closeIdModal()
        
    }
   
    return(
        <>
        {showUploadNin &&
        <div className="total-id-modal">
            <div className="id-modal-header">
                <p>Upload NIN</p>
                <button 
                className="close-i-modal-btn"
                onClick={closeIdModal}>X</button>
            </div>
            <div className="bottom-id-modal">
                <button 
                onClick={()=> uploadNinInputRef.current.click()}
                className="show-modal-btn"><FiUpload /></button>
                <div>
                    <p>Upload from file</p>
                    <p>or click here to drag image</p>
                </div>
                <div>
                    <p>PNG or JPG only</p>
                 </div>
            </div>
           
        </div>
}    
     <input
     type="file"
     style={{display:"none"}}
     name="uploadNin"
     accept=".png,.jpg,.jpeg"
     ref={uploadNinInputRef}
     onChange={handleInputChange}
     />
        </>
    )
}