import React from 'react'
import classes from './CoursesPageContent.module.css'
import Aux from "../../hoc/AuxComponent/AuxComponent";
import TopBanner from "../../components/UI/TopBanner/TopBanner";
import CourseInfoItem from "../../components/Courses/CourseInfoItem/CourseInfoItem";
import Img from '../../assets/images/hsk1.jpg'
import Img2 from '../../assets/images/hsk2.jpg'
import Image from '../../assets/images/hsk1image.jpg'
import Image2 from '../../assets/images/hsk2image.jpg'

const CoursesPageContent = props => {

    return (
        <Aux>
            <TopBanner title='Kursy'/>
            <div className={classes.Container}>
                <CourseInfoItem price='DARMOWY' image={Img} background={Image} length={120}/>
                <CourseInfoItem price='30 zł' image={Img2} background={Image2} length={250}/>
            </div>
        </Aux>
    )
}

export default CoursesPageContent
