import React, { useState } from 'react';
import './Description.sass';
import { useSettings } from '../../../../../Settings';
import parse from 'html-react-parser';

const Description = (): JSX.Element => {
    const { dataDetail } = useSettings();
    const [showMore, setShowMore] = useState<boolean>(false);
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
                    { !showMore ?
                        dataDetail.information_clause.substring(0, 350)
                        :  dataDetail.information_clause
                    }

                    <span
                        className = "showMore"
                        onClick={ () => setShowMore(!showMore)}>
                        { showMore ? 'less' : 'more' }
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Description;