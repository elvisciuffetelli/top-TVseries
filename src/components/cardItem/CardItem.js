import React from 'react';
//TODO: import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './CardItem.css'

const CardItem = (props) => {
  return (
    <Grid item sm={6} md={4} lg={3}>
      <Card className="card">
        <CardMedia
          className="cardMedia"
          image={props.image}
          title="Image title"
        />
        <CardContent className="cardContent">
          <Typography gutterBottom variant="title" component="h2">
            {props.heading}
          </Typography>
          <Typography>
            {props.overView}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            View
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default CardItem;

