import React from 'react';
import Grid from '@material-ui/core/Grid';

const products = [
  { id: 1, name: 'shoue', discription: 'running shoes' },
  { id: 2, name: 'book', discription: 'soft book' }
];

const Products = () => {
  return <Grid container justify="center" spacing={4} >

    {products.map((product)=>(
      <Grid item key ={product.id} xs={12} sm={6} md={4} lg={3}>
        <Product /> </Grid>
    ))}
    </Grid>;
};

export default Products;
