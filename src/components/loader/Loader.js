import React from 'react';
import spinner from'../../assets/images/Spinner-1s-200px.gif';
import './Loader.css';

const Loader = () => (
  <div className="loader-container">
    <div className="loader-text">
      <img src={spinner} alt="loader spinner"/>
    </div>
  </div>
)

export default Loader;