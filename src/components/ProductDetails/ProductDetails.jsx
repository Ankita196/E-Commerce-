import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Product from './Products/product';
const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',

    margin: '40px auto',
    alignItems: 'center',
    width: 300,
    height: 400
  },
  input: {
    marginLeft: theme.spacing(5),
    flex: 1,
    width: 150
  },
  iconButton: {
    padding: 10
  },

  media: {
    marginRight: 'auto',
    marginLeft: 'auto'
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

const ProductDetails = props => {
  console.log(props);
  const classes = useStyles();
  const [product, setProducts] = useState([]);
  const id = props.match.params.id;
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  return (
    <div>
      <Card className={classes.root}>
      <Grid
              item
              xs={12}
              sm={3}
              style={{ marginLeft: 'auto', alignItems: 'center' }}
            >
              <div>
               
                  <Link to={`/products/${product.id}`}>
                    <img
                      src={product.image}
                      style={{ height: '50%', width: '50%', display: 'block' }}
                      className={classes.media}
                    />
                  </Link>
                  {/* <CardMedia className={classes.media} image={image} title={title} /> */}
                  <CardContent>
                    <Grid style={{ height: 90 }}>
                      <Typography style={{ textAlign: 'center' }}>
                        {product.title}
                      </Typography>
                    </Grid>

                    <Typography style={{ textAlign: 'center' }}>
                      RS: {product.price}
                    </Typography> <Link to={`/cart/${product.id}`}>
                    <Button
                      variant="contained"
                      color="secondary"
                      style={{
                        display: 'block',
                        marginRight: 'auto',
                        marginLeft: 'auto'
                      }}
                    >
                      ADD TO CART
                    </Button>
                    </Link>
                  </CardContent>
                
             
             </div>
             </Grid>
             </Card>
             </div>
  );
};

export default ProductDetails;
