import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'

const App = (props) => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            {/* <Route path='/details/:id' component={Details}/> */}
        </Switch>
    )
}

export default App