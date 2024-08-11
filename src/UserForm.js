import React, { useState } from 'react';
import './App.css';

const UserForm = ({ addTransaction }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState();
    const [transactionDate, setTransactionDate] = useState('');
    const [category, setCategory] = useState('income');
    const handleAddTransaction = () => {
        console.log(description, amount, transactionDate, category);
        if (description && amount && transactionDate) {
            addTransaction({ description, category, transactionDate, amount: parseFloat(amount) });
            setDescription('');
            setAmount('');
            setTransactionDate('');
        }
        else {
            alert("Please fill all the details");
        }

    };
    return (
        <div className='user-form m-3'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='form-group mt-1 col-md-10'>
                        <input type='text' className='form-control customCSS shadow-sm' value={description} placeholder='Enter Description' onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className='form-group mt-1 col-md-10'>
                        <input type='text' className='form-control customCSS' value={amount} placeholder='Enter Amount' onChange={(e) => setAmount(e.target.value)} />
                    </div>
                    <div className='form-group mt-1 col-md-10'>
                        <input type='date' className='form-control customCSS' value={transactionDate} onChange={(e) => setTransactionDate(e.target.value)} />
                    </div>
                    <div className='form-group col-md-10 mt-2 text-center'>
                        <div className='form-check form-check-inline'>
                            <input type='radio' className='form-check-input' id='income' name='category' value='income' checked={category === 'income'} onChange={(e) => setCategory(e.target.value)} />
                            <label className='form-check-label' htmlFor='income'>Income</label>
                        </div>
                        <label></label>
                        <div className='form-check form-check-inline'>
                            <input type='radio' className='form-check-input' id='expense' name='category' value='expense' checked={category === 'expense'} onChange={(e) => setCategory(e.target.value)} />
                            <label className='form-check-label' htmlFor='expense'>Expense</label>
                        </div>
                        <label></label>

                    </div>
                    <button className='btn btn-primary col-md-9 mt-4' onClick={handleAddTransaction}>Add Transaction</button>
                </div>
            </div>
        </div>
    )
}

export default UserForm;