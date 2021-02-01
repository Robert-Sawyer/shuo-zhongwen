import React from 'react'
import classes from './CourseItem.module.css'

const CourseItem = props => {

    return (
        <div className={classes.Container}>
            <a className={classes.Link} href="#">
                <img className={classes.Image} src={props.image} alt=''/>
            </a>
        </div>
    )
}

export default CourseItem
