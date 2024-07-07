import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div
            className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                } z-40`}
        >
            <button
                className="absolute top-4 right-4  text-slate-300"
                onClick={toggleSidebar}
            >
                Close
            </button>
            <div className="p-4">
                <h2 className="text-2xl text-cyan-500 font-bold">Sidebar Menu</h2>
                <ul>
                    <li className='hover:bg-violet-800'>
                        <Link to="/"><button className=' px-4 py-2 rounded-lg text-violet-400'>
                            Home
                        </button>
                        </Link>
                    </li>
                    <li className='hover:bg-violet-800'>
                        <Link to="/market">
                            <button className=' px-4 py-2 rounded-lg text-violet-400'>
                                Market
                            </button>
                        </Link>
                    </li>
                    <li className='hover:bg-violet-800'>
                        <Link to="/news">
                            <button className=' px-4 py-2 rounded-lg text-violet-400'>
                                News
                            </button>
                        </Link>
                    </li>
                    <li className='hover:bg-violet-800'>
                        <Link to="#">
                            <button className=' px-4 py-2 rounded-lg text-violet-400'>
                                ContactUs
                            </button>
                        </Link>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Sidebar;

