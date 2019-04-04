import React from 'react';
import Main from './views/Main';
import AppFooter from './components/appFooter';
import CustomHeader from './components/CustomHeader';
import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <CustomHeader />
      <Main />
      <AppFooter/>
    </React.Fragment>
  )
}

export default App;