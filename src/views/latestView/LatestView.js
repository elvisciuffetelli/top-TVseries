import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import CardItem from '../../components/cardItem';
import Typography from '@material-ui/core/Typography';
import Loader from '../../components/loader';
import urls from '../../backendApi/constUrls';
import './LatestView.css';

class LatestView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latestCards: {},
      loading: true
    };
  }

  componentDidMount() {
    axios.get(urls.LATEST)
      .then(res => {
        const latestCards = res.data;
        this.setState({
          latestCards,
          loading: false
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let imageUrl = `${urls.IMAGE}${this.state.latestCards.backdrop_path}`;
    if (!this.state.latestCards.backdrop_path) {
      imageUrl = false;
    }

    return (
      <React.Fragment>
        <div className="heroUnit">
          <div className="heroContent">
            <Typography component="h1" variant="display2" align="center" color="textPrimary" gutterBottom>
              Latest
            </Typography>
            <Typography variant="subheading" align="center" color="textSecondary" paragraph>
              The latest serie added to the database
            </Typography>
          </div>
        </div>
        <div className="cardsContainer">
          <Grid container spacing={40}>
            {
              this.state.loading ? 
                <Loader/> : 
              <CardItem item sm={6} md={4} lg={3}
                key={this.state.latestCards.id}
                heading={this.state.latestCards.original_name || "Missing title"}
                overView={this.state.latestCards.overview || "Missing overview"}
                image= { imageUrl || require("../../assets/images/image-not-found.jpg")}
                detailButton="Go to serie's detail"
              />
            }
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

export default LatestView;
