import React from 'react'
import classes from './Footer.module.css'
import FooterTop from "./FooterTop/FooterTop";
import FooterBottom from "./FooterBottom/FooterBottom";

const Footer = props => {

    return (
        <footer className={classes.Footer}>
            <div className={classes.Container}>
                <FooterTop/>
                <FooterBottom/>
            </div>
        </footer>
    )
}

export default Footer
