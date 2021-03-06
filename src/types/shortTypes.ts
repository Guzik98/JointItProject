export interface HandlePopOut {
    handleClose?: () => void;
    handleOpen?: () => void
}

export interface Size {
    width: number;
    height: number;
}

export type HeaderLinkType = {
    text: string,
    svg?: JSX.Element
};

export type MenuElements = {
    text?: string,
    svg: JSX.Element,
    href?: string,
};

export type CityType = {
    city: string,
    latitude: number
    longitude: number
};

export type ButtonType = {
    name: string;
};

export type IconType = {
    name: string,
    icon: JSX.Element

};

export type TabType = {
    text: string,
    data: string,
    icon: JSX.Element,
    id : number,
    href? : string
};

export type View = {
    latitude: number
    longitude: number
    width: string
    height: string
    zoom: number
};


export type LongFilterType =  {
    name : string,
    category : string
};


export enum RoleEnum {
    EMPLOYER = 'EMPLOYER',
    EMPLOYEE = 'EMPLOYEE',
}
export type Token = {
    username: string
    role : RoleEnum
    iat: string
    exp: string
};