import React from 'react'
import { Link } from 'react-router-dom'
import {CgMenuBoxed, CgShoppingCart} from 'react-icons/cg'
import "../styles/_Navbar.sass"
import NavItem from '../components/headerComponents/NavItem'

export default function NavBar() {
    return (
        <nav className="menu" >
            
            <CgMenuBoxed className="menu__icon"/>

            <div className="navbar-left">
            <img src={require('../../public/img/logos/logo_yard_sale.svg').default} alt="logo" className="menu__logo"/>
            
            <NavItem/>
            
            </div>

            <div className="navbar-right">
            <ul className="menu__list">
                <li className="menu__item menu__item__email">yardsale@example.com</li>
                <li className="menu__item navbar-shopping-cart" >
                    <CgShoppingCart className="menu__shoppingCar"/>
                    <div className="menu__item__count">2</div>
                </li>
            </ul>
            </div>
        </nav>
    )
}
