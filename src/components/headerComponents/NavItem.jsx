import React from 'react'
import NavList from './NavList'

export default function NavItem({showMenu}) {
    return (
        <ul className={`menu__list  ${showMenu ? "show__menu" : ""}`}>
            <NavList/> 
        </ul>
    )
}
