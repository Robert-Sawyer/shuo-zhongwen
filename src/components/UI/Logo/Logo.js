import React from 'react'
import classes from './Logo.module.css'

const Logo = props => {

    return (
        <div className={classes.LogoContainer}>
            <a href='/'>
                <strong>Teacher Wang</strong>
            </a>
        </div>
    )
}

export default Logo
