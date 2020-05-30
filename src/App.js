import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {NotFound} from './Components/NotFound';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import styled from 'styled-components';

// Font of website
const Styles = styled.div`
  *{

    font-family: Segoe UI;
    
  }

`;

function App() {
  return (
    <React.Fragment>
      <Styles>
        <Header/>
        <Router>
          <Switch>
            <Route exact path="/" component = {Home} />
            <Route path="/home" component = {Home} />
            <Route exact path="/scheng.ca" component = {Home} />
            <Route path="/scheng.ca/home" component = {Home} />
            <Route component = {NotFound} />
          </Switch>
        </Router>
        <Footer/>
      </Styles>
    </React.Fragment>
  );
}

export default App;
