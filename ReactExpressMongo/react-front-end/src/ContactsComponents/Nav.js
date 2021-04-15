import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
     
        <Link to="/" className="navbar-brand">Contact Book</Link>
       
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/list">Contacts List</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/add">New Contact</Link>
            </li>
        </ul>
    </nav>
);

export default Nav;