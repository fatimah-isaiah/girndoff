import  { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import { MdOutlineCameraAlt } from "react-icons/md";

import "/src/styles/verification.css"

export default function Verification() {
  const [selectedID, setSelectedID] = useState('');
  const [showProfileCamera, setShowProfileCamera] = useState(false);
  const [showIDCamera, setShowIDCamera] = useState(false);
  const [profileImgSrc, setProfileImgSrc] = useState(null);
  const [idImgSrc, setIdImgSrc] = useState(null);
  const webcamRef = useRef(null);

  const profileFileInputRef = useRef(null);
  const idFileInputRef = useRef(null);

  const videoConstraints = {
    width: 540,
    height: 380,
    facingMode: "user",
  };

  const handleIDSelect = (idType) => {
    setSelectedID(idType);
  };

  const openProfileCamera = () => {
    setShowProfileCamera(true);
    setShowIDCamera(false);
  };

  const openIDCamera = () => {
    setShowIDCamera(true);
    setShowProfileCamera(false);
  };

  const captureProfile = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setProfileImgSrc(imageSrc);
    setShowProfileCamera(false);
  }, [webcamRef]);

  const captureID = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setIdImgSrc(imageSrc);
    setShowIDCamera(false);
  }, [webcamRef]);

  const handleFileUpload = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      console.log(reader, "reader show")
      reader.onload = (e) => {
        if (type === 'profile') {
          setProfileImgSrc(e.target.result);
        } else {
          setIdImgSrc(e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className="profile-upload-container">
        {(showProfileCamera || showIDCamera) && (
          <div className="camera-overlay">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
              minScreenshotWidth={180}
              minScreenshotHeight={180}
            />
            <button onClick={showProfileCamera ? captureProfile : captureID}>
              Capture Photo
            </button>
            <button onClick={() => {
              setShowProfileCamera(false);
              setShowIDCamera(false);
            }}>
              Close Camera
            </button>
          </div>
        )}
        <div className="upload-section">
          <h4>Take profile photo</h4>
          <div className="button-group">
            <button className="camera-btn" onClick={openProfileCamera}>
              <MdOutlineCameraAlt className="cameraAlt"/> With Camera
            </button>
            <button className="upload-btn" onClick={() => profileFileInputRef.current.click()}>Upload from file or gallery</button>
            <input 
              type="file" 
              ref={profileFileInputRef} 
              style={{ display: 'none' }} 
              onChange={(e) => handleFileUpload(e, 'profile')} 
              accept="image/*"
            />
          </div>
          {profileImgSrc && <img src={profileImgSrc} alt="profile" className="captured-image"/>}
        </div>

        <div className="upload-section">
          <h4>Take photo of any government issued ID</h4>
          <div className="button-group">
            <button className="camera-btn" onClick={openIDCamera}>
              <MdOutlineCameraAlt className="cameraAlt"/> With Camera
            </button>
            <button className="upload-btn" onClick={() => idFileInputRef.current.click()}>Upload from file or gallery</button>
            <input 
              type="file" 
              ref={idFileInputRef} 
              style={{ display: 'none' }} 
              onChange={(e) => handleFileUpload(e, 'id')} 
              accept="image/*"
            />
          </div>
          {idImgSrc && <img src={idImgSrc} alt="ID" className="captured-image"/>}
        </div>

        <div className="id-selection">
          <h4>Select type of government issue ID</h4>
          <div className="id-type-input">
            <input 
              type="text" 
              value={selectedID} 
              onChange={(e) => setSelectedID(e.target.value)}
              placeholder="Select an ID type below" 
            />
          </div>
          <div className="id-options">
            {["Voters Card", "Drivers License", "International Passport", "Residence Permit"].map((id, index) => (
              <button
                key={index}
                className={`id-btn ${selectedID === id ? 'active' : ''}`}
                onClick={() => handleIDSelect(id)}
              >
                {id}
              </button>
            ))}
          </div>
        </div>

        <div className="continue-button">
          <button className="continue-btn">Continue</button>
        </div>
      </div>
    </div>
  );
}