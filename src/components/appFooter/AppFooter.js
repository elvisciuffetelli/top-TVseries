import React from 'react';
import Typography from '@material-ui/core/Typography';
import './AppFooter.css';

const AppFooter = () => {
  return (
    <footer className="footer">
      <Typography variant="subheading" align="center" gutterBottom>
        Coded by Elvis Ciuffetelli
      </Typography>
      <Typography variant="subheading" align="center" gutterBottom>
        2019
      </Typography>
    </footer>
  )
}

export default AppFooter;