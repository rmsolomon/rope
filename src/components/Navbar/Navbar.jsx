import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
//MenuItem, Menu,

import logo from '../../assets/rope-icon.svg';
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="fixed" className={classes.AppBar} color="inherit">
                <Toolbar>
                    <Typography variant="h5" className={classes.title} color="inherit">
                        <img src={logo} alt="rope" height="50px" className={classes.image} />
                        Rope.com
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
