import React from 'react'
import Aux from "../../../hoc/AuxComponent/AuxComponent";
import Logo from "../Logo/Logo";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
import HamburgerButton from "./HamburgerButton/HamburgerButton";

const SideDrawer = props => {

    let attachedClass = []

    return (
        <Aux>
            <div>
                <HamburgerButton/>
                <Logo/>
                <nav>
                    <HeaderNavigation/>
                </nav>
            </div>
        </Aux>
    )
}

export default SideDrawer
