import React from 'react';
import { BottomNavigation, Button } from '@material-ui/core';
import BugReportIcon from '@material-ui/icons/BugReport';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'; 

import useStyles from '../BottomNavbar/styles';

const BottomNavbar = () => {
    const classes = useStyles();

    return (
        <BottomNavigation>
            <div className={classes.root}>
                <Button component={Link} to="/reportbug" classes={classes.button} variant="contained" type="button" color="primary">
                    <BugReportIcon style={{ fontSize: "40px" }}/>
                </Button>
                <div className="logo">
                    <img src={logo} alt="logo" width="130" height="65" />
                </div>
            </div>
        </BottomNavigation>
    )
}

export default BottomNavbar;