import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Home } from './containers/home';
import { Login } from "./containers/login";
import { SignUp } from './containers/signUp';
import { Photo } from './components/photo';
import { Upload } from './components/uploadImage';
import { ChatBox } from './components/chatBox';
import { Hello } from './components/hello';
import { useState } from 'react';
import { Profile } from './containers/profile';
// import { UserProvider } from './contexts/UserContext';

export const UserContext = React.createContext();

const App = () => {
  const [user, setUser] = useState(null);
  return (
    //Defining or registering routes
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/signUP" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/photo" component={Photo} />
          <Route path="/profile" component={Profile} />
          <Route path="/uploadImage" component={Upload} />
          <Route path="/chatBox" component={ChatBox} />
          <Route path="/hello" component={Hello} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}
export default App;

