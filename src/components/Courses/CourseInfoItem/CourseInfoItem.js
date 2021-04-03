import React from 'react'
import classes from './CourseInfoItem.module.css'

const CourseInfoItem = props => {

    return (
        <div className={classes.Container}>
            <div className={classes.TopImageContainer}>
                <div className={classes.Image}>
                    <img alt='' src={props.image}/>
                    <img alt='' src={props.background}/>
                </div>
            </div>
            <div className={classes.DetailsBox}>
                <div className={classes.InfoLine}>
                    <span>Czas trwania: <strong>{props.length} min</strong></span>
                    <span>Cena: <strong>{props.price}</strong></span>
                </div>
                <div className={classes.LinkContainer}>
                    <a href='#'>SZCZEGÓŁY</a>
                </div>
            </div>
        </div>
    )
}

export default CourseInfoItem
