import React from 'react';

const Summary = ({ totalIncome, totalExpense }) => {
    return (
        <div className='summary'>
            <div className='card-group shadow'>
                <div className="card border-end">
                    <div className="card-body">
                        <p className="card-title text-success fw-bold text-center">INCOME</p>
                        <p className="card-text text-success fw-bold text-center">{totalIncome}</p>
                    </div>
                </div>
                <div className='card border-start'>
                    <div className="card-body">
                        <p className="card-title text-danger fw-bold text-center">BALANCE</p>
                        <p className="card-text text-danger fw-bold text-center">{totalExpense}</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Summary;