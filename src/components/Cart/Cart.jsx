import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";

import useStyles from "./styles";

const Cart = ({ cart }) => {
  const classes = useStyles();

  const EmptyCart = () => {
    <Typography variant="subtitle1">
      you have no items in your shoping cart, starting ading some!
    </Typography>;
  };

  const FilledCart = () => {
    <>
      <Grid conatiner spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <div>{item.name}</div>
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          subtotal:{cart.subtotal.formatted_with_symbol}
        </Typography>
        <Button
          className={classes.emptyButton}
          sizes="large"
          type="button"
          variant="contained"
          color="secundary"
        >
          Empty Cart
        </Button>
        <Button
          className={classes.checkoutButton}
          sizes="large"
          type="button"
          variant="contained"
          color="primary"
        >
          Checkout
        </Button>
      </div>
    </>;
  };

  if (!cart.line_items) return "Loading.. ";

  return (
    <Container>
      <div className={classes.toolbar} />;
      <Typography className={classes.title} variant="h3">
        your shoping cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
