import React from 'react'
import classes from './SideDrawer.module.css'
import Aux from "../../../hoc/AuxComponent/AuxComponent";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
import Backdrop from "../Backdrop/Backdrop";

const SideDrawer = props => {

    let attachedClasses = [classes.SideDrawer, classes.Close]
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <div className={classes.ClosingButton}>
                    <span></span>
                    <span></span>
                </div>
                <HeaderNavigation/>
            </div>
        </Aux>
    )
}

export default SideDrawer
