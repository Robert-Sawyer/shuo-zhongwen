import React from 'react'
import Banner from "../../components/UI/Banner/Banner";
import CoursesBar from "../../components/Courses/CoursesBar";
import TestimonialsSection from "../../components/Testimonials/TestimonialsSection";
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
