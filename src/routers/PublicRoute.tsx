import React from 'react';
import { Route, Redirect } from 'react-router';

interface Props {
    exact: boolean;
    path: string;
    component: React.ComponentType<any>;
    isAuth: boolean;
}

export const PublicRoute = ({ component: Component, isAuth ,...rest }: Props) => {

    return (
        <Route { ...rest }>
            { !isAuth ? <Component /> : <Redirect to="/"/> }
        </Route>
    )
}
