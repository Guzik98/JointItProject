import React from 'react';
import Button from '@material-ui/core/Button';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import DropdownIcon from '../../../../../assets/icons/rest/dropdown-icon';
import './SortBy.sass';
import MediaQuery from 'react-responsive';

const options = ['latest', 'lowest salary', 'highest salary'];

const SortBy = (): JSX.Element => {
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
                            <span className="sort-label">
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

        <Popper className="sort-pop" id={id} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
                <Grow
                    {...TransitionProps}
                    style={{
                        transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                    }}
                >

                    <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                            <MenuList id="split-button-menu">
                                {options.map((option, index) => (
                                    <MenuItem
                                        key={option}
                                        selected={index === selectedIndex}
                                        onClick={(event) => handleMenuItemClick(event, index)}
                                    >
                                        {option}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </ClickAwayListener>
                    </Paper>

                </Grow>
            )}
        </Popper>
        </div>
    );
};

export default SortBy;