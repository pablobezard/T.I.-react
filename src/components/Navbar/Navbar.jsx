import React from "react";
import {
  AppBar,
  Tourbar,
  IconButton,
  Badge,
  MenyItem,
  Menu,
  Typography,
  Toolbar,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

import logo from "../../assets/commerce.png";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            <img
              src={logo}
              alt="Commerce.js"
              height="25px"
              className={classes.image}
            />
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton>
              <Badge badgeContent={2} color="secundary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
