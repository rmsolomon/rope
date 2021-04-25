import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import Alert from "@material-ui/lab/Alert";

import useStyles from "./styles";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.media.source}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h6" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h6">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.CardActions}>
        {product.inventory.available ? (
          <IconButton
            aria-label="Add to Cart"
            onClick={() => onAddToCart(product.id, 1)}
            disabled={!product.inventory.available}
          >
            <AddShoppingCart />
          </IconButton>
        ) : null}
        {!product.inventory.available ? (
          <Alert className={classes.alert} severity="warning">
            Out of Stock.
          </Alert>
        ) : null}
      </CardActions>
    </Card>
  );
};

export default Product;
