import React, { createContext, FC, useContext, useState } from 'react';
import { OfferType } from './types/offerType';
import OfferTypeDetail from './types/offerDetailType';
import { View } from './types/shortTypes';

export const SettingsContext = createContext<SettingsContextData | null>(null);

const useProviderSettings = () => {
    const [ data, setData ] = useState<OfferType[]>();
    const [ urlDetail, setUrlDetail ] = useState<string>();
    const [ dataDetail, setDataDetail] = useState<OfferTypeDetail>();
    const [ openDetailComponent, setOpenDetailComponent] = useState<boolean>(false);
    const [ city, setCity ] = useState<string>('all');
    const [ tech, setTech ] = useState<string>('All');
    const [ seniority, setSeniority ] = useState<string>('All');
    const [ fromSalary, setFromSalary ] = useState<number>(0);
    const [ toSalary, setToSalary ] = useState<number>(100000);
    const [ employmentType, setEmploymentType ] = useState<string>('All');
    const [ sortBy, setSortBy ] = useState<string>('Latest');
    const [ withSalary, setWithSalary ] = useState<boolean>(false);
    const [ viewport, setViewport ] = useState<View>({
        latitude: 52.237049,
        longitude: 21.017532,
        width: '100%',
        height: '98%',
        zoom: 5,
    });
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
            setWithSalary,
            data,
            setData,
            dataDetail,
            setDataDetail,
            urlDetail,
            setUrlDetail,
            viewport,
            setViewport,
            openDetailComponent,
            setOpenDetailComponent,
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

export const useSettings = ()  => {
    const settings = useContext(SettingsContext);
    
    if (!settings) {
         throw new Error('useSettings must by used inside SettingsProvider');
    }

    return settings;
};

