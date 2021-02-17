import React from 'react'
import Banner from "../UI/Banner/Banner";
import CoursesBar from "../Courses/CoursesBar";
import TestimonialsSection from "../Testimonials/TestimonialsSection";
import Aux from "../../hoc/AuxComponent/AuxComponent";

const HomePageContent = props => {

    return (
        <Aux>
            <Banner/>
            <CoursesBar/>
            <TestimonialsSection/>
        </Aux>
    )
}

export default HomePageContent
