import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
// import classes from '*.module.css';

const Cart = ({ cart }) => {
    const cartIsEmpty = cart.line_items.length === 0;

    const EmptyCart = () => {
        <Typography variant="subtitle1">You have no items in your shopping cart.</Typography>
    };

    const FilledCart = () => {
       <>
       <Grid container spacing={3}>
            {cart.line_items.map((item) => (
                <Grid item xs={12} sm={4} key={item.id}>
                   <div>{item.name}</div> 
                </Grid>
            ))}
       </Grid>
       <div className={classes.cardDetaild}>
           <Typography variant="h4">
                Subtotal: { cart.subtotal.formatted_with_symbol}
           </Typography>
           <div>
               <button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty Cart</button>
               <button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</button>
           </div>
       </div>
       </> 
    };

    return (
        <div>
            <Container>
                <div className={classes.toolbar} />
                <Typography className={classes.title} variant="h3">Shopping Cart</Typography>
                { cartIsEmpty ? <EmptyCart /> : <FilledCart />}
            </Container>
        </div>
    )
}

export default Cart;
