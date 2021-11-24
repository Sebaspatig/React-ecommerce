import React from 'react'
import { Link } from 'react-router-dom'

export default function NavList() {
    return (
        <React.Fragment>
        <li className="menu__item">
            <Link className="menu__link" to="#">Hello, User</Link>
            <ul className="submenu__list">
                <li className="submenu__item">
                    <Link to="#" className="submenu__link">My orders</Link>
                </li>
                <li className="submenu__item">
                    <Link to="#" className="submenu__link">My account</Link>
                </li>
                <li className="submenu__item">
                    <Link to="#" className="submenu__link">Sign out</Link>
                </li>
            </ul>
        </li>
        <li className="menu__item">
            <Link className="menu__link" to="/">All</Link>
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
        </React.Fragment>
    )
}
