import React, { useContext, useEffect, useState } from 'react';
import { CoinContext } from '../context/CoinContext';
import NavMenu from './Navbar/NavMenu';
import Sidebar from './Navbar/Sidebar';


const Navbar = () => {

    const [isVisible, setIsVisible] = useState(true);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    let lastScrollTop = 0;
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
      };
    

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            setIsVisible(false); // Hide navbar on downscroll
        } else {
            setIsVisible(true); // Show navbar on upscroll
        }
        lastScrollTop = scrollTop;
        console.log("scroll")
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        console.log("insideUseeffect ")
        return () => {
            window.removeEventListener('scroll', handleScroll);
            console.log("insideUseeffect return")
        };
    }, []);
    const {setCurrency} = useContext(CoinContext);
    
    const currencyHandler=(e)=>{
        switch(e.target.value){
            case "usd": {
                setCurrency({name:"usd",symbol: "$"}); break;
            }
            case "eur": {
                setCurrency({name:"eur",symbol: "€"}); break;
            }
            case "inr": {
                setCurrency({name:"inr",symbol: "₹"}); break;
            }
            default : {
                setCurrency({name:"usd",symbol: "$"}); break;
            }
        }
        console.log("oneChangeHandle");
    }


    return (
        <div className={`${isVisible ? 'block' : 'hidden'} fixed w-full  bg-gradient-to-b from-indigo-950 to-purple-800 shadow-md shadow-indigo-600 flex justify-between px-2 items-center h-fit py-3 `}>
            <div className='flex md:w-3/12 w-1/2 items-center gap-1'>
                <img src="src\assets\logo.png" alt="Logo" className='h-8 md:h-10 ' />
                <h1 className='text-3xl '>CryptoMania</h1>
            </div>
           <NavMenu />
            <div className='flex md:w-3/12 w-1/2 mr-2  justify-end gap-3  items-center'>
                <select onChange={currencyHandler} className='bg-purple-900 py-1 px-2 max-h-8'>
                     <option value="usd">USD</option>
                     <option value="inr">INR</option>
                     <option value="eur">EUR</option>
                </select>
                <button className='md:flex hidden hover:bg-purple-600 px-2 py-2  bg-purple-900  border-black border-2 rounded-3xl font-bold text-slate-8900 '>
                      Contact Us
                </button>
                <button onClick={toggleSidebar} className=' w-7 md:hidden '> 
                   <img  src="./src/assets/menu.png" alt="" />
                </button>
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            </div>
        </div>
    )
}

export default Navbar;
