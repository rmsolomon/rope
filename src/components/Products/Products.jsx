import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
    {id: 1, name: 'Rope', description: 'Rope', price: '$10', image: 'https://images-na.ssl-images-amazon.com/images/I/51h5W59PByL._AC_.jpg' },
    {id: 2, name: 'Climbing Rope', description: 'Climbing Rope', price: '$15', image: 'https://images-na.ssl-images-amazon.com/images/I/81eLN879zDL._AC_SL1500_.jpg' },
];

const Products = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing="4">
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                  </Grid>  
            ))}
        </Grid>
    </main>
    );
}

export default Products;