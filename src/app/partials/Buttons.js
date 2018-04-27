import React from 'react'
import {Link} from 'react-router-dom'

const Buttons = (props) => {
    return (
        <ul className="right hide-on-med-and-down">
            <li><Link to="/about">About</Link></li>
            <li onClick={props.fresh}><a><i className="material-icons">refresh</i></a></li>
            <li onClick={props.action}><a><i className="material-icons">{(props.grid) ? "view_list" : "view_module"}</i></a></li>
        </ul>
    )
}

export default Buttons