import React from 'react'
import classes from './CoursesPageContent.module.css'
import Aux from "../../hoc/AuxComponent/AuxComponent";
import TopBanner from "../../components/UI/TopBanner/TopBanner";
import CourseInfoItem from "../../components/Courses/CourseInfoItem/CourseInfoItem";
import Hsk1 from '../../assets/images/hsk1.jpg'
import Hsk2 from '../../assets/images/hsk2.jpg'
import Hsk3 from '../../assets/images/hsk3.jpg'
import Hsk4 from '../../assets/images/hsk4.jpg'
import Hsk5 from '../../assets/images/hsk5.jpg'
import Hsk6 from '../../assets/images/hsk6.jpg'
import Background1 from '../../assets/images/hsk1image.jpg'
import Background2 from '../../assets/images/hsk2image.jpg'
import Background3 from '../../assets/images/hsk3image.jpg'
import Background4 from '../../assets/images/hsk4image.jpg'
import Background5 from '../../assets/images/hsk5image.jpg'
import Background6 from '../../assets/images/hsk6image.jpg'

const CoursesPageContent = props => {

    return (
        <Aux>
            <TopBanner title='Kursy'/>
            <div className={classes.Container}>
                <CourseInfoItem price='DARMOWY' image={Hsk1} background={Background1} length={120}/>
                <CourseInfoItem price='30 zł' image={Hsk2} background={Background2} length={250}/>
                <CourseInfoItem price='60 zł' image={Hsk3} background={Background3} length={350}/>
                <CourseInfoItem price='90 zł' image={Hsk4} background={Background4} length={450}/>
                <CourseInfoItem price='120 zł' image={Hsk5} background={Background5} length={550}/>
                <CourseInfoItem price='150 zł' image={Hsk6} background={Background6} length={650}/>
            </div>
        </Aux>
    )
}

export default CoursesPageContent
