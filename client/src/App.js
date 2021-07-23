import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './components/pages/Home'
// import Profile from './components/pages/Profile'
// import GetStarted from './components/pages/GetStarted';
// import Course from './components/pages/Course';


function App() {


  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/getStarted" exact component={GetStarted} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/course" exact component={Course} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
