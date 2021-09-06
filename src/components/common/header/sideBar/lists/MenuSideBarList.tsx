import React from 'react';
import { FirstItemList } from '../menu/MenuItems';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';

const MenuSideBarList = () => {
    return (
        <List>
            { FirstItemList.map((item)=>{
                const { text, svg } = item;
                return (
                    <ListItem className="list-row" button key={text} >
                        {svg && <ListItemIcon className="list-icon"> {svg}</ListItemIcon>}
                        {text}
                    </ListItem>
                );
            })
            }
        </List>
    );
};

export default MenuSideBarList;