import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import HttpClient from '../../backendApi/httpClient/httpClient';
import CardItem from '../../components/cardItem';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Loader from '../../components/loader';
import urls from '../../backendApi/constUrls';
import StarBorder from '@material-ui/icons/StarBorder';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import './SeasonsList.css';

class SeasonsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detail: {},
      seasons: [],
      loading: true
    };

    this.goToSeasonDetail = this.goToSeasonDetail.bind(this);
  }

  componentDidMount() {
    const seasonUrl = urls.getDetails(this.props.match.params.id).SEASON;

    HttpClient(seasonUrl)
      .then(res => {
        const detail = res;
        const seasons = res.seasons;
        this.setState({
          detail,
          seasons,
          loading: false
        }); 
      })
  }

  render() {
    let imageUrl = `${urls.getDetails().IMAGE}${this.state.detail.backdrop_path}`;
    if (!this.state.detail.backdrop_path) {
      imageUrl = false;
    }

    const {
      original_name,
      id,
      overview,
      number_of_episodes,
      first_air_date,
      number_of_seasons
    } = this.state.detail;

    return (
      <React.Fragment>
        <div className="heroContent">
          <Typography component="h1" variant="display2" align="center" color="textPrimary" gutterBottom>
            {original_name}
          </Typography>
          <Typography variant="subheading" align="center" color="textSecondary" paragraph>
            Here's a list of all the serie's seasons
          </Typography>
        </div>
        { 
          this.state.loading ? 
            <Loader/> : 
          <Grid container justify="center" className="seasonList_main-container">
            <Grid item xs={12} sm={10} md={6} className="seasonList_item">
              <CardItem
                key={id}
                heading={original_name || "Missing title"}
                overView={overview || "Missing overview"}
                image= {imageUrl || require("../../assets/images/image-not-found.jpg")}
                primaryLabel="Number of episodes"
                primaryContent={number_of_episodes}
                secondaryLabel="First air date"
                secondaryContent={first_air_date}
                terthiaryLabel="Number of seasons"
                terthiaryContent={number_of_seasons}
                isSeasonsList
              />
            </Grid>
            <Grid item xs={12} sm={10} md={6} className="seasonList_item">
              {
                this.state.seasons.map(season => (
                  <React.Fragment key={season.id}>
                    <List component="nav" className="main-list-container">
                      <ListItem>
                        <ListItemText primary={season.name} secondary={season.overview || "No overview available"}/>
                      </ListItem>
                      <ListItem className="nested-item">
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText inset secondary={`${season.episode_count} episodes`} />
                        <Button size="large" color="primary" onClick={() => this.goToSeasonDetail(this.props.match.params.id, season.season_number, this.state.detail.original_name)}>
                          Go to season's detail
                        </Button>
                      </ListItem>
                    </List>
                    <Divider />
                  </React.Fragment>
                ))
              }
            </Grid>
          </Grid>
        }
 
      </React.Fragment>
    );
  }

  goToSeasonDetail(id, number, name) {
    this.props.history.push(`/season/${id}/${number}/${name}`);
  }

}

export default SeasonsList;