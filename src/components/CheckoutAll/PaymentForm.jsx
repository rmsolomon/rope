import React from 'react'
import { Typography, Button, Divider } from '@material-ui/core';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Review from './Review'

const stripePromise = loadStripe('...');

const StripeForm = ({ checkoutToken, backStep }) => {
    const stripe = useStripe();
    const elements = useElements();

    return (
        <form>
        <CardElement />
        <br /> <br />
        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
            <Button variant="outlined" onClick={backStep}>Back</Button>
            <Button type="submit" variant="contained" color="primary" disabled={!stripe}>
                Pay { checkoutToken.live.subtotal.formatted_with_symbol }
            </Button>
        </div>
        </form>
    )
}



const PaymentForm = ({ checkoutToken, backStep }) => {

    return (
        <>
            <Review checkoutToken={checkoutToken}/>
            <Divider />
            <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>Payment Method</Typography>
            <Elements stripe={stripePromise}>
                <StripeForm checkoutToken={checkoutToken} backStep={backStep}/>
            </Elements>
        </>
    );
}

export default PaymentForm
