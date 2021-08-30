import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
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
  maxWidth:200,
  maxHeight:200 ,
  paddingTop:"100%",
  marginLeft:"auto",
  marginRight:"auto"
  },
 }));

const Product = ({ title, image, price}) => {
  const classes = useStyles();
 

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          
          title={title}
         
        />
        <CardMedia className={classes.media} image={image} title={title} />
        <CardContent>
          <Typography style={{marginBottom:0}}>
            Price:{price}
          </Typography>
          <button >Add To Cart</button >
          <button >Description</button >
        </CardContent>
        
       
      </Card>
    </div>
  );
};

export default Product;