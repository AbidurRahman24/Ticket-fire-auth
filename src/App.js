import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Home/Navbar/Navbar";
import Login from "./components/LogIn/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Shipment from "./components/Shipment/Shipment";

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className='container'>
       <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/home'>
            <Home/>
          </Route>
          <PrivateRoute path='/shipment'>
            <Shipment/>
          </PrivateRoute>
          <Route path='/login'>
            <Login/>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
