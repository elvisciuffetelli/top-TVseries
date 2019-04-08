import React, { Component } from 'react';
import HttpClient from '../../backendApi/httpClient/httpClient';
import Grid from '@material-ui/core/Grid';
import CardItem from '../../components/cardItem';
import Typography from '@material-ui/core/Typography';
import urls from '../../backendApi/constUrls';
import Loader from '../../components/loader';

class SeasonDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seasonDetail: {},
      episodes: [],
      loading: true
    };
  }

  componentDidMount() {
    const seasonUrl = urls.getDetails(this.props.match.params.id, this.props.match.params.number).SEASON_DETAIL;

    HttpClient(seasonUrl)
      .then(res => {
        const seasonDetail = res;
        const episodes = res.episodes;
        this.setState({
          seasonDetail,
          episodes,
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
              {this.props.match.params.name}
            </Typography>
            <Typography variant="subheading" align="center" color="textSecondary" paragraph>
              Season {this.props.match.params.number}
            </Typography>
          </div>
        </div>
        <div className="cardsContainer">
          <Grid container spacing={40}>
              {
              this.state.loading ? 
                <Loader/> : 
              this.state.episodes.map(episode => (
                <Grid item sm={6} md={4} lg={3} key={episode.id}>
                  <CardItem item sm={6} md={4} lg={3}
                    heading={episode.name || "Missing title"}
                    overView={episode.overview || "Missing overview"}
                    image={`${urls.getDetails().IMAGE}${episode.still_path}` || require("../../assets/images/image-not-found.jpg")}
                    primaryLabel="Episode number"
                    primaryContent={episode.episode_number}
                    secondaryLabel="Average vote"
                    secondaryContent={episode.vote_average}
                    terthiaryLabel="Vote count"
                    terthiaryContent={episode.vote_count}
                    isSeasonsList
                  />
                </Grid>
              ))  
              }
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

export default SeasonDetail;