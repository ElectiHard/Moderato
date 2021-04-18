import {BrowserRouter as Router,
  Switch,
  Route} from 'react-router-dom'
import './App.css';
import {lazy, Suspense} from 'react'
import NotFound from './Components/NotFound';
import Landing from './Components/Landing'
import SignUp from './Components/SignUp'


function App() {
  return (
    <>
    <Router>
      <Suspense fallback = {<>Loading...</>}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route component={NotFound} />
      </Switch>
      </Suspense>
    </Router>
    </>
  );
}

export default App;
