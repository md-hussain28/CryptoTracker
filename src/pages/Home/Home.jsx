import React, { useContext, useState,useEffect } from 'react'
import CoinTable from '../../components/CointTable';


const Home = () => {
 
    return (
        <div className='bg-custom  h-screen text-blue-500 flex flex-col items-center justify-center'>
            <h1 className='mt-24 text-center text-4xl'>Welcome to CryptoMania</h1>
            <h2 className='text-xl text-center mb-10'>Your one stop solution for crypto</h2>
           
            <CoinTable  />
        </div>

    )
}

export default Home
