import React, { Component } from 'react';
//TODO: import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import PopularView from '../popularView';

import './Home.css';


class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="heroUnit">
          <div className="heroContent">
            <Typography component="h1" variant="display2" align="center" color="textPrimary" gutterBottom>
              Serie TV
            </Typography>
            <Typography variant="subheading" align="center" color="textSecondary" paragraph>
              Subtitle
            </Typography>
          </div>
        </div>
        
        <div className="cardsContainer">
          <PopularView/>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;