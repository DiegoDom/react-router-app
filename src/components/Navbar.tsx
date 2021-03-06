import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';

export const Navbar = () => {

    const { logout, isLogged } = useAuth();

    return (
        <nav>
            <ul>
                { !isLogged() &&
                    <>
                        <li><NavLink exact to="/login" activeClassName="active">Login</NavLink></li>
                        <li><NavLink exact to="/register" activeClassName="active">Register</NavLink></li>
                    </>
                }
                
                <li>
                    <NavLink exact to="/" activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink exact to="/about" activeClassName="active">About</NavLink>
                </li>
                <li>
                    <NavLink exact to="/contact" activeClassName="active">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/categories" activeClassName="active">Categorias</NavLink>
                </li>
                
                { isLogged() &&
                    <>
                        <li><NavLink exact to="/dashboard" activeClassName="active">Dashboard</NavLink></li>
                        <li><NavLink exact to="/payments" activeClassName="active">Payments</NavLink></li>
                        <li><button onClick={ () => logout() } >Logout</button></li>
                    </>
                }
            </ul>
        </nav>
    )
}
