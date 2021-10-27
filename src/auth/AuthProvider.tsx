import React, { createContext, useEffect, useState } from 'react'

const a: any = null;
export const AuthContext = createContext(a);

const AuthProvider = ({ children }: any) => {

    const [user, setUser] = useState<any>(JSON.parse(localStorage.getItem('user') || ''));

    useEffect(() => {
        try {
            localStorage.setItem('user', JSON.stringify(user));
        } catch (error: any) {
            localStorage.removeItem('user');
            console.log(error);
        }
    }, [user]);

    const contextValue = {
        user,
        login() {
            setUser({ id: 1, userName: 'Diego' })
        },
        logout() {
            setUser(null);
        },
        isLogged() {
            return !!user;
        }
    };

    return (
        <AuthContext.Provider value={ contextValue }>
            { children }
        </AuthContext.Provider>
    )
};

export default AuthProvider;
