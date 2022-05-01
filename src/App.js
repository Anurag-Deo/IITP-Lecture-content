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
import Navbar2 from './Components/Navbar2';
import Footer from './Components/Footer';
import LandingPage from './Components/Landing Page/LandingPage';
import EE102 from './Components/EE102';
import PH103 from './Components/PH103';
import PH110 from './Components/PH110';

function App() {
  return (
    <>
      <Router>
        {/* <ResponsiveAppBar /> */}
        <Navbar2 />
        <Switch>
          <Route exact path="/">
            {/* <h1 className='my-2' align="center">This is the landing page of the website</h1> */}
            <LandingPage />
          </Route>
          <Route exact path="/MA102">
            <h1 className='my-2' align="center">MA102</h1>
            <MA102 />
          </Route>
          <Route exact path="/ME102">
            <h1 className='my-2' align="center">ME102</h1>
            <ME102 />
          </Route>
          <Route exact path="/CH103">
            <h1 className='my-2' align="center">CH103</h1>
            <CH103 />
          </Route>
          <Route exact path="/EE102">
            <h1 className='my-2' align="center">EE102</h1>
            <EE102 />
          </Route>
          <Route exact path="/PH103">
            <h1 className='my-2' align="center">PH103</h1>
            <PH103 />
          </Route>
          <Route exact path="/PH110">
            <h1 className='my-2' align="center">PH110</h1>
            <PH110 />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
