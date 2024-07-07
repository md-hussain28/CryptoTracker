import React, { useEffect, useState } from 'react'

export const CoinContext = React.createContext()

const CoinContextProvider = (props) => {
  const [val, setval] = useState(1)
  const [coins, setCoins] = useState([]);
  const [currency,setCurrency] =useState({name:"usd",symbol:"$"})

  const fetchAllCoin = async () => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-kAqoQqNM9q4z9V4w4Uadedtj' }
    };
   
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
      .then(response => response.json())
      .then(response => setCoins(response))
      .catch(err => console.error(err));
  }

  useEffect(()=>{
        fetchAllCoin();
        console.log("currency changed",currency.symbol)
        
  },[currency])
   
  const contextvalue ={
     coins,currency, setCurrency
  }

  return (
    <CoinContext.Provider value={{ val, setval,coins,currency, setCurrency }}>
      {props.children}
    </CoinContext.Provider>
  )
}

export default CoinContextProvider

