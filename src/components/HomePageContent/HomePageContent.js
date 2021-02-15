import React from 'react'
import Banner from "../UI/Banner/Banner";
import CoursesBar from "../Courses/CoursesBar";
import TestimonialsSection from "../Testimonials/TestimonialsSection";
import Layout from "../UI/Layout/Layout";

const HomePageContent = props => {

    return (
        <div>
            <Banner/>
            <CoursesBar/>
            <TestimonialsSection/>
        </div>
    )
}

export default HomePageContent
