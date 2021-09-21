import React from 'react';
import { SecondItemList } from '../menu/MenuItems';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';

const HelpList = () : JSX.Element => {
    return (
        <List>
            {SecondItemList.map ((item) => {
                const { text, svg } = item;
                return (
                    <ListItem className="list-row" button key={text}>
                        {svg && <ListItemIcon className="list-icon"> {svg}</ListItemIcon>}
                        {text}
                    </ListItem>
                );
            })}
        </List>
    );
};

export default HelpList;