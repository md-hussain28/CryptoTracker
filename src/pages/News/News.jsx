import React, { useContext } from 'react'
import  { CoinContext } from '../../context/CoinContext';

const News = () => {
    const {val,setval}=useContext(CoinContext);

    const handleclick=()=>{
        setval(p=>p/2);
    }

    return (
        <div className='bg-custom h-screen text-blue-500 flex flex-col items-center justify-center'>
        <h1 className=' text-4xl'>Welcome to News Section</h1>
        <h2 className='text-xl'>Your one stop solution for crypto</h2>
        <h2 className='text-xl'>value is {val}</h2>
        <button onClick={handleclick} className='bg-gray-50 p-3'>
            Press
        </button>
        <div>
            <input type="search" name="coinsearch" id=""
                className='bg-blue-400 rounded-xl py-1 my-4 px-4 text-blue-100' />
        </div>
    </div>
      )
  
}

export default News
