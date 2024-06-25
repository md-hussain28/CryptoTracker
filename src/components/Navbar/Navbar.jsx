import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CoinContext } from '../../context/CoinContext';

const Navbar = () => {

    const [isVisible, setIsVisible] = useState(true);
    let lastScrollTop = 0;

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
        <div className={`${isVisible ? 'block' : 'hidden'} fixed w-full  bg-gradient-to-b from-indigo-950 to-purple-800 shadow-md shadow-indigo-600 flex justify-between px-10 items-center h-fit py-3 `}>
            <div className='flex md:w-3/12 w-1/2 items-center gap-2'>
                <img src="src\assets\logo.png" alt="Logo" className='h-12 ' />
                <h1 className='text-3xl '>CryptoMania</h1>
            </div>
            <div className='md:flex w-6/12 hidden justify-evenly'>
                <ul className='flex w-6/12 justify-evenly'>
                    <li>
                        <Link to="/"><button className='hover:bg-violet-800 px-4 py-2 rounded-lg text-violet-400'>
                            Home
                        </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/market">
                        <button className='hover:bg-violet-800 px-4 py-2 rounded-lg text-violet-400'>
                            Market
                        </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/news">
                        <button className='hover:bg-violet-800 px-4 py-2 rounded-lg text-violet-400'>
                            News
                        </button>
                        </Link>
                    </li>

                </ul>
            </div>
            <div className='flex md:w-3/12 w-1/2 md:justify-around justify-end  items-center'>
                <select onChange={currencyHandler} className='bg-purple-900 py-1 px-4 max-h-8'>
                     <option value="usd">USD</option>
                     <option value="inr">INR</option>
                     <option value="eur">EUR</option>
                </select>
                <button className='md:flex hidden hover:bg-purple-600 px-3 py-2 bg-purple-900  border-black border-2 rounded-3xl font-bold text-slate-8900 '>
                      Contact Us
                </button>
            </div>
        </div>
    )
}

export default Navbar;
