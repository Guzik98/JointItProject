import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { FirstItemList, SecondItemList, MenuElements } from '../buttons/MenuItems';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';
import { RightSideReferenceArray } from '../../navbar/buttons/rest/RightSideReferenceArray';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
    }),
);


export const SocialLinksComponent = ({ href, svg }: MenuElements ) : JSX.Element => {
    return (
        <a
            className="className"
            aria-disabled="false"
            rel="noreferrer"
            href={href}
            target="_blank"
        >
            <span className="social-icon-border">
                {svg}
            </span>
        </a>
    );
};

export const FirstList = () : JSX.Element => {
    return (
        <List>
            {FirstItemList.map((item) => {
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


export const SecondList = () : JSX.Element => {
    return (
        <List>
            {SecondItemList.map((item) => {
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

export const FromHeaderList = (): JSX.Element => {
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


export const NestedList = (): JSX.Element => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
        >
            <ListItem button onClick={handleClick}>
                <ListItemText primary="More" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <FromHeaderList/>
            </Collapse>
        </List>
    );
};


