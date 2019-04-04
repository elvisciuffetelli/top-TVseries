import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import CardItem from '../../components/cardItem';
import Loader from '../../components/loader';
import urls from '../../backendApi/constUrls';
import './PopularView.css';


class PopularView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popularCards: [],
      loading: true
    };
  }

  componentDidMount() {
    axios.get(urls.POPULAR)
      .then(res => {
        const popularCards = res.data.results;
        this.setState({
          popularCards,
          loading: false
        });
        console.log(this.state.popularCards)
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <Grid container spacing={40}>
        {
          this.state.loading ? 
            <Loader/> : 
          this.state.popularCards.map(card => (
          <CardItem item sm={6} md={4} lg={3}
            key={card.id}
            heading={card.original_name || "Missing title"}
            overView={card.overview || "Missing overview"}
            image={`${urls.IMAGE}${card.backdrop_path}` || "Missing image"}
          />
        ))}
      </Grid>
    )
  }
}

export default PopularView;