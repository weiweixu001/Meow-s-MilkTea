import React, { Component }from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import MilkTeaBuilder from './containers/MilkTeaBuilder/MilkTeaBuilder';

function App() {
  return (
    <div className="App">
      <Layout>
        <MilkTeaBuilder/>
      </Layout>
    </div>
  );
}

export default App;
