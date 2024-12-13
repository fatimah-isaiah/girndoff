import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { FaMoneyBillTransfer } from "react-icons/fa6";

export default function IncomePerMonth(){
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
            data: [15, 39, 50, 41, 56, 53,40,30,65,34,24,39],
            backgroundColor: '#14A000',
          },
          {
            label: 'Income 2023',
            data: [38, 48, 40, 19, 36, 27,40,56,54,64,38,50],
            backgroundColor: ' #14A8000D',
          },
        ],
      };
    return(
        <div className='total-income'>
           <div className='total-income-header'>
              <h4>Total Amount This Month</h4>
           </div>
           <div className='total-income-bar-chart'>
               <Bar options={options} data={data} />
           </div>
           <div className='total-income-bottom-div'>
                <div className='top-income'>
                    <h1> <FaMoneyBillTransfer /> Income</h1>
                </div>
                <div className='available-income'>
                   <h4>N 18,520</h4>
                   <p>your total income made so far</p>
                </div>
           </div>
        </div>
    )
}