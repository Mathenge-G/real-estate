import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className="shadow-md bg-slate-200 ">
        <div className="flex items-center justify-between max-w-6xl p-3 mx-auto">
           <Link to="/">
                <h1 className="flex flex-wrap text-sm font-bold sm:text-xl">
                    <span className="text-slate-500">Market</span>
                    <span className="text-slate-700">Mall</span>
                </h1>
           </Link>
            <form className="flex items-center p-3 rounded-lg bg-slate-100">
                <input type="text" placeholder="Search..." className="w-24 bg-transparent focus:outline-none sm:w-64"/>
                <SearchIcon className="text-slate-600"/> 
            </form>
            <ul className="flex gap-4">
                <Link to="/home"> 
                  <li className="hidden sm:inline text-slate-700 hover:underline">Home</li>
                </Link>
                <Link to="/about"> 
                    <li className="hidden sm:inline text-slate-700 hover:underline">About</li>
                </Link>
                <Link to="/sign-in">
                    <li className=" text-slate-700 hover:underline">Sign In </li>
                </Link>
            </ul>
        </div>
    </header>
  )
}

export default Header
