import { CiMedal } from "react-icons/ci";
import "/src/styles/modalComponent.css"

export default function ServiceModal({selectedModalService,isModalVisible,closeModal}){
    return(
        isModalVisible && selectedModalService && (
            <div className="modal-overlay">
                <div className="modal-content">
                    <div>
                        <img className="eachCategoryImage" src={selectedModalService.profileImg} />
                    </div>
                    <div>
                        <h2>{selectedModalService.providerName}</h2>
                        <p className="elite-tasker"><CiMedal />Elite Tasker</p>
                        <p className="Rate-per-Hour">{selectedModalService.ratePerHour}</p>
                        <button className="close-modal-btn" onClick={closeModal}>X</button>
                    </div>
                </div>
                <div className="medical-services-div">
                    <h4>We are the best in medical services...</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="passion-div">
                    <h4>We do our work with passion... </h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="scrollabe-modal-section">
                    {selectedModalService.photos.map((eachPhoto, index) => {
                        return (
                            <div key={index}>
                                <img src={eachPhoto}
                                    className="scrollable-modal-image" />
                            </div>
                        )
                    })}
                </div>
                <div className="reviews-div">
                    <h4>Reviews({selectedModalService.reviews})</h4>
                    <p>I enjoyed their service, it really great working with Agape
                        store, originality speaks of them.</p>
                </div>
            </div>
        )
    )
}