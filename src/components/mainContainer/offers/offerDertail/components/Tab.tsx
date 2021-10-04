import React from 'react';
import MediaQuery from 'react-responsive';
import { useSettings } from '../../../../../Settings';

const Tab = () : JSX.Element => {
     const { dataDetail } = useSettings();
    if (!dataDetail) {
        throw new Error('Something go wrong fetching detail');
    }

    const CompanyIcon = () : JSX.Element => {
        return (
            <div className="tab-icon-border">
                <div className="tab-icon">
                    <svg style={{ fill: 'rgb(255, 82, 82)' }}
                         focusable="false"
                         viewBox="0 0 24 24"
                         aria-hidden="true"
                    >
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5
                        c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S
                        9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3
                        zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z
                        m8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
                        />
                    </svg>
                </div>
            </div>
        );
    };
    const CompanySizeIcon = (): JSX.Element=> {
        return (
            <div className="tab-icon-border">
                <div className="tab-icon">
                    <svg style={{ fill: 'rgb(251, 140, 0)' }}
                        focusable="false"
                         viewBox="0 0 24 24"
                         aria-hidden="true"
                    >
                        <path
                            d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                    </svg>
                </div>
            </div>
        );
    };

    const CompanySeniorIcon = () : JSX.Element => {
        return (
            <div className="tab-icon-border">
                <div className="tab-icon">
                    <svg style={{ fill: 'rgb(102, 187, 106)' }}
                         focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/>
                    </svg>
                </div>
            </div>
        );
    };
    const CompanynDataIcon = () => {
        return (
            <div className="tab-icon-border">
                <div className="tab-icon">
                    <svg style={{ fill: 'rgb(68, 138, 255)' }} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                            d="M16.24 7.76C15.07 6.59 13.54 6 12 6v
                            6l-4.24 4.24c2.34 2.34 6.14 2.34 8.49 0 2.34-2.34 2.34-6.14-.01-8.48z
                            M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18
                            c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                    </svg>
                </div>
            </div>
        );
    };

    const today = new Date().toISOString().split('T')[0];

    function getNumberOfDays(start: string, end: string){
        const date1 = new Date(start);
        const date2 = new Date(end);

        const oneDay = 1000 * 60 * 60 * 24;

        const diffInTime = date2.getTime() - date1.getTime();

        const diffInDays = Math.round(diffInTime / oneDay);

        if ( diffInDays < 1 ){
            return 'now';
        } else {
            return diffInDays + ' day ago';
        }
    }

    type TabType = {
        text: string,
        data: string,
        icon: JSX.Element,
        id : number,
        href? : string
    };

    const tab = [
        { text: 'Company name', data: dataDetail.company_name, icon: <CompanyIcon/>,
            id: 1, href: dataDetail.company_url },
        { text: 'Company size', data: dataDetail.company_size, icon: <CompanySizeIcon/>, id: 2  },
        { text: 'EXP.lvl', data: dataDetail.experience_level, icon: <CompanySeniorIcon/>, id: 3 },
        { text: 'Added', data: getNumberOfDays(dataDetail.published_at, today), icon: <CompanynDataIcon/>, id: 4  },
    ] ;

     const TabComponent = (props: TabType) : JSX.Element => {
         return (
                <>
                    <MediaQuery minWidth={1024}>
                        <div className = "tab">
                            <div className = "tab-info">
                                <div className = "tab-info-level2">
                                    <span className = "info" >
                                        {props.icon}
                                        {props.data.charAt(0).toUpperCase() + props.data.slice(1)}
                                    </span>
                                    <span className = "tab-text">
                                         {props.text.charAt(0).toUpperCase() + props.text.slice(1)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </MediaQuery>
                    <MediaQuery maxWidth={1024}>
                        {props.id <= 2 ?
                            <div className="media-2-tab">
                                <div className="tab">
                                    <div className="tab-info">
                                        <div className="tab-info-level2">
                            <span className="info">
                                {props.icon}
                                {props.data.charAt(0).toUpperCase() + props.data.slice(1)}
                            </span>
                                            <span className="tab-text">
                                {props.text.charAt(0).toUpperCase() + props.text.slice(1)}
                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="media-2-tab">
                                <div className="tab">
                                    <div className="tab-info">
                                        <div className="tab-info-level2">
                            <span className="info">
                                {props.icon}
                                {props.data.charAt(0).toUpperCase() + props.data.slice(1)}
                            </span>
                                            <span className="tab-text">
                                {props.text.charAt(0).toUpperCase() + props.text.slice(1)}
                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </MediaQuery>
                </>
         );
     };
     return (
         <div className = "tabs">
             {
                 tab.map(( { text, data, icon, id } : TabType  ) => {
                    return ( <TabComponent  data = {data} text={text} icon ={icon} key={id} id={id} /> );
                 })
             }
        </div>
     );
};

export default Tab;