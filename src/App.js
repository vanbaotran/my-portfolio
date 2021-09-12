
import './App.css';
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import About from './components/About'
import Contact from './components/Contact';

import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div >
     <Nav />
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route path='/portfolio' component={Portfolio}/>
      <Route path='/resume' component={Resume}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>
      </Switch>
    </div>
  );
}

export default App;
