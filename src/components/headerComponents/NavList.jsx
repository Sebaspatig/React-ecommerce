import React , {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../../context/AppContext'

export default function NavList() {

    const {item,saveItem} = useContext(AppContext);

    const [togglesubMenu, setTogglesubMenu]= useState(false)

    return (
        <React.Fragment>
        <li className="menu__item">
            <Link className="menu__link" to="#" onClick={()=>setTogglesubMenu(!togglesubMenu)}>Hello, User</Link>
            <ul className={`submenu__list  ${togglesubMenu ? "show__submenu" : ""}`}>
                <li className="submenu__item">
                    <Link to="#" className="submenu__link">My orders</Link>
                </li>
                <li className="submenu__item">
                    <Link to="#" className="submenu__link">My account</Link>
                </li>
                <li className="submenu__item">
                    {!item.login ? 
                    
                    <Link to="/login" className="submenu__link">Log in</Link>
                    : 
                    <Link to="/" className="submenu__link" onClick={()=> saveItem([])}>Sign out</Link>
                    }
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
