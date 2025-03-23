
import { FaFilter } from "react-icons/fa";
import HistoryCard from "/src/pages/provider-dashboard-pages/historyCard.jsx";
import providerHistoryData from "/src/data/provider-history.js";
import "/src/styles/newjobs.css";
import "/src/styles/history.css"
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import HistoryModal from "./historyModal"; 

export default function History() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState(null);

    const currentPage = parseInt(searchParams.get("page") || "1", 10);
    const pageSize = 6;
    const startIndex = (currentPage - 1) * pageSize;
    const paginatedData = providerHistoryData.slice(startIndex, startIndex + pageSize);

    const goToNextPage = () => {
        setSearchParams({ page: currentPage + 1 });
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setSearchParams({ page: currentPage - 1 });
        }
    };

    // Modal open function
    const handleOpenModal = (item) => {
        setShowModal(true);
        setModalData(item);
    };

    // Modal close function
    const handleCloseModal = () => {
        setShowModal(false);
        setModalData(null);
    };

    return (
        <div className="total-history">
            <div>
                <div className="history-header">
                    <h2 style={{margin:0}}>History</h2>
                    <button className="history-filter-btn">
                        <FaFilter />
                        Filter
                    </button>
                </div>
            <div className="requestData-section">
                {paginatedData.map((item, index) => (
                    <HistoryCard key={index} item={item} onOpenModal={handleOpenModal} />
                ))}
            </div>
            <div className="pagination-controls">
                <p>Showing {currentPage} to 4 of 4 entries</p>
                <div>
                    <button className="previous-btn" onClick={goToPreviousPage} disabled={currentPage === 1}>
                        Previous
                    </button>
                    <span className="currentPage-span"> {currentPage} </span>
                    <button
                        className="next-btn"
                        onClick={goToNextPage}
                        disabled={startIndex + pageSize >= providerHistoryData.length}
                    >
                        Next
                    </button>
                </div>
            </div>
            </div>

            {showModal && (
                <div className="total-history-modal">
                <HistoryModal
                    showModal={showModal}
                    modalData={modalData}
                    onClose={handleCloseModal} 
                />
                </div>
            )}
        </div>
    );
}
