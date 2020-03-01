import React, { Component }from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import MilkTeaBuilder from './containers/MilkTeaBuilder/MilkTeaBuilder';
import BuildControls from './components/MilkTea/Controls/BuildControls'


function App() {
  return (
    
    <div className="App">
      
      {/* <BuildControls/> */}
      <Layout>
        <MilkTeaBuilder/>
        
      </Layout>
      
    </div>
  );
}

export default App;
