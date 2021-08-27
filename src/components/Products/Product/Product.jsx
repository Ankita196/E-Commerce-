import React from 'react';
import Card from  '@material-ui/core/Card'
import  CarddMedia from  '@material-ui/core/CarddMedia'
import  CardContent from  '@material-ui/core/CardContent'
import  CardActions from  '@material-ui/core/CardActions'
import   Typography from  '@material-ui/core/Typography'
import  IconButton from  '@material-ui/core/IconButton' 
import { AddShoppingCart } from '@material-ui/icons';
import { makeStyles } from './styles';

const Product = ({ product }) => {
  const classes =  makeStyles();
  return (
    <Card className={classes.root}>
      <CarddMedia className={classes.media} image="" title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography varient="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography varient="h5">{product.price}</Typography>
        </div>
        <Typography varient="h2" color="textSecondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add-to-card">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default Product;
