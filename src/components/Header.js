import React from 'react'
import pic from '../assets/Logo.png';
function Header(){
    return(
        <header>
            <img className ="logo" src={pic} alt=''></img>
            <nav>
            <ul className='navbar-list'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservations">Reservations</a></li>
                <li><a href="#order-online">Order Online</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
        </nav>
        </header>
    );
}
export default Header;