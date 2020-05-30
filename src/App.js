import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import NavigationBar from './Components/NavigationBar';
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
        <NavigationBar></NavigationBar>
        <Router>
          <Switch>
            <Route exact path="/" component = {Home} />
            <Route path="/home" component = {Home} />
            <Route exact path="/scheng.ca" component = {Home} />
            <Route path="/scheng.ca/home" component = {Home} />
          </Switch>
        </Router>
      </Styles>
    </React.Fragment>
  );
}

export default App;
