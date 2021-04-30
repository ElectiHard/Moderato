import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.css';
import { Suspense } from 'react'
import NotFound from './Components/NotFound';
import Landing from './Components/Landing';
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn'
import Creator from './Components/Creator'


function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<>Loading...</>}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/LogIn" component={LogIn} />
            <Route exact path="/Creator" component={Creator} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
