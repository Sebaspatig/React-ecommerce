import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import {CgMenuBoxed, CgShoppingCart} from 'react-icons/cg'
import "../styles/_Navbar.sass"
import NavItem from '../components/headerComponents/NavItem'
import saleLogo from '@logos/logo_yard_sale.svg'
import AppContext from '../context/AppContext'
import MyOrder from './MyOrder'

export default function NavBar() {
    const {state} = useContext(AppContext)
    const [toggleCart, setToggleCart]= useState(false)

    return (
        <nav className="menu" >
            
            <CgMenuBoxed className="menu__icon"/>

            <div className="navbar-left">

                <Link to="/" className="menu__logo__link">
                    <img src={saleLogo} alt="logo" className="menu__logo"/>
                </Link>
            
            <NavItem/>
            
            </div>

            <div className="navbar-right">
            <ul className="menu__list">
                <li className="menu__item menu__item__email">yardsale@example.com</li>
                <li className="menu__item navbar-shopping-cart" onClick={()=> setToggleCart(!toggleCart)} >
                    <CgShoppingCart className="menu__shoppingCar"/>
                    {state.cart.length > 0 ? <div className="menu__item__count">{state.cart.length}</div>:null}
                </li>
            </ul>
            </div>

            {toggleCart ? <MyOrder/> : null}


        </nav>
    )
}
