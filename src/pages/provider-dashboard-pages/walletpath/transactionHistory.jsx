import transactiondata from "/src/data/transactionHistory.js"
export default function TransactionHistory(){
    return(
        <div>
            <table>
                <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Amount</th>
                </tr>
                {transactiondata.map((item,index)=>{
                    return(
                        <tr key={index}>
                           <td>{item.date}</td>
                           <td>{item.type}</td>
                           <td>{item.Description}</td>
                           <td>{item.Amount}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}