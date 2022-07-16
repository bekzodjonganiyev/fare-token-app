import React, {createContext} from 'react';

const Context = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = React.useState(false);

    return (
        <Context.Provider value={{ auth, setAuth }}>
            {children}
        </Context.Provider>
    )
};

export { Context, AuthProvider }