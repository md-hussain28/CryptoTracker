import React, { useContext } from 'react'
import { CoinContext } from '../../context/CoinContext'
import CoinTable from '../../components/CointTable';

const Home = () => {
    const {coins,currency}=useContext(CoinContext);
   

    return (
        <div className='bg-custom  h-screen text-blue-500 flex flex-col items-center justify-center'>
            <h1 className='mt-52 text-4xl'>Welcome to CryptoMania</h1>
            <h2 className='text-xl'>Your one stop solution for crypto</h2>
            <div className='flex flex-col items-center justify-center min-w-fit'>
                <form action="" className='bg-blue-800 w-fit py-1 rounded-xl m-4 px-2'>
                    <input type="search" name="coinsearch" id="" placeholder='Search Coins'
                        className='bg-blue-800 rounded-xl py-1 w-4/6 px-4 mx-3 text-blue-100' />
                    <button type='submit' className='bg-slate-950 rounded-md p-1 px-2 border-2 border-violet-700'>submit</button>
                </form>

               
            </div>
            <CoinTable/>
        </div>

    )
}

export default Home
