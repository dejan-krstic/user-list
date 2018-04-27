import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Buttons from './Buttons'

const Header = props => (
    <nav>
        <div className="nav-wrapper container">
            <a className="brand-logo center" href="/">BIT Persons</a>
            <Switch>
                <Route exact path='/' render={() => (<Buttons fresh={props.fresh} grid={props.grid} action={props.action}/>)}/>
            </Switch>

        </div>
    </nav>
)

export default Header;