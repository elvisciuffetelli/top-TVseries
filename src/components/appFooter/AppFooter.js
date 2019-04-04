import React from 'react';
import Typography from '@material-ui/core/Typography';
import './AppFooter.css';

const AppFooter = () => {
  return (
    <footer className="footer">
      <Typography variant="subheading" align="center" gutterBottom>
        Copyright
      </Typography>
      <Typography variant="caption" align="center" color="textSecondary" component="p">
        Aesys @2019
      </Typography>
    </footer>
  )
}

export default AppFooter;