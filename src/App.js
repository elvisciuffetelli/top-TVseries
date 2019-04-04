import React from 'react';
import Home from './views/home';
import AppFooter from './components/appFooter';
import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <Home />
      <AppFooter/>
    </React.Fragment>
  )
}

export default App;