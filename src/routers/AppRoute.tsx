import React from 'react';

import { BrowserRouter as Router, Redirect, Route, Switch, NavLink, useRouteMatch } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { Profile } from '../pages/Profile';
import { Categories } from '../pages/Categories';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Dashboard } from '../pages/Dashboard';
import { Payments } from '../pages/Payments';
import { PrivateRoute } from './PrivateRoute';
import { useAuth } from '../auth/useAuth';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {


    const { isLogged } = useAuth();

    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/about" component={ About } />
                    <Route path="/contact" component={ Contact } />
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/profile/:username" component={ Profile } />

                    <Route path="/categories" component={ CategoriesRouter } />

                    <PublicRoute exact path="/login" component={ Login } isAuth={ isLogged() } />
                    <PublicRoute exact path="/register" component={ Register } isAuth={ isLogged() } />
                    
                    <PrivateRoute exact path="/dashboard" component={ Dashboard } isAuth={ isLogged() } />
                    <PrivateRoute exact path="/payments" component={ Payments } isAuth={ isLogged() } />

                    <Route path="*" component={ NotFound } />
                </Switch>
            </Router>
        </div>
    )
}

const CategoriesRouter = () => {

    const { url } = useRouteMatch();

    return(<>
        <div>
            <ul>
                <li><NavLink exact to={`${ url }`} activeClassName="active">Todas</NavLink></li>
                <li><NavLink exact to={`${ url }/terror`} activeClassName="active">Terror</NavLink></li>
                <li><NavLink exact to={`${ url }/comedia`} activeClassName="active">Comedia</NavLink></li>
                <li><NavLink exact to={`${ url }/accion`} activeClassName="active">Accion</NavLink></li>
            </ul>
        </div>

        <Switch>
            <Route exact path="/categories" component={ Categories } />
            <Route exact path="/categories/terror">
                <h1>Categoria Terror</h1>
            </Route>
            <Route exact path="/categories/comedia">
                <h1>Categoria Comedia</h1>
            </Route>
            <Route exact path="/categories/accion">
                <h1>Categoria Accion</h1>
            </Route>
            <Route path="*">
                <Redirect to="/" />
            </Route>
        </Switch>
    </>)
}
