import { BottomNavigation, Button } from "@material-ui/core";
import BugReportIcon from '@mui/icons-material/BugReport';
import React from "react";
import { Link } from "react-router-dom";
import stripe from "../../assets/stripe.svg";

import useStyles from "../BottomNavbar/styles";

const BottomNavbar = () => {
  const classes = useStyles();

  return (
    <BottomNavigation>
      <div className={classes.root}>
        <Button
          component={Link}
          to="/reportbug"
          className={classes.reportbug}
          variant="outlined"
          type="button"
        >
          <BugReportIcon style={{ fontSize: "18px" }} />
        </Button>
        <a
          href="https://stripe.com/"
          className={classes.stripe}
          target="_blank"
          rel="noreferrer"
        >
          <img src={stripe} alt="logo" width="130" height="65" />
        </a>
      </div>
    </BottomNavigation>
  );
};

export default BottomNavbar;
