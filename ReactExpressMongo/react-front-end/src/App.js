import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from './ContactsComponents/Nav';
import ContactsList from './ContactsComponents/ContactsList';
import ContactForm from './ContactsComponents/ContactForm';
import Dashboard from './ContactsComponents/Dashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />

        <Route exact path="/" component={Dashboard}/>
        <Route path="/list" component={ContactsList}/>
        <Route path="/add" component={ContactForm}/>
        <Route path="/edit/:cid" component={ContactForm}/>
      </Router>
    );
  }
}

export default App;
