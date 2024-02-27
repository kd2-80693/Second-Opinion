import React from  'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
const Navbar=()=>{
    return (
        <>
           <nav className='navbar-my'>
            <div className='left-navbar'>
                <p>Contact Us</p>
                <a href="mailto:secondopinion@gmail.com">secondOpinion@gmail.com</a>
                <a href="#">+91 7080920302</a>
            </div>
            <div className='right-navbar'>
                <Link to={"/patient/dashboard"}>Dashboard</Link> &nbsp;&nbsp;&nbsp;
                <Link to={"/patient/mycases"}>My Cases</Link>&nbsp;&nbsp;&nbsp;
                <Link to={"/patient/profile"}>Profile</Link>
            </div>
           </nav> 
        </>
    )
}
export default Navbar;