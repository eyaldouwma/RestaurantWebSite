import React from 'react';
import './Header.css';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import LocalDining from '@material-ui/icons/LocalDining';
import {Link} from 'react-router-dom';


const Header = () => {
    return (
        <div className='header'>
            <div className="logoContainer">
                <span><Link to='/'>Eyal's Resturaunt</Link><LocalDining className="dine"/></span>
            </div>
            <div className="navContainer">
                <ui className="menu"> 
                    <li>About</li>
                    <li className="icon">
                        <KeyboardArrowDown className="icon2"/>
                        Menu
                        <ui className="dropdown">
                            <li><Link to='/menu' className='link'>Menu</Link></li>
                            <li><Link to='/menu' className='link'>Express Menu</Link></li>
                        </ui>
                    </li>
                    <li>Branches</li>
                    <li>Events</li>
                    <li><Link to='/contact' className='link'>Contact</Link></li>
                    <li>Order</li>
                </ui>
            </div>
        </div>
    )
}

export default Header