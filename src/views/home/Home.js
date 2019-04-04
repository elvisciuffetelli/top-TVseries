import React, { Component } from 'react';
//TODO: import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Menu from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PopularView from '../popularView';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListIcon from '@material-ui/icons/List';
import './Home.css';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};


class Home extends Component {
  state = {
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;
    const sideList = (
      <div className={classes.list}>
        <List>
          {['Latest', 'Popular', 'Top Rated'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{<ListIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <React.Fragment>
        <AppBar position="static" className="appBar">
          <Toolbar>
            <Menu className="icon" onClick={this.toggleDrawer('right', true)}/>
            <Typography variant="subheading" color="inherit" noWrap>
              Top TV Series 
            </Typography>
          </Toolbar>
        </AppBar>

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
          <PopularView />
        </div>

        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </React.Fragment>
    );
  }
}


export default withStyles(styles)(Home);