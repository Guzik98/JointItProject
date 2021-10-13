import React, { createContext, FC, useContext, useState } from 'react';
import { OfferType } from './types/offerType';
import OfferTypeDetail from './types/offerDetailType';
import { LongFilterType, View } from './types/shortTypes';

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
    const [ longFilterTech, setLongFilterTech ] = useState<LongFilterType[]>([]);
    const [ longFilterLocation, setLongFilterLocation ] = useState<LongFilterType[]>([]);
    const [ longFilterCompany, setLongFilterCompany ] = useState<LongFilterType[]>([]);
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
        longFilterTech, setLongFilterTech,
        longFilterLocation, setLongFilterLocation,
        longFilterCompany, setLongFilterCompany,

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

export const useSettings = () : SettingsContextData  => {
    const settings = useContext(SettingsContext);
    
    if (!settings) {
         throw new Error('useSettings must by used inside SettingsProvider');
    }

    return settings;
};

