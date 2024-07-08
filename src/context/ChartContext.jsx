import React, { useEffect, useState, useContext } from 'react';
import { CoinContext } from './CoinContext';

export const ChartContext = React.createContext();

const ChartContextProvider = (props) => {
  const [coin, setCoin] = useState("bitcoin");
  const [chart,setChart] =useState("");
 const {currency}=useContext(CoinContext);

  const fetchCoinData = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-kAqoQqNM9q4z9V4w4Uadedtj'
      }
    };

    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=${currency.name}&days=365&precision=4`, options);
      const data = await response.json();
      setChart(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching coin data:", error);
    }
  };

  


  useEffect(() => {
    fetchCoinData();
    console.log("Currency changed to", currency.symbol);
  }, [currency,coin]);

  return (
    <ChartContext.Provider value={{coin,setCoin,chart}}>
      {props.children}
    </ChartContext.Provider>
  );
};

export default ChartContextProvider;

