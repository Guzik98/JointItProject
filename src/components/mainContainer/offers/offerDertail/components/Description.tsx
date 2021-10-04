import React from 'react';
import './Description.sass';
import { useSettings } from '../../../../../Settings';
import parse from 'html-react-parser';

const Description = (): JSX.Element => {
    const { dataDetail } = useSettings();
    if (!dataDetail){
        throw  new Error('fsdfsdfs');
    }

    const body = dataDetail.body;
    const parsed = parse(body);

    return (
        <div className="description">
            <div className="description-title">
                Description
            </div>
            <div className="description-content">
                <div className="description-text">
                    <span>
                        {parsed}
                    </span>
                </div>
                <div className="information-clause">
                    {dataDetail.information_clause}
                </div>
            </div>
        </div>
    );
};

export default Description;