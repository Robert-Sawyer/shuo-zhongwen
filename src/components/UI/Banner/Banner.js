import React from 'react'
import classes from './Banner.module.css'

const Banner = props => {

    return (
        <div className={classes.Baner}>
            <div className={classes.Container}>
                <div className={classes.Row}>
                    <div className={classes.TitleContainer}>
                        <h1 className={classes.Title}>Teacher Wang</h1>
                        <p className={classes.Paragraph}>
                            Rozwijaj umiejętności dzięki kursom, certyfikatom i stopniom online ze światowej klasy
                            uniwersytetów i firm
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Banner
