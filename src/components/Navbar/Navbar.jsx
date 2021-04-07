import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Button, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/rope-icon.svg';
import useStyles from './styles';

const Navbar = () => {
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
                    <Button variant="outlined" color="primary" href="#outlined-buttons">Report Bug</Button>
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={2} color="secondary">
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
