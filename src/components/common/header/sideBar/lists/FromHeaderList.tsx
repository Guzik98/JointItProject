import React from 'react';
import { RightSideReferenceArray } from '../../navbar/buttons/rest/RightSideReferenceArray';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';

const FromHeaderList = (): JSX.Element => {
    return (
        <List className="from-header-to-side-bar">
            {RightSideReferenceArray.map((item) => {
                const { svg, text } = item;
                return (
                    <ListItem className="list-row" button key={text}>
                        {svg && <ListItemIcon className="list-icon">{svg}</ListItemIcon>}
                        {text}
                    </ListItem>
                );
            })}
        </List>
    );
};

export default FromHeaderList;