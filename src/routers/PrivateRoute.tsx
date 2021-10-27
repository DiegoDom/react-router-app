import React from 'react'
import { Redirect, Route, useLocation } from 'react-router';

interface Props {
    exact: boolean;
    path: string;
    component: React.ComponentType<any>;
    isAuth: boolean;
}

export const PrivateRoute = ({ component: Component, isAuth ,...rest }: Props) => {

    const location = useLocation();

    return (
        <Route { ...rest }>
            { isAuth ? <Component /> : <Redirect to={{ pathname:'/login', state: { from: location } }} /> }
        </Route>
    )
};
