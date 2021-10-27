import React from 'react'
import { useHistory, useLocation } from 'react-router'

export const Categories = () => {

    const history = useHistory();

    const location = useLocation();
    const query = new URLSearchParams(location.search);

    const page = query.get('page') || 1;
    const limit = query.get('limit') || 50;

    const handleNext = () => {
        query.set('page', `${ Number(page) + 1 }`);

        history.push({ pathname: '/categories',search: `?page=${ Number(page) + 1 }&limit=20` })
    };

    return (
        <div>
            <h1>Categories</h1>
            <p>Page: { page }</p>
            <p>Limit: { limit }</p>
            <button onClick={ handleNext }>Next</button>
        </div>
    )
}
