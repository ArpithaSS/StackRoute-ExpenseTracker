import React, {useState,useEffect} from 'react';
import './App.css';
import Header from './Header';
import Summary from './Summary';
import UserForm from './UserForm';
import TransactionList from './TransactionList';

function App() {
  const [transactions, setTransactions]=useState([]);
  const fetchTransactions=async()=>{
    try{
      const response= await fetch('http://localhost:3000/transactions');
      const data=await response.json();
      setTransactions(data);

    }
    catch(err) {
      console.log(err);
    }
  };
  const addTransaction= async(transaction)=>{
    try{
      const response=await fetch('http://localhost:3000/transactions', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(transaction),
      });
      const newTransaction= await response.json();
      setTransactions((prevTransactions)=>[...prevTransactions,newTransaction]);
    }
    catch(err) {
      console.log(err);
    }
  };
  const deleteTransaction=async(id)=>{
    try{
      await fetch(`http://localhost:3000/transactions/${id}`, {
        method: 'DELETE',
      });
      setTransactions(transactions.filter(transaction=>transaction.id!==id));
    }
    catch(err) {
      console.log(err);
    }
  };

  useEffect(()=>{
    fetchTransactions();
  },[]);

  const totalIncome=transactions.filter(transaction=>transaction.category==='income').reduce((acc,cur)=>acc+cur.amount,0);
  const totalExpense=transactions.filter(transaction=>transaction.category==='expense').reduce((acc,cur)=> acc+cur.amount,0);
  const totalBalance=totalIncome-totalExpense;
  return (
    <div className='app container my-4'>
      <div className='row justify-content-center'>
        <div className='col-md-4 background-css rounded shadow'>
    <Header totalBalance={totalBalance}/>
    <Summary totalIncome={totalIncome} totalExpense={totalExpense}/>
    <UserForm addTransaction={addTransaction}/>
    <TransactionList transactions={transactions} deleteTransaction={deleteTransaction}/>
    </div>
    </div>
    </div>
  );
}

export default App;
