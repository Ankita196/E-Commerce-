import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
   
    paddingTop: '56.25%', // 16:9
   height:"50%",
   width:"50%",
  marginLeft:"auto",
  marginRight:"auto"

    
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Products =()=> {
  const classes = useStyles();
  const [products,setProducts]=useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then((res)=>res.json())
    .then((json)=>setProducts(json))
  }, []);
  
    

  return( 
    
  <div>
    {products.map((product,index)=>(
      <div>
       <Card className={classes.root}>
      <CardHeader
       
       
        title={product.title}
       
      />
      <CardMedia
        className={classes.media}
        image={product.image}
        title={product.title}
        
      />
    
          <Typography >Price:{product.price}</Typography>
       
          
          
       
     
    </Card>
      
      </div>
    ))} </div>

  );
}

export default Products