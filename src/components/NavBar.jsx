import React from 'react'
import { Link } from 'react-router-dom'
import {CgMenuBoxed, CgShoppingCart} from 'react-icons/cg'
import "../styles/_Navbar.sass"

export default function NavBar() {
    return (
        <nav className="menu" >
            
            <CgMenuBoxed className="menu__icon"/>

            <div className="navbar-left">
            <img src={require('../../public/img/logos/logo_yard_sale.svg').default} alt="logo" className="menu__logo"/>

            <ul className="menu__list">
                <li className="menu__item">
                    <Link className="menu__link" to="#">All</Link>
                </li>
                <li className="menu__item">
                <Link className="menu__link" to="#">Clothes</Link>
                </li>
                <li className="menu__item">
                <Link className="menu__link" to="#">Electronics</Link>
                </li>
                <li className="menu__item">
                <Link className="menu__link" to="#">Furnitures</Link>
                </li>
                <li className="menu__item">
                <Link className="menu__link" to="#">Toys</Link>
                </li>
                <li className="menu__item">
                <Link className="menu__link" to="#">Others</Link>
                </li>
            </ul>
            </div>

            <div className="navbar-right">
            <ul className="menu__list">
                <li className="menu__item menu__item__email">platzi@example.com</li>
                <li className="menu__item navbar-shopping-cart" >
                    <CgShoppingCart className="menu__shoppingCar"/>
                    <div className="menu__item__count">2</div>
                </li>
            </ul>
            </div>
        </nav>
    )
}
