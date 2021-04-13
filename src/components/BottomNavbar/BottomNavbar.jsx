import React from 'react';
import { BottomNavigation, Button } from '@material-ui/core';
import BugReportIcon from '@material-ui/icons/BugReport';
import { Link } from 'react-router-dom';

import useStyles from '../BottomNavbar/styles';

const BottomNavbar = () => {
    const classes = useStyles();

    return (
        <BottomNavigation className={classes.root}>
            <Button component={Link} to="/reportbug" variant="contained" type="button" color="primary">
                <BugReportIcon style={{ fontSize: "40px" }}/>
            </Button>
        </BottomNavigation>
    )
}

export default BottomNavbar;