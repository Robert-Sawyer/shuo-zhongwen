import React from 'react'
import classes from './TopBanner.module.css'

const TopBanner = props => {

    return (
        <div className={classes.BannerContainer}>
            <h1 className={classes.Title}>{props.title}</h1>
        </div>
    )
}

export default TopBanner
