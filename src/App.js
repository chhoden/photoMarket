import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './containers/home';
import { Login } from "./containers/login";
import { SignUp } from './containers/signUp';
import { Photo } from './components/photo';
import { Upload } from './components/uploadImage';
import { ChatBox } from './components/chatBox';

class App extends Component {

  render() {
    return (
      //Defining or registering routes
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signUP" component={SignUp} />
          <Route path="/photo" component={Photo} />
          <Route path="/uploadImage" component={Upload} />
          <Route path="/chatBox" component={ChatBox} />
        </Switch>
      </Router>
    );
  }
}
export default App;

