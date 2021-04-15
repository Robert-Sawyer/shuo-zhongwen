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
                <CourseInfoItem price='DARMOWY' image={Hsk1} background={Background1} hoursMin={3} hoursMax={4}
                                link='hsk1' bannerTitle='hsk1'/>
                <CourseInfoItem price='30 zł' image={Hsk2} background={Background2} hoursMin={6} hoursMax={8}
                                link='hsk2' bannerTitle='hsk2'/>
                <CourseInfoItem price='60 zł' image={Hsk3} background={Background3} hoursMin={12} hoursMax={15}
                                link='hsk3' bannerTitle='hsk3'/>
                <CourseInfoItem price='90 zł' image={Hsk4} background={Background4} hoursMin={22} hoursMax={30}
                                link='hsk4' bannerTitle='hsk4'/>
                <CourseInfoItem price='120 zł' image={Hsk5} background={Background5} hoursMin={60} hoursMax={72}
                                link='hsk5' bannerTitle='hsk5'/>
                <CourseInfoItem price='150 zł' image={Hsk6} background={Background6} hoursMin={100} hoursMax={120}
                                link='hsk6' bannerTitle='hsk6'/>
            </div>
        </Aux>
    )
}

export default CoursesPageContent
