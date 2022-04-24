import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './Components/Navbar';
import MA102 from './Components/MA102';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ME102 from './Components/ME102';
import CH103 from './Components/CH103';

function App() {
  return (
    <>
      <Router>
        <ResponsiveAppBar />
        <Switch>
          <Route exact path="/MA102">
            <h1 align="center">MA102</h1>
            <MA102 />
          </Route>
          <Route exact path="/ME102">
            <h1 align="center">ME102</h1>
            <ME102 />
          </Route>
          <Route exact path="/CH103">
            <CH103 />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
