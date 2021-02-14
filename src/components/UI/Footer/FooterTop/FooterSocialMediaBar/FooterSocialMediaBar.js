import React from 'react'
import classes from "./FooterSocialMediaBar.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const FooterSocialMediaBar = props => {

    return (
        <div>
            <ul className={classes.SocialMediaBar}>
                <li className={classes.SocialMediaBarItem}>
                    <a href='https://www.facebook.com/' className={classes.Link}>
                        <FontAwesomeIcon icon={faFacebook} className={classes.IconFb}/>
                    </a>
                </li>
                <li className={classes.SocialMediaBarItem}>
                    <a href='https://www.instagram.com' className={classes.Link}>
                        <FontAwesomeIcon icon={faInstagram} className={classes.IconInsta}/>
                    </a>
                </li>
                <li className={classes.SocialMediaBarItem}>
                    <a href='https://www.linkedin.com' className={classes.Link}>
                        <FontAwesomeIcon icon={faLinkedin} className={classes.IconLinkedin}/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default FooterSocialMediaBar
