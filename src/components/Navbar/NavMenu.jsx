import React from 'react'
import { Link } from 'react-router-dom';

const NavMenu = ({ value }) => {
    return (
        <div className={`md:flex ${value}  w-6/12 hidden justify-evenly`}>
            <ul className='flex w-7/12 justify-evenly'>
                <li>
                    <Link to="/">
                    <button className='hover:bg-violet-800 px-4 py-2 active:bg-slate-950 rounded-lg text-violet-400'>
                        Home
                    </button>
                    </Link>
                </li>
                <li>
                    <Link to="/market">
                        <button className='hover:bg-violet-800 px-4 py-2 active:bg-slate-950 rounded-lg text-violet-400'>
                            Market
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to="/news">
                        <button className='hover:bg-violet-800 px-4 py-2 active:bg-slate-950 rounded-lg text-violet-400'>
                            News
                        </button>
                    </Link>
                </li>

            </ul>
        </div>
    )
}

export default NavMenu
