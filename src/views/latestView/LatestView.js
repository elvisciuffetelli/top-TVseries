import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CardItem from '../../components/cardItem';
import Typography from '@material-ui/core/Typography';
import Loader from '../../components/loader';
import urls from '../../backendApi/constUrls';
import HttpClient from '../../backendApi/httpClient/httpClient';
import { observer } from 'mobx-react';
import { action } from 'mobx';
import store from '../../store/store';
import './LatestView.css';

@observer
class LatestView extends Component {
  constructor(props) {
    super(props);

    this.store = store;
    this.state = {
      latestCards: {},
      loading: true
    };

    this.saveData = this.saveData.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.saveData();
    console.log(this.store.dataProva);
    HttpClient(urls.getDetails().LATEST)
    .then(res => {
      this.setState({
        latestCards: res,
        loading: false
      });
    })
  }

  render() {
    let imageUrl = `${urls.getDetails().IMAGE}${this.state.latestCards.backdrop_path}`;
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
          <Grid container spacing={40} justify="center">
            {
              this.state.loading ? 
                <Loader/> : 
              <Grid item xs={12} sm={10} md={6}>
                <CardItem
                  key={this.state.latestCards.id}
                  heading={this.state.latestCards.original_name || "Missing title"}
                  overView={this.state.latestCards.overview || "Missing overview"}
                  image= { imageUrl || require("../../assets/images/image-not-found.jpg")}
                  detailButton="Go to serie's detail"
                  primaryLabel="Number of episodes"
                  primaryContent={this.state.latestCards.number_of_episodes}
                  secondaryLabel="First air date"
                  secondaryContent={this.state.latestCards.first_air_date}
                  terthiaryLabel="Number of seasons"
                  terthiaryContent={this.state.latestCards.number_of_seasons}
                  handleClick={() => this.handleClick(this.state.latestCards.id)}
                />
              </Grid>
            }
          </Grid>
        </div>
      </React.Fragment>
    )
  }

  handleClick(id) {
    this.props.history.push(`/seasons/${id}`);
  }

  @action.bound
  saveData() {
    this.store.dataProva = 'prova';
  }
}

export default LatestView;
