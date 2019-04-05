import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import HttpClient from '../../backendApi/httpClient/httpClient';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import './SeasonsList.css';

class SeasonsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detail: {},
      seasons: [],
      loading: true,
      open: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const seasonUrl = `https://api.themoviedb.org/3/tv/${this.props.match.params.id}?api_key=2acf2189a0f548b1b5ed08bbef8dfeb3&language=en-US`;

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
    console.log('season detail', this.state.seasons);
    console.log('serie detail', this.state.detail);
    return (
      <React.Fragment>
        <div className="heroContent">
          <Typography component="h1" variant="display2" align="center" color="textPrimary" gutterBottom>
            Seasons
          </Typography>
          <Typography variant="subheading" align="center" color="textSecondary" paragraph>
            Here's a list of all the serie's seasons
          </Typography>
        </div>
        <div className="seasons-container">
        
          {
            this.state.seasons.map(season => (
              <React.Fragment key={season.id}>
                <List component="nav" className="main-list-container">
                  <ListItem button onClick={this.handleClick}>
                    <ListItemText primary={season.name} secondary={season.overview || "No overview available"}/>
                    {this.state.open ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItem button className="nested-item">
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText inset secondary={`${season.episode_count} episodes`} />
                      </ListItem>
                    </List>
                  </Collapse>
                </List>
                <Divider />
              </React.Fragment>
          
            ))
          }
        </div>
      </React.Fragment>
    );
  }

  handleClick() {
    this.setState(state => ({ open: !state.open }));
  };

}

export default SeasonsList;