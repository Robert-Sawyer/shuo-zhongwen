import React from 'react'
import classes from './Banner.module.css'

const Banner = props => {

    return (
        <div className={classes.Banner}>
            <div className={classes.FirstColumn}>
                <div className={classes.TitleContainer}>
                    <h1 className={classes.Title}>Teacher Wang</h1>
                    <p className={classes.Paragraph}>
                        Rozwijaj umiejętności dzięki kursom, certyfikatom i stopniom online ze światowej klasy
                        uniwersytetów i firm
                    </p>
                </div>
            </div>
            <div className={classes.SecondColumn}>
            </div>
        </div>
    )

}

export default Banner
