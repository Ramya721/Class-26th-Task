import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import StudentList from './components/StudentList';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/students">Students</Link>
          </li>
          <li>
            <Link to="/teachers">Teachers</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/students">
          <StudentList />
        </Route>
        {/* Add routes for teachers */}
        {/* <Route path="/teachers">...</Route> */}
        <Route path="/">
          <h1>Welcome to Student-Teacher Management App</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
