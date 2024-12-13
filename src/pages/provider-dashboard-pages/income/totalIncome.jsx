
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { FaMoneyBillTransfer } from "react-icons/fa6";
import "/src/styles/totalincome.css"

export default function TotalIncome(){
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
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
            data: [65, 59, 80, 81, 56, 55,40,90,65,34,24,69],
            backgroundColor: '#14A000',
          },
          {
            label: 'Income 2023',
            data: [28, 48, 40, 19, 86, 27,80,56,54,64,78,90],
            backgroundColor: ' #14A8000D',
          },
        ],
      };
    return(
        <div className='total-income'>
           <div className='total-income-header'>
              <h4>Total Amount Made</h4>
           </div>
           <div className='total-income-bar-chart'>
               <Bar options={options} data={data} />
           </div>
           <div className='total-income-bottom-div'>
                <div className='top-income'>
                    <h1> <FaMoneyBillTransfer /> Income</h1>
                </div>
                <div className='available-income'>
                   <h4>N 0.00</h4>
                   <p>You have not made any income</p>
                </div>
           </div>
        </div>
    )
}



