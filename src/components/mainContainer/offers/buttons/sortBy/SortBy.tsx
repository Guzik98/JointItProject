import React from 'react';
import Button from '@material-ui/core/Button';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import DropdownIcon from '../../../../../assets/icons/rest/dropdown-icon';
import './SortBy.sass';
import MediaQuery from 'react-responsive';
// import { makeStyles } from '@material-ui/core/styles';


const options = ['latest', 'lowest salary', 'highest salary'];


// const useStyles = makeStyles({
//     root: {
//
//     },
//     li: {
//         height: 90
//     },
// });

const SortBy = (): JSX.Element => {
    // const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLDivElement>(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleClick = () => {
        console.info(`You clicked ${options[selectedIndex]}`);
    };

    const handleMenuItemClick = (
        event: React.MouseEvent<HTMLLIElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: React.MouseEvent<Document, MouseEvent>) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return;
        }
        setOpen(false);
    };

    const id = open ? 'spring-popper' : undefined;

    return (
        <div className="sort-border"  ref={ anchorRef }>
            <Button
                aria-haspopup="true"
                aria-describedby={id}
                className="sort-button"
                onClick={() => {
                    handleClick();
                    handleToggle();
                }}
            >
                <MediaQuery minWidth={1024}>
           <span className="sort-label" >
                                Sort by:
           </span>
                </MediaQuery>
                <span className="sort-option">
                    {options[selectedIndex]}
                </span>
                <MediaQuery minWidth={1024}>
                    <DropdownIcon/>
                </MediaQuery>
            </Button>

            <Popper  className="sort-pop" id={id} open={open} anchorEl={anchorRef.current} role={undefined} >
                        <Paper className="paper">
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList className="sort-by-list">
                                    {options.map((option, index) => (
                                        <MenuItem
                                            className="sort-by-label"
                                            key={option}
                                            selected={index === selectedIndex}
                                            onClick={(event) => handleMenuItemClick(event, index)}
                                        >
                                            <span className="sort-by-label">{option} </span>

                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
            </Popper>
        </div>
    );
};

export default SortBy;