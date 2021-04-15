import React from 'react'
import {Link, Switch, Route} from "react-router-dom";
import classes from './CourseInfoItem.module.css'
import SingleCourseMainPage from "../../../pages/Courses/SingleCourseMainPage/SingleCourseMainPage";

const CourseInfoItem = ({image, background, hoursMin, hoursMax, price, link, bannerTitle}) => {

    return (
        <div className={classes.Container}>
            <div className={classes.TopImageContainer}>
                <div className={classes.Image}>
                    <img alt='' src={image}/>
                    <img alt='' src={background}/>
                </div>
            </div>
            <div className={classes.DetailsBox}>
                <div className={classes.InfoLine}>
                    <span>Szacunkowy czas nauki: <strong>{hoursMin} - {hoursMax} godz.</strong></span>
                    <span>Cena: <strong>{price}</strong></span>
                </div>
                <div>
                    {/*<Link class={classes.Link} to={"/courses/" + link}>SZCZEGÓŁY</Link>*/}
                    <Link class={classes.Link} to={link}>SZCZEGÓŁY</Link>
                    {/*<Route path={"courses/" + link}>*/}
                    {/*    <SingleCourseMainPage title={bannerTitle}/>*/}
                    {/*</Route>*/}
                </div>
            </div>
        </div>
    )
}

export default CourseInfoItem
