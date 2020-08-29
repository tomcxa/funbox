import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
    const navItems = [
        {anchor: '/', title: 'Level 1'},
        {anchor: '/level2', title: 'Level 2'}
    ]

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {
                    navItems.map((item, index) => <NavbarItem key={index} item={item} />)
                }
            </ul>
        </nav>
    )
}

export default Navbar
