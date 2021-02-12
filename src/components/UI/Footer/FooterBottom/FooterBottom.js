import React from 'react'
import classes from './FooterBottom.module.css'

const FooterBottom = props => {

    return (
        <div className={classes.Container}>
            <div>
                <div>
                    <p>Copyright © 2021 Teacher Wang | <a>Polityka prywatności</a></p>
                </div>
            </div>
        </div>
    )
}

export default FooterBottom
