import React, { useContext, useState } from 'react';
import { CoinContext } from '../context/CoinContext';
import CoinData from './CoinData';

const CoinTable = () => {
  const { currency, coins } = useContext(CoinContext);
  const [selectedCoin, setSelectedCoin] = useState(null);

  if (!coins || coins.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  
  const handleCloseModal = () => {
    setSelectedCoin(null);
  };

  const handleClick = (coinId) => {
    const coin = coins.find(c => c.id === coinId);
    setSelectedCoin(coin);
    console.log(coin, "clicked");
  }

  // Display only the first 10 coins
  const displayCoins = coins.slice(0, 100);

  return (
    <div className="overflow-hidden bg-gradient-to-b from-violet-900 to-indigo-800 shadow-md sm:rounded-lg">
      <div className="h-[500px] overflow-y-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Coin
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Price ({currency.symbol})
              </th>
              {/* Hide Market Cap on smaller screens */}
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider hidden sm:table-cell">
                Market Cap
              </th>
              {/* Hide 24h Change on smaller screens */}
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider hidden sm:table-cell">
                24h Change
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {displayCoins.map((coin, index) => (
              <tr key={coin.id} onClick={() => handleClick(coin.id)} className={`border-b dark:border-gray-700 ${index % 2 === 0 ? 'bg-indigo-500 dark:bg-blue-800' : 'bg-violet-800'}`}>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img src={coin.image} alt={coin.name} className="w-8 h-8 mr-2" />
                    <span className="font-medium max-w-40 truncate">{coin.name} ({coin.symbol.toUpperCase()})</span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  {currency.symbol} {coin.current_price.toLocaleString()}
                </td>
                {/* Hide Market Cap on smaller screens */}
                <td className="px-4 py-4 hidden sm:table-cell">
                  {currency.symbol} {coin.market_cap.toLocaleString()}
                </td>
                {/* Hide 24h Change on smaller screens */}
                <td className={`px-4 py-4 hidden sm:table-cell ${coin.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CoinData data={selectedCoin ? [selectedCoin] : []} onClose={handleCloseModal} />
    </div>
  );
}

export default CoinTable;
