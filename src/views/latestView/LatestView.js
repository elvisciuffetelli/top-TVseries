import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import CardItem from '../../components/cardItem';
import './LatestView.css';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

class LatestView extends Component {
  constructor(props) {
    super(props);

    this.state = { cards: [] };
  }

  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/tv/latest?api_key=2acf2189a0f548b1b5ed08bbef8dfeb3&language=en-US`)
      .then(res => {
        const cards = res.data;
        this.setState({ cards });
      })
  }

  render() {
    return (
      <Grid container spacing={40}>
        {cards.map(card => (
          <CardItem item key={card} sm={6} md={4} lg={3}
            heading="Titolo"
          />
        ))}
      </Grid>
    )
  }
}

export default LatestView;
