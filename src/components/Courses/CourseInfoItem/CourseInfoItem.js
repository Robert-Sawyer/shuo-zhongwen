import React from 'react'
import classes from './CourseInfoItem.module.css'

const CourseInfoItem = ({image, background, hoursMin, hoursMax, price}) => {

    return (
        <div className={classes.Container}>
            <div className={classes.TopImageContainer}>
                <div className={classes.Image}>
                    <img alt='' src={image}/>
                    <img alt='' src={background}/>
                </div>
            </div>
            <div className={classes.DetailsBox}>
                <div className={classes.InfoLine}>
                    <span>Szacunkowy czas nauki: <strong>{hoursMin} - {hoursMax} godz.</strong></span>
                    <span>Cena: <strong>{price}</strong></span>
                </div>
                <div className={classes.LinkContainer}>
                    <a href='#'>SZCZEGÓŁY</a>
                </div>
            </div>
        </div>
    )
}

export default CourseInfoItem
