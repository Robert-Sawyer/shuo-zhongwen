import React from 'react'
import classes from './FooterTop.module.css'
import Logo from "../../Logo/Logo";
import FooterSocialMediaBar from "./FooterSocialMediaBar/FooterSocialMediaBar";
import FooterMenu from "./FooterMenu/FooterMenu";


const FooterTop = props => {

    return (
        <div className={classes.Row}>

            <div className={classes.FirstColumnContainer}>
                <Logo/>
                <div className={classes.FirstColumnContent}>
                    <p>
                        <i>Ucz się tak, jakbyś niczego jeszcze nie osiągnął i lękaj się, byś nie stracił tego, co już
                            osiągnąłeś.</i>
                    </p>
                    <p>Konfucjusz</p>
                    <p>
                        学习好像您还没有取得任何成就，并害怕失去已经取得的成就。
                    </p>
                </div>
                <FooterSocialMediaBar/>
            </div>

            <div className={classes.SecondColumnContainer}>
                <div className={classes.SecondColumnRow}>
                    <FooterMenu/>
                    {/*<div className={classes.Contact}>*/}
                    {/*</div>*/}
                </div>
            </div>

        </div>
    )
}

export default FooterTop
