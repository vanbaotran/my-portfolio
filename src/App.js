
import './App.css';
import React from 'react'
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import About from './components/About'
import Contact from './components/Contact';

import {Switch, Route} from 'react-router-dom'

class App extends React.Component {
  render(){
  return (
    <div >
     <Nav />
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route path='/portfolio' component={Portfolio}/>
      <Route path='/resume' component={Resume}/>
      <Route path='/about' render={()=><About />}/>
      <Route path='/contact' component={Contact}/>
      </Switch>
    </div>
  );

  }
}

export default App;
