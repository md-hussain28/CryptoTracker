import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './index.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home/Home.jsx'
import News from './pages/News/News.jsx';
import Market from './pages/Market/Market.jsx';
import CoinContextProvider from './context/CoinContext.jsx';
import Footer from './components/Footer.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <CoinContextProvider>
   
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/market" element={<Market />} />
      </Routes>
      <Footer/>
    </div>
   
    </CoinContextProvider>
    
     </BrowserRouter>
  </React.StrictMode>,
)
