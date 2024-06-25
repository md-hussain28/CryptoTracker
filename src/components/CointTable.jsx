import React, { useContext } from 'react';
import { CoinContext } from '../context/CoinContext';

const CoinTable = () => {
  const { coins, currency } = useContext(CoinContext);

  // Handle case where coins are still loading or not yet fetched
  if (!coins || coins.length === 0) {
    return <div>Loading...</div>; // You can replace with a loading indicator component
  }

  // Display only the first 10 coins
  const displayCoins = coins.slice(0, 10);

  return (
    <div className="overflow-x-auto bg-gradient-to-b from-violet-900 to-indigo-800 shadow-md sm:rounded-lg">
      <table className="w-full min-w-max text-sm text-left text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Coin
            </th>
            <th scope="col" className="px-6 py-3">
              Price ({currency.symbol})
            </th>
            {/* Hide Market Cap on smaller screens */}
            <th scope="col" className="px-6 py-3 hidden sm:table-cell">
              Market Cap
            </th>
            {/* Hide 24h Change on smaller screens */}
            <th scope="col" className="px-6 py-3 hidden sm:table-cell">
              24h Change
            </th>
          </tr>
        </thead>
        <tbody>
          {displayCoins.map((coin, index) => (
            <tr key={coin.id} className={`border-b dark:border-gray-700 ${index % 2 === 0 ? 'bg-indigo-500 dark:bg-blue-800' : 'bg-violet-800'}`}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <img src={coin.image} alt={coin.name} className="w-8 h-8 mr-2" />
                  <span className="font-medium">{coin.name} ({coin.symbol.toUpperCase()})</span>
                </div>
              </td>
              <td className="px-6 py-4">
                {currency.symbol} {coin.current_price.toLocaleString()}
              </td>
              {/* Hide Market Cap on smaller screens */}
              <td className="px-6 py-4 hidden sm:table-cell">
                {currency.symbol} {coin.market_cap.toLocaleString()}
              </td>
              {/* Hide 24h Change on smaller screens */}
              <td className={`px-6 py-4 hidden sm:table-cell ${coin.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CoinTable;
