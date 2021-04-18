import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import NotFound from './Components/NotFound';
import Landing from './Components/Landing'
  
  
  function App() {
    return (
      <>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      </>
    );
  }
  
export default App;