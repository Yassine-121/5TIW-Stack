import React from 'react';
import ReactDOM from 'react-dom';
import LOGO from '../static/Logo.jpg';

const Index = () => {
  return <div className='container'>YassineAMG
  	<img src={LOGO} alt="Logo" />
  </div>;
};
ReactDOM.render(<Index />, document.getElementById('root'));