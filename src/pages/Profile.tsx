import React from 'react'
import { useParams } from 'react-router'

interface Params {
    username: string;
}

export const Profile = () => {

    const { username } = useParams<Params>();

    return (
        <div>
            <h1>Bienvenido { username }</h1>
        </div>
    )
}
