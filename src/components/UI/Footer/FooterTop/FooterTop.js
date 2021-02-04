import React from 'react'
import classes from './FooterTop.module.css'
import Logo from "../../Logo/Logo";

const FooterTop = props => {

    return (
        <div className={classes.Row}>
            <div className={classes.FirstColumnContainer}>
                <Logo/>
                <div className={classes.FirstColumnContent}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam.
                        Ipsam, nam, voluptatum
                    </p>
                </div>
                <div className={classes.SocialMediaBar}>

                </div>
            </div>

            <div className={classes.SecondColumnContainer}>
                <div className={classes.SecondColumnRow}>
                    <div className={classes.Menu}>
                        <h3>MENU</h3>
                        <ul className={classes.FooterMenu}>
                            <li>Kursy</li>
                            <li>O Mnie</li>
                            <li>Blog</li>
                            <li>Kontakt</li>
                        </ul>
                    </div>
                    <div className={classes.Contact}>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default FooterTop
