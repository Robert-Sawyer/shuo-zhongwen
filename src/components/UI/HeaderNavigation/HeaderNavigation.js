import React from 'react'
import classes from './HeaderNavigation.module.css'

const HeaderNavigation = props => {

    return (
        <nav className={classes.NavMenuContainer}>
            <ul className={classes.NavMenu}>
                <li className={classes.NavMenuItem}><a href='/'>Start</a></li>
                <li className={classes.NavMenuItem}><a href='#'>Kursy</a></li>
                <li className={classes.NavMenuItem}><a href='#'>O mnie</a></li>
                <li className={classes.NavMenuItem}><a href='#'>Blog</a></li>
                <li className={classes.NavMenuItem}><a href='#'>Kontakt</a></li>
                <li className={classes.LogIn}><a href="/login">Logowanie</a></li>
                <li className={classes.SignUp}><a href="/signup">Rejestracja</a></li>
            </ul>
        </nav>
    )
}

export default HeaderNavigation
