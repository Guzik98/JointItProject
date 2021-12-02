import React, { createContext, FC, useContext, useState } from 'react';

export const AuthContext = createContext<AuthContextData | null>(null);

const useAuthProviderSettings = () => {
    const [role, setRole] = useState<string>('');
    const [username, setUsername] = useState<string | null>();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

    return {
        setRole,
        role,
        username,
        setUsername,
        isAuthenticated,
        setIsAuthenticated
    };
};

export const AuthContextProvider: FC = ({ children }) => {
    const value = useAuthProviderSettings();

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

type AuthContextData = ReturnType<typeof useAuthProviderSettings>;

export const useAuthSettings = (): AuthContextData => {
    const AuthSettings = useContext(AuthContext);

    if (!AuthSettings) {
        throw new Error('useAuthSettings must by used inside AuthSettings');
    }

    return AuthSettings;
};