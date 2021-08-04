import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">MyRestApp</h1>
                <div className="menu-icon">
                    <i className=""></i>
                </div>
                <ul>
                    <li a href="">Menu 1</li>
                    <li a href="">Menu 1</li>
                    <li a href="">Menu 1</li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;