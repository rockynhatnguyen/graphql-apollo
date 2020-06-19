import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Launches from './components/Launches';
import Launch from './components/Launch';
import './App.css';
import './bootstrap.min.css';
import logo from './logo-icon.png';

// Developer Environment
// const client = new ApolloClient({
//   uri: 'http://localhost:5000/graphql'
// })

const client = new ApolloClient({
  uri: '/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App container">
          <img src={logo} alt="SpaceX icon logo." style={{width: 200, display: 'block', margin: 'auto' }} />
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
