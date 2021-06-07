import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.css';
import { Suspense, useState } from 'react'
import NotFound from './Components/NotFound';
import Landing from './Components/Landing';
import SignUp from './Components/SignUp';
import Creator from './Components/Creator'
import Listing from './Components/Listing'
import { AuthContext } from "./Context/authContext";


function App() {
  const [token, setToken] = useState("");

  return (
    <>
      <Router>
        <AuthContext.Provider value={{ token, setToken }}>
          <Suspense fallback={<>Loading...</>}>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/SignUp" component={SignUp} />
              <Route exact path="/Creator" component={Creator} />
              <Route exact path="/Listing" component={Listing} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </AuthContext.Provider>
      </Router>
    </>
  );
}

export default App;