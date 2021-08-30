import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
    height:500
  },
  media: {
  marginRight:"auto",
  marginLeft:"auto",
    paddingTop:30
  },
 }));

const Product = ({ title, image, price}) => {
  const classes = useStyles();
 

  return (
    <div>
      <Card className={classes.root}>
       
     <img src={image} style={{height:"50%",width:"50%",display:"block"}} className={classes.media}/>
        {/* <CardMedia className={classes.media} image={image} title={title} /> */}
        <CardContent>
          <Grid style={{height:70}}>
        <Typography style={{ textAlign: 'center',}}>{title}</Typography>
        </Grid>
        <Typography style={{paddingLeft:30,paddingRight:"auto"}}>RS: {price}</Typography>
          <button >Add To Cart</button >
          <button >Description</button >
        </CardContent>
        
       
      </Card>
    </div>
  );
};

export default Product;