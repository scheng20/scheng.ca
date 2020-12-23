import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {NotFound} from './Components/NotFound';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AllProjects from './Components/AllProjects'

function App() {
  return (
    <React.Fragment>
        <Header/>
        <Router>
          <Switch>
            <Route exact path="/" component = {Home} />
            <Route path="/home" component = {Home} />
            <Route exact path="/scheng.ca" component = {Home} />
            <Route path="/scheng.ca/home" component = {Home} />
            <Route path="/allprojects" component = {AllProjects} />
            <Route component = {NotFound} />
          </Switch>
        </Router>
        <Footer/>
    </React.Fragment>
  );
}

export default App;
