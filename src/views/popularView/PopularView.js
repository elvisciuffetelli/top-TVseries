import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import CardItem from '../../components/cardItem';
import './PopularView.css';


class PopularView extends Component {
  constructor(props) {
    super(props);

    this.state = { cards: [] };
  }

  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=2acf2189a0f548b1b5ed08bbef8dfeb3&language=en-US&page=1`)
      .then(res => {
        const cards = res.data.results;
        this.setState({ cards });
        console.log(this.state.cards)
      })
  }

  render() {
    return (
      <Grid container spacing={40}>
        {this.state.cards.map(card => (
          <CardItem item key={card.id} sm={6} md={4} lg={3}
            heading={card.original_name || "Missing info"}
            overView={card.overview || "Missing info"}
            image={`https://image.tmdb.org/t/p/w500/${card.backdrop_path}`}
          />
        ))}
      </Grid>
    )
  }
}

export default PopularView;