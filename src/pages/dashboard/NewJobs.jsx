// import  { useEffect, useState } from "react";
import NewjobsCard from "./newjobsCard";
import requestData from "/src/data/provider-request.js";
import "/src/styles/newjobs.css";
import { useSearchParams } from "react-router-dom";

export default function Newjobs() {
    const [searchParams, setSearchParams] = useSearchParams();

    // Get the current page from the URL parameter, default to 1
    const currentPage = parseInt(searchParams.get("page") || "1", 10);

    // Assume we have a page size of 6 items
    const pageSize = 6;

    // Calculate the data to display on the current page
    const startIndex = (currentPage - 1) * pageSize;
    const paginatedData = requestData.slice(startIndex, startIndex + pageSize);

    // Function to go to the next page
    const goToNextPage = () => {
        setSearchParams({ page: currentPage + 1 });
    };

    // Function to go to the previous page
    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setSearchParams({ page: currentPage - 1 });
        }
    };

    return (
        <div>
            <div className="requestData-section">
                {paginatedData.map((item, index) => (
                    <NewjobsCard key={index} item={item} />
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
                         disabled={startIndex + pageSize >= requestData.length}
                     >
                         Next
                     </button>
                </div>
            </div>
        </div>
    );
}
