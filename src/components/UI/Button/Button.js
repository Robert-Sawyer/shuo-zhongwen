import React from 'react'
import classes from './Button.module.css'
import {Link} from "react-router-dom";

const Button = props => {

    return (
        <Link className={classes.Link} to={props.link}>{props.children}</Link>
    )
}

export default Button
