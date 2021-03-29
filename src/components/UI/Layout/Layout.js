import React, {useState} from 'react'
import Aux from "../../../hoc/AuxComponent/AuxComponent";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideDrawer from "../SideDrawer/SideDrawer";

const Layout = props => {
    const [visibleSideDrawer, setVisibleSideDrawer] = useState(false);

    const sideDrawerClosedHandler = () => {
        setVisibleSideDrawer(false);
    };

    const sideDrawerToggleHandler = () => {
        setVisibleSideDrawer(!visibleSideDrawer);
    };

    return (
        <Aux>
            <Header drawerToggleClicked={sideDrawerToggleHandler}/>
            <SideDrawer open={visibleSideDrawer} closed={sideDrawerClosedHandler}/>
            <main style={{marginTop: '82px'}}>{props.children}</main>
            <Footer/>
        </Aux>
    )
}

export default Layout
