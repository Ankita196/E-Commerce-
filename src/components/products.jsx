import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

import Product from './Products/product';
const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    margin: '40px auto',
    alignItems: 'center',
    width: 400
  },
  input: {
    marginLeft: theme.spacing(5),
    flex: 1,
    width: 150
  },
  iconButton: {
    padding: 10
  },
  heading: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#ad1457',

    justifyContent: 'center',
    fontFamily: ['Comic Sans MS', 'Comic Sans']
    // backgroundColor: 'rgb(4, 5, 12)'
  },
  roots: {
    display: 'flex',
    justifyContent: 'center',

    '& > <ArrowRightIcon style={{fontSize:20}} />': {
      margin: theme.spacing(2)
    }
  }
}));

const Products = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  return (
    <div>
      <div>
        <Grid container spacing={7}>
          {products.map((product, index) => (
            <Grid
              item
              xs={12}
              sm={3}
              style={{ marginLeft: 'auto', alignItems: 'center' }}
            >
              <Product
                title={product.title}
                image={product.image}
                price={product.price}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Products;
