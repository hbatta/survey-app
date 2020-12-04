import React, { Suspense, Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import StudentList from './StudentList';
import StudentSearch from './StudentSearch';
import NavBar from './NavBar';
import StudentForm from './StudentForm';
import StudentFormAck from './StudentFormAck';
import StudentDetail from './StudentDetail';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Router>
          <Suspense fallback={<div>Loading...</div>} >
            <Switch>
              <Route exact path="/">
                <StudentForm />
              </Route>
              <Route exact path="/ack">
                <StudentFormAck />
              </Route>
              <Route exact path="/search" >
                <StudentSearch />
              </Route>
              <Route exact path="/list" >
                <StudentList />
              </Route>
              <Route exact path="/detail" >
                <StudentDetail />
              </Route>
            </Switch>
          </Suspense>
        </Router>
      </React.Fragment>
    )
  }
}
