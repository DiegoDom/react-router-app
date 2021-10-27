import React from 'react'
import { useHistory, useLocation } from 'react-router';
import { useAuth } from '../auth/useAuth';

export const Login = () => {

    const { login } = useAuth();
    const history = useHistory();
    const location = useLocation<any>();

    const previousObjetcURL = location.state?.from;

    const handleLogin = () => {
        login();
        history.push(previousObjetcURL || '/dashboard');
    }

    return (
        <div>
            <h1>Login</h1>
            <button onClick={ handleLogin }>Login</button>
        </div>
    )
}
