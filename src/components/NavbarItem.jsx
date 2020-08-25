import React from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'

const NavbarItem = ({ item }) => {
    const { pathname } = useLocation()
    const history = useHistory()

    return (
        <li className={
            `navbar-item
            ${pathname === item.anchor
            ? 'active'
            : null}`
        }
            onClick={() => history.push(item.anchor)}
        >
            <Link
                exact={item.anchor === '/'}
                className="navbar-link"
                to={item.anchor}
            >
                {item.title}
            </Link>
        </li>
    )
}

export default NavbarItem
