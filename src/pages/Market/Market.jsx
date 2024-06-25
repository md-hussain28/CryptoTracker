import React, { useContext } from 'react'
import  { CoinContext } from '../../context/CoinContext';

const Market = () => {

 const {val,setval}=useContext(CoinContext);
 
 
 function update(){
    setval((old)=>old+1+old);
    console.log(val);
 }

  return (
    <div className='bg-custom h-screen text-blue-500 flex flex-col items-center justify-center'>
    <h1 className=' text-4xl'>Welcome to Market Section</h1>
    <h2 className='text-xl'>Your one stop solution for crypto</h2>
    <h2 className='text-xl'>The value is {val}</h2>
    <button onClick={update} className='bg-indigo-500'>
          Hit me !!
    </button>
    <div>
        <input type="search" name="coinsearch" id=""
            className='bg-blue-400 rounded-xl py-1 my-4 px-4 text-blue-100' />
    </div>
   
</div>
  )
}

export default Market
