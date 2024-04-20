import { createContext, useMemo, useState } from "react";
import PropTypes from 'prop-types';

export const AuthContext = createContext();
export const TokenContext = createContext();
export const MessageContext = createContext();
export const UserContext = createContext();

export const AuthProvider = ( { children } ) => {
    const [ isAuthenticated, setIsAuthenticated ] = useState( false );
    const [ message, setMessage ] = useState( '' );
    const [ authToken, setAuthToken ] = useState( '' );
    const [ username, setUsername ] = useState( '' );
    const authContextValue = useMemo( () => ( { isAuthenticated, setIsAuthenticated } ), [ isAuthenticated, setIsAuthenticated ] );
    const tokenContextValue = useMemo( () => ( { authToken, setAuthToken } ), [ authToken, setAuthToken ] );
    const messageContextValue = useMemo( () => ( { message, setMessage } ), [ message, setMessage ] );
    const userContextValue = useMemo( () => ( { username, setUsername } ), [ username, setUsername ] );
    return <AuthContext.Provider value={authContextValue}>
        <TokenContext.Provider value={tokenContextValue}>
            <MessageContext.Provider value={messageContextValue}>
                <UserContext.Provider value={userContextValue}>
                    {children}
                </UserContext.Provider>
            </MessageContext.Provider>
        </TokenContext.Provider>
    </AuthContext.Provider>;
};

AuthProvider.propTypes = {
    children: PropTypes.node
};