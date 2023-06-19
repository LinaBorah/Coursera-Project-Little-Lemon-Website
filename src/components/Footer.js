import React from 'react'
import pic from '../assets/Logo.png';

function Footer(){
    return(
        <footer>
            <img src={pic} alt=''></img>
            <div className='footer-text'>
            <div>
                <h4>Doormat Navigation</h4>
                <ul className='footer-list'>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#reservations">Reservations</a></li>
                    <li><a href="#order-online">Order Online</a></li>
                    <li><a href="#login">Login</a></li>
                </ul>
            </div>
            <div>
            <h4>Contacts</h4>
                <ul className='footer-list'>
                    <li>45, ABC street, Guwahati, Assam, 787346</li>
                    <li>9887645327</li>
                    <li>little-lemon@co.in</li>
                </ul>
            </div>
            <div>
            <h4>Social Media links</h4>
            <ul className='footer-list'>
                    <li><a href="#facebook">Facebook</a></li>
                    <li><a href="#instagram">Instagram</a></li>
                    <li><a href="#twitter">Twitter</a></li>
                    </ul>
                
            </div>
            </div>
            
        </footer>
    );
}
export default Footer;