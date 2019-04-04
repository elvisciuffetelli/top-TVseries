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
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Link } from 'react-router-dom'
import ListItemText from '@material-ui/core/ListItemText';
import ListIcon from '@material-ui/icons/List';
import './CustomHeader.css';

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
          <Link to="/latest" key="latest">
            <ListItem button>
              <ListItemIcon>
                {<ListIcon />}
              </ListItemIcon>
              <ListItemText primary="Latest" />
            </ListItem>
          </Link>
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