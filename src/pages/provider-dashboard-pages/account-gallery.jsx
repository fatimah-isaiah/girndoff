import "/src/styles/account-gallery.css"
import { useRef, useState } from "react"
import { ImBin2 } from "react-icons/im";

export default function AccountGallery(){
    const [beforeTopImage, setBeforeTopImage] = useState("/src/assets/Rectangle 40.png")
    const [afterTopImage, setAfterTopImage] = useState("/src/assets/Rectangle 40.png")

    const [beforeBottomImage, setBeforeBottomImage] = useState("/src/assets/Rectangle 40.png")
    const [afterBottomImage, setAfterBottomImage] = useState("/src/assets/Rectangle 40.png")

    const topImageRef = useRef("")
    const bottomImageRef = useRef("")

    function deleteTopImages(){
        setBeforeTopImage("")
        setAfterTopImage("")
    }

    function deleteBottomImages(){
        setBeforeBottomImage("")
        setAfterBottomImage("")
    }

    function handleUploadTopImages(event){
        const file = event.target.files[0]
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setBeforeTopImage(e.target.result)
                setAfterTopImage(e.target.result);
            };
            reader.readAsDataURL(file);
           
        }
   }

   function handleUploadBottomImages(event){
    const file = event.target.files[0]
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            setBeforeBottomImage(e.target.result)
            setAfterBottomImage(e.target.result);
        };
        reader.readAsDataURL(file);
       
    }

}

    return(
        <div className="total-account-gallery">
            <div className="top-account-gallery">
                <p>Before and After images of completed jobs</p>
            </div>
            <div className="bottom-account-gallery">
                <div className="image-display-section">
                    <div className="top-gallery">
                        <div>
                            <p className="before-word">Before</p>
                            <img src={beforeTopImage} style={{width:"470px"}}/>
                        </div>
                        <div>
                            <p className="after-word">After</p>
                            <img src={afterTopImage} style={{width:"470px"}}/>
                        </div>
                        <div>
                            <button className="delete-image-btn"
                            onClick={deleteTopImages}><ImBin2 /></button>
                        </div>
                    </div>
                    <button className="upload-image-btn"
                    onClick={()=>topImageRef.current.click()}>Upload Image</button>
                    <input
                    ref={topImageRef}
                    style={{display:"none"}}
                    type="file"
                    name="top-image"
                    onChange={handleUploadTopImages}/>
                </div>
                <div className="image-display-section">
                    <div className="top-gallery">
                        <div>
                            <p className="before-word">Before</p>
                            <img src={beforeBottomImage} style={{width:"470px"}}/>
                        </div>
                        <div>
                            <p className="after-word">After</p>
                            <img src={afterBottomImage} style={{width:"470px"}}/>
                        </div>
                        <div>
                            <button className="delete-image-btn"
                             onClick={deleteBottomImages}><ImBin2 /></button>
                        </div>
                    </div>
                    <button className="upload-image-btn"
                    onClick={()=>bottomImageRef.current.click()}
                    >Upload Image</button>
                     <input
                    ref={bottomImageRef}
                    style={{display:"none"}}
                    type="file"
                    name="top-image"
                    onChange={handleUploadBottomImages}/>
                </div>
            
            </div>
        </div>
    )
}