import React from 'react'
import classes from "./FooterMenu.module.css";

const FooterMenu = props => {

    return (
        <div className={classes.Menu}>
            <h3 className={classes.FooterMenuTitle}>MENU</h3>
            <ul className={classes.FooterMenu}>
                <li><a href='#'>Kursy</a></li>
                <li><a href='#'>O Mnie</a></li>
                <li><a href='#'>Blog</a></li>
                <li><a href='#'>Kontakt</a></li>
            </ul>
        </div>
    )
}

export default FooterMenu
