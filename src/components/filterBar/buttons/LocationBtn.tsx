import React from 'react';

import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './buttons.sass';


 export  const LocationBtn = (): JSX.Element => {
    return (
        <Button size="small" variant="outlined"  endIcon = {<ExpandMoreIcon /> }  className="mui-btn">
            Location
        </Button>

    );
};

export const LocationSmall = () : JSX.Element => {
    return (
        <Button size="small" variant="outlined"  className="mui-btn">
            Location
        </Button>
    );
};



