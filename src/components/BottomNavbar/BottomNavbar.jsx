import React from "react";
import { BottomNavigation, Button } from "@material-ui/core";
import BugReportIcon from "@material-ui/icons/BugReport";
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
          classes={classes.reportbug}
          variant="contained"
          type="button"
        >
          <BugReportIcon style={{ fontSize: "20px" }} />
        </Button>
        <a
          className="stripe"
          href="https://stripe.com/"
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
