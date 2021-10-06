import './offerComponent.sass';

export  const CompanyIcon = (): JSX.Element => {
    return (
        <svg className="company-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
        <path
            d="M12 7V3H2v18h20V7H12zM6 19H4v
            -2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V
            9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z">
        </path>
        </svg>
    );
};

export const PointerIcon = () : JSX.Element => {
    return (
        <svg className="pointer-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path
                    d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8
                    C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM
                    12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z"/>
        </svg>
    );
};

export const getNumberOfDays = ( start: string, end: string ): string => {
    const date1 = new Date(start);
    const date2 = new Date(end);

    const oneDay = 1000 * 60 * 60 * 24;

    const diffInTime = date2.getTime() - date1.getTime();

    const diffInDays = Math.round(diffInTime / oneDay);

    if ( diffInDays < 1 ){
        return 'Now';
    } else {
        return diffInDays + 'd ago';
    }
};

