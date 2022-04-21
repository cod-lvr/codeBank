import React from 'react';

import Layout from './components/ui/Layout';
import Hero from './components/Hero';
import Register from './components/Register';
import Follow from './components/Follow';


import './styles/App.css';


const App = props => {
  return (
    <Layout>
        <Hero />
        <Register />
        <Follow />
    </Layout> 
  );
}

export default App;
