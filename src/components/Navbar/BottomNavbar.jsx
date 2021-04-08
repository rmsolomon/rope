import React from 'react';
import { BottomNavigation, Button } from '@material-ui/core';

import useStyles from './styles';

const BottomNavbar = () => {
    const classes = useStyles();

    return (
        <BottomNavigation className={classes.root}>
            <Button variant="outlined" color="primary" href="#outlined-buttons">Report Bug</Button>
        </BottomNavigation>
    )
}

export default BottomNavbar;