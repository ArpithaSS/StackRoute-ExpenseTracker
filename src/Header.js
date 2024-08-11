import React from 'react';

const Header=({totalBalance})=>{
    return(
        <div className='header container'>
            <div className='row'>
            <h2 className='text-muted fw-bold text-center'>Expense Tracker</h2>
            <h4 className='text-muted fw-bold text-center mt-4'>Your Balance</h4>
            <h4 className='text-muted fw-bold text-center'>{totalBalance}</h4>
            </div>
            </div>
    )
}

export default Header;