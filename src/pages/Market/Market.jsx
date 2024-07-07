import React, { useContext, useState } from 'react';
import { CoinContext } from '../../context/CoinContext';
import CoinData from '../../components/CoinData';

const Market = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { coins } = useContext(CoinContext);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [val, setVal] = useState('');

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
    //console.log("hande",value);

    // Filter coins based on input value
    const filtered = coins.filter((coin) =>
      coin.name.toLowerCase().includes(value.toLowerCase())
    );

    // Take only the first three valid matches
    const firstThreeMatches = filtered.slice(0, 3);
   
    setFilteredCoins(firstThreeMatches);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filtered = coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setVal(filtered);
    setSearchQuery("");
  };

  return (
    <>
      <div className='bg-custom h-screen text-blue-500 flex flex-col text-center items-center justify-center'>
        <h1 className=' text-4xl'>Welcome to Market Section</h1>
        <h2 className='text-xl'>Your one stop solution for crypto</h2>

        <div className='flex flex-col items-center justify-center min-w-fit'>

          <form onSubmit={handleSubmit} className='bg-blue-800 w-fit py-1 rounded-xl m-4 px-2'>
            <input
              type="search"
              name="coinsearch"
              placeholder='Search Coins'
              value={searchQuery}
              onChange={handleInputChange}
              required
              list="coinlist"
              className='bg-blue-800 rounded-xl py-1 w-4/6 px-4 mx-3 text-blue-100'
            />
            <datalist id="coinlist" className="bg-blue-800 rounded-xl py-1 w-4/6 px-4 mx-3 text-blue-100">
              {filteredCoins.map((coin, index) => (
                <option key={index} value={coin.name}></option>
              ))}
            </datalist>
            <button type='submit' className='bg-slate-950 rounded-md p-1 px-2 border-2 border-violet-700'>
              submit
            </button>
          </form>


        </div>
        <CoinData data={val} /> {/* Pass data as a prop */}
      </div>

    </>
  )
}

export default Market;
