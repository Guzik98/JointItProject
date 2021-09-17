import { useState, FC, createContext, useContext } from 'react';

export const SettingsContext = createContext<SettingsContextData | null>(null);

const useProviderSettings = () => {

    const [city,  setCity ] = useState<string>('all');
    const [tech,  setTech ] = useState<string>('all');
    const [seniority, setSeniority ] = useState<string>('all');
    const [fromSalary, setFromSalary ] = useState<number>(0 );
    const [toSalary, setToSalary ] = useState<number>(100000 );
    const [employmentType, setEmploymentType ] = useState<string>('all');

    return {
        city,
        setCity,
        tech,
        setTech,
        seniority,
        setSeniority,
        fromSalary,
        setFromSalary,
        toSalary,
        setToSalary,
        employmentType,
        setEmploymentType
    };
};

export const SettingsProvider: FC = ({ children }) => {
    const value = useProviderSettings();
    return (
        <SettingsContext.Provider value={value}>
            {children}
        </SettingsContext.Provider>
    );
};

type SettingsContextData = ReturnType<typeof useProviderSettings>;

export  const useSettings = () => {
    const settings = useContext(SettingsContext);
    
    if (!settings) {
         throw new Error('useSettings must by used inside SettingsProvider');
    }

    return settings;
};

