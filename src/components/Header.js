import {LOGO_URL} from '../utils/constants';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    console.log("Header Rendered");
    //If no dependency array is passed, useEffect will run after every render
    //if the dependency array is empty, useEffect will run only once after the first render.(just once)
    //if the dependency array has some variables, useEffect will run after every render when those variables change.
    useEffect(() => {
        console.log("Header Component Rendered");
    }, [btnName]);
    // let btnName = "Login";

    const onlineStatus = useOnlineStatus();
    console.log("Online Status:", onlineStatus);

    return (
        <div className="flex justify-between  bg-pink-100 shadow-lg mb-2 mx-4 rounded-2xl">
            <div className="logo-container">
                <Link to="/"><img className="w-24 ml-8 my-2 rounded-2xl" src={LOGO_URL}/></Link>
            </div>
            <div className="flex items-center">
                <ul className='flex p-4 m-4 text-2xl'>
                    <li className='px-2'>Online Status: {onlineStatus?"✅":"🔴"}</li>
                    <li className='px-2'><Link className='links' to="/">Home</Link></li>
                    <li className='px-2'><Link className='links' to="/about">About</Link></li>
                    <li className='px-2'><Link className='links' to="/contact">Contact Us</Link></li>
                    <li className='px-2'><Link className='links' to="/grocery">Grocery</Link></li>
                    <li className='px-2'>Cart</li>
                    <button className='border-2 border-black px-4 py-1 ml-2 cursor-pointer rounded-lg bg-green-100 text-xl font-bold' 
                        onClick={()=>btnName==="Login"? setBtnName("Logout"): setBtnName("Login")}>
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;