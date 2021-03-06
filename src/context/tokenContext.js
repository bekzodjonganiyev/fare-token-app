import React, {createContext, useState, useEffect} from 'react';

const Context = createContext();

const TokenProvider = ({ children }) => {
    const [state, setState] = useState(
        window.localStorage.getItem('token') || false,
    );

    useEffect(() => {
        if (state) {
            window.localStorage.setItem('token', state);
        } else {
            window.localStorage.removeItem('token');
        }
    }, [state]);

    return (
        <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
    );
};

export { Context, TokenProvider }