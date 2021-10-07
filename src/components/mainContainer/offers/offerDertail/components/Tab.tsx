import React from 'react';
import MediaQuery from 'react-responsive';
import { useSettings } from '../../../../../Settings';
import CompanyIconOfferDetail from '../../../../../assets/icons/svg/CompanyIconOfferDetail';
import CompanySizeIcon from '../../../../../assets/icons/svg/CompanySizeIcon';
import CompanySeniorIcon from '../../../../../assets/icons/svg/CompanySeniorIcon';
import CompanynDataIcon from '../../../../../assets/icons/svg/CompanynDataIcon';
import { TabType } from '../../../../../types/shortTypes';
import { getNumberOfDays } from '../../offer/function/offerComponentFunctions';

const Tab = () : JSX.Element => {
     const { dataDetail } = useSettings();
     const today = new Date().toISOString().split('T')[0];

    if (!dataDetail) {
        throw new Error('Something go wrong fetching detail');
    }

    const tab = [
        { text: 'Company name', data: dataDetail.company_name, icon: <CompanyIconOfferDetail/>,
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