import React, { Component } from 'react';
//TODO: import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Menu from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { withRouter } from 'react-router'
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


class CustomHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      right: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  
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
          <Link to="/" key="popular">
            <ListItem button>
              <ListItemIcon>
                {<ListIcon />}
              </ListItemIcon>
              <ListItemText primary="Popular" />
            </ListItem>
          </Link>
          <Link to="/toprated" key="toprated">
            <ListItem button>
              <ListItemIcon>
                {<ListIcon />}
              </ListItemIcon>
              <ListItemText primary="Top Rated" />
            </ListItem>
          </Link>
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
          <Toolbar className="menu-container">
            <HomeIcon className="home-icon" onClick={this.handleClick}/>
            <Typography variant="subheading" color="inherit" noWrap>
              Top TV Series - by The Movie Database API
            </Typography>
            <Menu className="icon" onClick={this.toggleDrawer('right', true)}/>
          </Toolbar>
        </AppBar>
        <Button size="small" color="primary" onClick={() => this.props.history.goBack()}>
          BACK
        </Button>

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

  handleClick() {
    this.props.history.push('/');
  }
}


export default withRouter(withStyles(styles)(CustomHeader));