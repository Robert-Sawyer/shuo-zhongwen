import React from 'react'
import classes from './HeaderNavigation.module.css'

const HeaderNavigation = props => {

    return (
        <nav className={classes.NavMenuContainer}>
            <ul className={classes.NavMenu}>
                <li className={classes.NavMenuItem}>Start</li>
                <li className={classes.NavMenuItem}>Kursy</li>
                <li className={classes.NavMenuItem}>O mnie</li>
                <li className={classes.NavMenuItem}>Blog</li>
                <li className={classes.NavMenuItem}>Kontakt</li>
                <li className={classes.LogIn}><a href="/login">Logowanie</a></li>
                <li className={classes.SignIn}>Rejestracja</li>
            </ul>
        </nav>
    )
}

export default HeaderNavigation
