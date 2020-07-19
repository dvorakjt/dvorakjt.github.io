import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Header() {
    return (
        <nav className="navbar sticky-top navbar-expand navbar-light">
            <Link className="nav-brand" to="/">Home</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">about</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/portfolio">portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <a class="nav-link" href="#contactJumbo">contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;