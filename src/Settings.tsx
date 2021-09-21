import { createContext, FC, useContext, useState } from 'react';

export const SettingsContext = createContext<SettingsContextData | null>(null);

const useProviderSettings = () => {

    const [city, setCity] = useState<string> ('all');
    const [tech, setTech] = useState<string> ('all');
    const [seniority, setSeniority] = useState<string> ('All');
    const [fromSalary, setFromSalary] = useState<number> (0);
    const [toSalary, setToSalary] = useState<number> (100000);
    const [employmentType, setEmploymentType] = useState<string> ('All');
    const [sortBy, setSortBy] = useState<string> ('Latest');
    const [withSalary, setWithSalary] = useState<string> ('all-offers');

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
        setEmploymentType,
        sortBy,
        setSortBy,
        withSalary,
        setWithSalary
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

