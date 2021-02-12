import React from 'react'
import classes from './FooterTop.module.css'
import Logo from "../../Logo/Logo";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'


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
            </div>

            <div className={classes.SecondColumnContainer}>
                <div className={classes.SecondColumnRow}>
                    <div className={classes.Menu}>
                        <h3 className={classes.FooterMenuTitle}>MENU</h3>
                        <ul className={classes.FooterMenu}>
                            <li><a href='#'>Kursy</a></li>
                            <li><a href='#'>O Mnie</a></li>
                            <li><a href='#'>Blog</a></li>
                            <li><a href='#'>Kontakt</a></li>
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
