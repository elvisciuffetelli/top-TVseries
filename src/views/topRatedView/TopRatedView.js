import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CardItem from '../../components/cardItem';
import Typography from '@material-ui/core/Typography';
import Loader from '../../components/loader';
import urls from '../../backendApi/constUrls';
import HttpClient from '../../backendApi/httpClient/httpClient';
import './TopRatedView.css';


class TopRatedView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topRatedCards: [],
      loading: true
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    HttpClient(urls.TOPRATED)
      .then(res => {
        const topRatedCards = res.results;
        this.setState({
          topRatedCards,
          loading: false
        });
      })
  }

  render() {

    return (
      <React.Fragment>
        <div className="heroUnit">
          <div className="heroContent">
            <Typography component="h1" variant="display2" align="center" color="textPrimary" gutterBottom>
              Top Rated series
            </Typography>
            <Typography variant="subheading" align="center" color="textSecondary" paragraph>
              The top rated series by our users
            </Typography>
          </div>
        </div>
        <div className="cardsContainer">
          <Grid container spacing={40}>
            {
              this.state.loading ? 
                <Loader/> : 
              this.state.topRatedCards.map(card => (
              <Grid item sm={6} md={4} lg={3}>
                <CardItem item sm={6} md={4} lg={3}
                  key={card.id}
                  heading={card.original_name || "Missing title"}
                  overView={card.overview || "Missing overview"}
                  image={`${urls.IMAGE}${card.backdrop_path}` || require("../../assets/images/image-not-found.jpg")}
                  popularity={card.popularity}
                  voteAverage={card.vote_average}
                  voteCount={card.vote_count}
                  detailButton="Go to seasons detail"
                  handleClick={() => this.handleClick(card.id)}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </React.Fragment>
    )
  }

  handleClick(id) {
    this.props.history.push(`/seasons/${id}`);
  }
}

export default TopRatedView;