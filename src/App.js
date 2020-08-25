import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import LevelOne from './pages/LevelOne';
import LevelTwo from './pages/LevelTwo';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
      <Route path="/level2" >
          <LevelTwo />
        </Route>
        <Route path="/" >
          <LevelOne />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
