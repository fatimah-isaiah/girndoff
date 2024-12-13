import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,Filler,ArcElement } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

export default function CancelledJobs(){
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend,
        Filler,
        ArcElement
      );

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Total Income per Month',
          },
        },
      };
      const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June','July','August','september','October','November','December'],
        datasets: [
          {
            label: 'Income 2024',
            data: [33, 49, 70, 41, 56, 55,40,60,65,54,74,49],
            backgroundColor: ' #FE0C0C',
          },
          {
            label: 'Income 2023',
            data: [28, 38, 40, 19, 46, 27,60,26,44,64,68,80],
            backgroundColor: '#FE0C0C26',
          },
        ],}

        const doughnutData = {
            labels: ["June"],
            datasets: [
              {
                label: "Upcoming Jobs",
                data: [15,49],
                backgroundColor: ["#14A000"," #C4C4C4"], // Color for the segment
                borderWidth: 1,
                hoverOffset: 4,
              },
            ],
          };
          
        const juneDoughnutData = {
            labels: ["June"],
            datasets: [
              {
                label: "Upcoming Jobs",
                data: [15,49],
                backgroundColor: ["#FE0C0C"," #C4C4C4"], // Color for the segment
                borderWidth: 0.5,
                hoverOffset: 4,
              },
            ],
          };
    return(
        <div className='total-cancelled-jobs'>
            <div className='cancelled-jobs header'>
                <h4>Cancelled Jobs</h4>
            </div>
            <div className='bar-chart-cancelled-jobs'>
                <Bar data={data} options={options}/>
            </div>
            <div className="doughnut-chart-section">
        <div className="total-doughnut">
            <div>
                <p>Last Month    (June)<span>3.5%</span></p>
                <p>Statistics subinformation</p>
            </div>
            <div className="june-doughnut">
                <Doughnut data={juneDoughnutData} />
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
    )
}