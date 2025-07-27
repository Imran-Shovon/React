import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { LOGO_URL } from '../utils/constants';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const {loggedInUser} = useContext(UserContext);
    console.log("UserContext data: ", loggedInUser);
    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between  bg-pink-100 shadow-lg mb-2 mx-4 rounded-2xl">
            <div className="logo-container">
                <Link to="/"><img className="w-24 ml-8 my-2 rounded-2xl" src={LOGO_URL}/></Link>
            </div>
            <div className="flex items-center">
                <ul className='flex p-4 m-4 text-2xl'>
                    <li className='px-2'>Online: {onlineStatus?"✅":"🔴"}</li>
                    <li className='px-2'><Link className='links' to="/">Home</Link></li>
                    <li className='px-2'><Link className='links' to="/about">About</Link></li>
                    <li className='px-2'><Link className='links' to="/contact">Contact Us</Link></li>
                    <li className='px-2'><Link className='links' to="/grocery">Grocery</Link></li>
                    <li className='px-2'>Cart</li>
                    <button className=' px-4 py-1 ml-2 cursor-pointer rounded-lg  text-xl font-bold' 
                        onClick={()=>btnName==="Login"? setBtnName("Logout"): setBtnName("Login")}>
                        {btnName}
                    </button>
                    <li className='px-2 font-bold text-xl'>{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;