import React from 'react'
import classes from './SingleCourseMainPage.module.css'
import TopBanner from "../../../components/UI/TopBanner/TopBanner";

const SingleCourseMainPage = props => {

    return (
        <>
            <TopBanner title="HSK 1"/>
            <section className={classes.Page}>
                <div className={classes.Container}>
                    <div className={classes.ImgContainer}>
                        <img alt=''/>
                    </div>
                    <div className={classes.InfoContainer}>
                        Info
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleCourseMainPage
