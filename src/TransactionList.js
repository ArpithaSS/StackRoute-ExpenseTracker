import React from 'react';
import './App.css'

const TransactionList = ({ transactions, deleteTransaction }) => {
    const fomrattedDate=(transactionDate)=>{
        const date=new Date(transactionDate); 
        const monthOption={month: 'long'};
        const DayOption={day: '2-digit'}
        const month=date.toLocaleDateString('en-US',monthOption);
        const day=date.toLocaleDateString('en-US',DayOption);
        return {month, day};
    }
    return (
        <div className='transaction-list mt-4'>
                <ul className="list-group list-group-flush">
                    {transactions.map(transaction => {
                        const {month,day}=fomrattedDate(transaction.transactionDate);
                        return(
                        <div className={`dummy card mt-2 p-2 shadow ${transaction.category}`} key={transaction.id}>
                        <li className='list-group-item d-flex border-0' >
                            <div className='col-sm-2 text-white text-center'>
                                <div className='day'>{day}</div>
                                <div className='month bg-primary'>{month}</div>
                            </div>
                            <div className='col-sm-6 m-1 pt-2 px-1'>{transaction.description}</div>
                            <div className='col-sm-2 m-1 pt-2'>{transaction.category==='income'? '+' : '-'}{transaction.amount}</div>
                            <button onClick={() => deleteTransaction(transaction.id)} className='btn btn-light col-sm-2 text-danger fw-bold text-center'>X</button>

                        </li>
                        </div>

                    )})
                    }
                </ul>
            {/* </div > */}
        </div >
    )
}

export default TransactionList;