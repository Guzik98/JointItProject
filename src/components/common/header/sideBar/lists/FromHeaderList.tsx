import React from 'react';
import RightSiderReferenceArray from '../../navbar/RightSiderReferenceArray';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';

const FromHeaderList = (): JSX.Element => {
    return (
        <List className="from-header-to-side-bar">
            {RightSiderReferenceArray.map((item)=>{
                const { href, svg, text } = item;
                return (
                    <ListItem className="list-row" button key={text} href={href}>
                        {svg && <ListItemIcon className="list-icon">{ svg }</ListItemIcon>}
                        {text}
                    </ListItem>
                );
            })}
        </List>
    );
};

export default FromHeaderList;