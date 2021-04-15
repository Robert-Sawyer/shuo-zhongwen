import React from 'react'
import classes from './SingleCourseMainPage.module.css'
import TopBanner from "../../../components/UI/TopBanner/TopBanner";
import Background1 from '../../../assets/images/hsk1image.jpg'
import {Link} from "react-router-dom";

const SingleCourseMainPage = props => {

    return (
        <>
            <TopBanner title={props.title}/>
            <section className={classes.Page}>
                <div className={classes.Container}>
                    <div className={classes.ImgContainer}>
                        <img alt='' src={Background1}/>
                    </div>
                    <div className={classes.InfoContainer}>
                        <h3>Szczegóły</h3>
                        <p>Czas nauki: <strong>2-3 godziny</strong></p>
                        <p>Ilość lekcji: <strong>12</strong></p>
                        <p>Dodatkowe materiały do pobrania: <strong>5</strong></p>
                        <p>Ile nowych słów poznam? <strong>150</strong></p>
                        <p>Lista tematów -> <a href='#'>pokaż</a></p>
                        <div className={classes.ButtonContainer}>
                            <Link class={classes.Link} to='#'>ZACZYNAM</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleCourseMainPage
