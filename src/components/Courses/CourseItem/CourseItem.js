import React from 'react'
import {Link} from "react-router-dom";
import classes from './CourseItem.module.css'

const CourseItem = props => {

    return (
        <div className={classes.Container}>
            <Link className={classes.Link} to={props.link}>
                <img className={classes.Image} src={props.image} alt=''/>
            </Link>
        </div>
    )
}

export default CourseItem
