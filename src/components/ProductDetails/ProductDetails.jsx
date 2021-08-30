import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';

const ProductDetails = (props) => {
  const classes = useStyles();
  const [product, setProducts] = useState({});
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/'+props.prams.match.id)
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  return (
<div>
      
      <div>
        
       
            <Grid
              item
              xs={12}
              sm={3}
              style={{marginLeft:"auto", alignItems: 'center' }}
            >
              
              <h1> {product?.title}</h1>
               <img src={product?.image} />
              <h5> {product?.price}</h5>
             
         
        </Grid>
      </div>
    </div>
  );
  }
  export default ProductDetails