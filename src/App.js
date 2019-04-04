import React from 'react';
import Home from './views/home';
import AppFooter from './components/appFooter';
import CustomHeader from './components/CustomHeader';
import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <CustomHeader />
      <Home />
      <AppFooter/>
    </React.Fragment>
  )
}

export default App;