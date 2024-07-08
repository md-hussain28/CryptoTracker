import React, { useContext, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { CoinContext } from '../../context/CoinContext';

const News = () => {
  const { currency,coins } = useContext(CoinContext);
  const [searchCoin, setSearchCoin] = useState('');
  const [chartData, setChartData] = useState(null);
  const [error, setError] = useState('');

  const handleSearchChange = (e) => {
    setSearchCoin(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    
    e.preventDefault();
    const temp = coins.find(c => c.id === searchCoin); 
   // console.log(coins);
    console.log("temp",temp);
    if(temp===undefined){ setError("invalid coin name"); }

    else if (searchCoin) {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${searchCoin}/market_chart?vs_currency=${currency.name}&days=365&precision=4`
        );
        if (!response.ok) {
          throw new Error(`Coin not found: ${searchCoin}`);
        }
        const data = await response.json();
        setChartData(data);
        setError('');
      } catch (error) {
        setError(error.message);
        setChartData(null);
      }
    }
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Price, Market Cap, and 24h Volume for ${searchCoin}`,
      },
    },
  };

  const chartConfig = chartData && {
    labels: chartData.prices.map((item) => new Date(item[0]).toLocaleDateString()),
    datasets: [
      {
        label: 'Price',
        data: chartData.prices.map((item) => item[1]),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
      {
        label: 'Market Cap',
        data: chartData.market_caps.map((item) => item[1]),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.2)',
      },
      {
        label: 'Total Volume',
        data: chartData.total_volumes.map((item) => item[1]),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  return (
    <div className="bg-black min-h-screen w-full p-6">
      <form onSubmit={handleSearchSubmit} className="flex mt-24 flex-col sm:flex-row justify-center items-center mb-4">
        <input
          type="text"
          value={searchCoin}
          onChange={handleSearchChange}
          placeholder="Enter coin ID (e.g., bitcoin)"
          className="p-2 rounded-l-md border border-gray-300 w-full sm:w-auto mb-2 sm:mb-0 sm:mr-2"
        />
        <button type="submit" className="p-2 bg-blue-600 text-white rounded-r-md w-full sm:w-auto">
          Search
        </button>
      </form>
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
      {chartData ? (
        <div className="bg-slate-800  text-slate-200 p-4 rounded-lg shadow-md">
          <div className="relative h-[600px] sm:h-[800px]">
            <Line options={chartOptions} data={chartConfig} />
          </div>
        </div>
      ) : (
        !error && <div className="text-white text-center">Search for a coin to display the chart.</div>
      )}
    </div>
  );
};

export default News;

