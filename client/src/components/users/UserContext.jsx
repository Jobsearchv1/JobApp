import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userData = localStorage.getItem('user');

        if (token && userData) {
            try {
                setUser(JSON.parse(userData));
                console.log('User data loaded:', JSON.parse(userData)); // Ajoutez ce log pour vérifier les données utilisateur
            } catch (error) {
                console.error('Failed to parse user data:', error);
                localStorage.removeItem('user');
            }
        } else {
            console.log('No token or user data found.'); // Ajoutez ce log pour vérifier si les données utilisateur sont présentes
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
