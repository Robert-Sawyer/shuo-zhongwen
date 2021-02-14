import React from 'react'
import classes from './FooterTop.module.css'
import Logo from "../../Logo/Logo";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import FooterSocialMediaBar from "./FooterSocialMediaBar/FooterSocialMediaBar";
import FooterMenu from "./FooterMenu/FooterMenu";


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
                <FooterSocialMediaBar/>
            </div>

            <div className={classes.SecondColumnContainer}>
                <div className={classes.SecondColumnRow}>
                    <FooterMenu/>
                    <div className={classes.Contact}>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FooterTop
