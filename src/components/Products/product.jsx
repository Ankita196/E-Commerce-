import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
    height: 500
  },
  media: {
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingTop: 30
  }
}));

const Product = ({ title, image, price }) => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <Link to={`/product/${id}`}>
          <img
            src={image}
            style={{ height: '50%', width: '50%', display: 'block' }}
            className={classes.media}
          />{' '}
        </Link>
        {/* <CardMedia className={classes.media} image={image} title={title} /> */}
        <CardContent>
          <Grid style={{ height: 90 }}>
            <Typography style={{ textAlign: 'center' }}>{title}</Typography>
          </Grid>

          <Typography style={{ textAlign: 'center' }}>RS: {price}</Typography>
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
        </CardContent>
      </Card>
    </div>
  );
};

export default Product;
