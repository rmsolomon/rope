import React from "react";
import rope from "../../assets/rope.svg";

import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <div>
      <AppBar
        position="fixed"
        className={classes.AppBar}
        elevation={0}
        color="default"
      >
        <Toolbar>
          <Typography
            component={Link}
            to=""
            className={classes.title}
            color="inherit"
          >
            <img src={rope} alt="logo" width="130" height="65" />
          </Typography>
          <div className={classes.grow} />
          <Typography
            component={Link}
            variant="h6"
            className={classes.links}
            to="/about"
            color="inherit"
          >
            About Us
          </Typography>
          <Typography
            component={Link}
            variant="h6"
            className={classes.links}
            to="/faq"
            color="inherit"
          >
            FAQs
          </Typography>
          <Typography
            component={Link}
            variant="h6"
            className={classes.links}
            to="/contact"
            color="inherit"
          >
            Contact Us
          </Typography>
          {location.pathname === "/" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
