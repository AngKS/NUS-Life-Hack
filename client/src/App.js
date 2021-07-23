import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './components/pages/Home'
import Courses from './components/pages/Courses';
import Community from './components/pages/Community';
import Login from './components/pages/Login';
import Pricing from './components/pages/Pricing';
// import Profile from './components/pages/Profile'
// import GetStarted from './components/pages/GetStarted';
// import Course from './components/pages/Course';


function App() {


  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/courses" exact component={Courses} />
          <Route path="/community" exact component={Community} />
          <Route path="/pricing" exact component={Pricing} />
          <Route path="/login" exact component={Login} />
          {/* <Route path="/pricing" exact component={Pricing} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
