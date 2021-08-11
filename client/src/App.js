import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Email from './components/Email';
import Header from './components/Header';
import Password from './components/Password';
import SignUp from './components/SignUp';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Email} />
        <Route path="/posts" component={Home} />
        <Route path="/user/signin" component={Password} />
        <Route path="/user/signup" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;