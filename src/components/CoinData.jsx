import React,{ useContext } from 'react';
import { CoinContext } from '../context/CoinContext';

const CoinData = ({ data, onClose }) => {
  const { currency} = useContext(CoinContext);

  if (!data || data.length === 0) {
    return null; // Return nothing if data is invalid or empty
  }

  const coin = data[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 w-full max-w-lg mx-auto">
        <button className="absolute top-4 right-4 text-white" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex justify-center mb-4">
          <img src={coin.image} alt={coin.name} className="h-16 w-16 rounded-full shadow-md" />
        </div>
        <h2 className="text-2xl font-bold text-center text-white mb-4">
          {coin.name} ({coin.symbol ? coin.symbol.toUpperCase() : ''})
        </h2>
        <div className="text-center space-y-2">
          <div className="flex justify-between">
            <p className="text-gray-200">Current Price:</p>
            <p className="text-white">{currency.symbol}{coin.current_price.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-200">Market Cap:</p>
            <p className="text-white">{currency.symbol}{coin.market_cap.toLocaleString()}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-200">Total Volume:</p>
            <p className="text-white">{currency.symbol}{coin.total_volume.toLocaleString()}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-200">Circulating Supply:</p>
            <p className="text-white">{coin.circulating_supply.toLocaleString()} {coin.symbol ? coin.symbol.toUpperCase() : ''}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-200">High 24h:</p>
            <p className="text-white">{currency.symbol}{coin.high_24h.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-200">Low 24h:</p>
            <p className="text-white">{currency.symbol}{coin.low_24h.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-200">Price Change (24h):</p>
            <p className="text-white">{currency.symbol}{coin.price_change_24h.toFixed(2)} ({coin.price_change_percentage_24h.toFixed(2)}%)</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-200">All-time High:</p>
            <p className="text-white">{currency.symbol}{coin.ath.toFixed(2)} ({new Date(coin.ath_date).toLocaleDateString()})</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-200">All-time Low:</p>
            <p className="text-white">{currency.symbol}{coin.atl.toFixed(2)} ({new Date(coin.atl_date).toLocaleDateString()})</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-200">Last Updated:</p>
            <p className="text-white">{new Date(coin.last_updated).toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinData;
