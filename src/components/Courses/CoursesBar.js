import React from 'react'
import CourseItem from "./CourseItem/CourseItem";
import classes from './CoursesBar.module.css'
import Img1 from '../../assets/images/hsk1.jpg'
import Img2 from '../../assets/images/hsk2.jpg'
import Img3 from '../../assets/images/hsk3.jpg'
import Img4 from '../../assets/images/hsk4.jpg'
import Img5 from '../../assets/images/hsk5.jpg'
import Img6 from '../../assets/images/hsk6.jpg'


const CoursesBar = props => {

    return (
        <div className={classes.CoursesBar}>
            <h1 className={classes.Title}>Zacznij naukę już dziś!</h1>
            <h3 className={classes.Subtitle}>Dostępne kursy:</h3>
            <div className={classes.Row}>
                <CourseItem image={Img1}/>
                <CourseItem image={Img2}/>
                <CourseItem image={Img3}/>
                <CourseItem image={Img4}/>
                <CourseItem image={Img5}/>
                <CourseItem image={Img6}/>
            </div>
        </div>
    )
}

export default CoursesBar
