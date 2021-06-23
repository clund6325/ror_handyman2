import { Route, Switch } from 'react-router-dom';
import Home from './components/shared/Home';
import Workers from './components/workers/Workers';
// import Services from './components/services/Services';
import Navbar from './components/shared/Navbar';
import NoMatch from './components/shared/NoMatch'

const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/workers" component={Workers}/>
      {/* <Route exact path="/services" component={Services}/> */}
      <Route component={NoMatch}/>
    </Switch>
  </>
)
export default App;
