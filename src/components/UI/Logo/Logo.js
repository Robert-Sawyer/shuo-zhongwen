import React from 'react'
import classes from './Logo.module.css'

const Logo = props => {

    return (
        <div className={classes.LogoContainer}>
            <a>
                <strong>Shuo Zhongwen</strong>
            </a>
        </div>
    )
}

export default Logo
