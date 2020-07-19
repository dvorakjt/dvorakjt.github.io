import React from 'react';
import logo from './logo.svg';
import './App.css';
import Project from './Components/Project/Project';
import * as data from './Data/projects.json'
import Homepage from './Pages/Homepage/Homepage';
import AllProjectsPage from './Pages/AllProjects/AllProjectsPage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const projects = data.default.projects;

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Homepage projects={projects} />
          </Route>
          <Route exact path="/portfolio">
            <AllProjectsPage projects={projects} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
