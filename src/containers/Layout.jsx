import React from 'react'
import NavBar from '../components/NavBar'

export default function Layout({children}) {
    return (
        <div className="Layout">
            <NavBar/>
            {children}
        </div>
    )
}
