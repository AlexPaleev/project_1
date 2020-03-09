import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ProjectList } from './components/project/project-list'
import './App.css';
import { LoginForm } from './components/project/login-form';
import { RegisterForm } from './components/project/register-form';


class App extends React.Component {
  render() {
    return (
        <Router>
          <div>
            {/* <nav>
              <ul>
                <li>
                  <Link to="/login">LoginForm</Link>
                </li>
                <li>
                  <Link to="/register">RegisterForm</Link>
                </li>
                <li>
                  <Link to="/project">ProjectList</Link>
                </li>
              </ul>
            </nav> */}

            <Switch>
              <Route path="/register">
                <RegisterForm />
              </Route>
              <Route path="/project">
                <ProjectList  />
              </Route>
              <Route path="/">
                <LoginForm model />
              </Route>
            </Switch>
          </div>
        </Router>
      )
    }

    // function LoginForm() {
    //   return <h2>LoginForm</h2>;
    // }

    // function RegisterForm() {
    //   return <h2>RegisterForm</h2>;
    // }

    // function ProjectList() {
    //   return <h2>ProjectList</h2>;
    // }    
}

export default App;
