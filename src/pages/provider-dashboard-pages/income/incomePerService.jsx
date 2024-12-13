import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { FaMoneyBillTransfer } from "react-icons/fa6";
import "/src/styles/incomePerService.css"

export default function IncomePerService(){
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
            data: [25, 59, 50, 41, 56, 53,40,70,65,34,24,69],
            backgroundColor: '#14A000',
          },
          {
            label: 'Income 2023',
            data: [38, 48, 40, 19, 56, 27,40,56,54,64,78,50],
            backgroundColor: ' #14A8000D',
          },
        ],
      };

      const selectOptions=[{
        title:"View each services overview amount"
      },{
        title:"Delivery Items",
        price:"N 8,000"
      },{
        title:"Bedrooms cleaning",
        price:"N 4,000"
      },{
        title:"Garden beautification",
        price:"N 10,000"
      },{
        title:"Food delivery",
        price:"N 3,500"
      }]
    return(
        <div className='total-income-per-service'>
           <div className='total-income-header'>
              <h4>Total Amount Made</h4>
           </div>
           <div className='total-income-bar-chart'>
               <Bar options={options} data={data} />
           </div>
           <div className='total-bottom-div'>
               <div className='income-div'>
                    <div className='top-income'>
                        <h1> <FaMoneyBillTransfer /> Income</h1>
                    </div>
                    <div className='available-income'>
                       <h4>N 18,520</h4>
                       <p style={{width:"300px"}}> this sum up your total amount overall
                       on each services you have made</p>
                    </div>
                </div>
                <div className='income-select-options'>
                     <select className='income-select'>
                        {selectOptions.map((item,index)=>{
                            return(
                                <option key={index} >
                                <div className='select-option'>
                                  <p>{item.title}</p>
                                  <p>{item.price}</p>
                                  </div>
                                </option>
                            )
                        })}
                     </select>
                </div>
           </div>
        </div>
    )
}


