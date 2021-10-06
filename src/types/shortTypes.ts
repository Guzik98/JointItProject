export interface HandlePopOut {
    handleClose?: () => void;
    handleOpen?: () => void
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
