import React from 'react'
import classes from './CourseInfoItem.module.css'

const CourseInfoItem = props => {

    return (
        <div className={classes.Container}>
            <div className={classes.Image}>
                <img alt='' src={props.image}/>
            </div>
            <div className={classes.DetailsBox}>
                <div className={classes.InfoLine}>
                    <span>Czas trwania: {props.length}</span>
                    <span>Cena: {props.price}</span>
                </div>
                <div className={classes.LinkContainer}>
                    <a href='#'>SZCZEGÓŁY</a>
                </div>
            </div>
        </div>
    )
}

export default CourseInfoItem
