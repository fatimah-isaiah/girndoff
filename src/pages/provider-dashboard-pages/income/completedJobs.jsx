
import "/src/styles/upcomingjobs.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler, // For enabling area fill
  ArcElement, // Required for Doughnut charts
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";

export default function CompletedJobs() {
  // Register Chart.js components
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    ArcElement // Register ArcElement for Doughnut charts
  );

  // Line chart configuration
  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Completed Jobs per Month",
      },
    },
  };

  const lineData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Completed Jobs",
        data: [65, 47, 46, 94, 73, 81, 45, 89, 46, 54, 35, 66],
        fill: true,
        borderColor: "#14A000",
        backgroundColor: "#14A000", 
        borderWidth: 2,
      },
    ],
  };

  // Doughnut chart configuration
  const doughnutData = {
    labels: ["June"],
    datasets: [
      {
        label: "completed Jobs",
        data: [15,49],
        backgroundColor: ["#14A000"," #C4C4C4"], // Color for the segment
        borderWidth: 1,
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="total-upcoming-jobs">
      {/* Line Chart Section */}
      <div className="upcoming-jobs-header">
        <h4>Completed Jobs</h4>
      </div>
      <div className="line-chart-upcoming">
        <Line options={lineOptions} data={lineData} />
      </div>

      {/* Doughnut Chart Section */}
      <div className="doughnut-chart-section">
        <div className="total-doughnut">
            <div>
                <p>Last Month    (June)<span>3.5%</span></p>
                <p>Statistics subinformation</p>
            </div>
            <div className="june-doughnut">
                <Doughnut data={doughnutData} />
           </div>
        </div>
        <div className="total-doughnut">
            <div>
                <p>Last Month    (June)<span>3.5%</span></p>
                <p>Statistics subinformation</p>
            </div>
            <div className="recent-jobs-doughnut">
                 <Doughnut data={doughnutData} />
            </div>
        </div>
        <div className="total-doughnut">
             <div>
                <p>Last Month    (June)<span>3.5%</span></p>
                <p>Statistics subinformation</p>
            </div>
            <div className="july-doughnut">
                <Doughnut data={doughnutData} />
            </div>
        </div>
      </div>
    </div>
  );
}
