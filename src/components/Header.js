import {LOGO_URL} from '../utils/constants';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
    return (
        <div className="header">
            <div className="logo-container">
                <Link to="/"><img className="logo" src={LOGO_URL}/></Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link className='links' to="/">Home</Link></li>
                    <li><Link className='links' to="/about">About</Link></li>
                    <li><Link className='links' to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className='login' 
                        onClick={()=>btnName==="Login"? setBtnName("Logout"): setBtnName("Login")}>
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;