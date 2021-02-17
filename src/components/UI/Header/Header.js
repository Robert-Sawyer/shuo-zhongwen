import React from 'react'
import classes from './Header.module.css'
import Logo from "../Logo/Logo";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
import HamburgerButton from "../SideDrawer/HamburgerButton/HamburgerButton";

const Header = props => {

    return (
        <header className={classes.Header}>
            <div className={classes.Container}>
                <div className={classes.Row}>
                    <div className={classes.ColLeft}>
                        <Logo/>
                    </div>
                    <div className={classes.ColRight}>
                        <HeaderNavigation/>
                    </div>
                    <HamburgerButton clicked={props.drawerToggleClicked} />
                </div>
            </div>
        </header>
    )
}

export default Header
