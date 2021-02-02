import React from 'react'
import TestimonialItem from "./TestimonialItem/TestimonialItem";
import classes from './TestimonialsSection.module.css'

const TestimonialsSection = props => {

    const testimonialContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam.\n' +
                                'Ipsam, nam, voluptatum'
    return (
        <div className={classes.Section}>
            <div className={classes.Container}>
                <div>
                    <h2 className={classes.Title}>Opinie</h2>
                </div>
                <div className={classes.Row}>
                    <TestimonialItem title='Świetny kurs' content={testimonialContent} author='Jan Kowalski'/>
                    <TestimonialItem title='Super!' content={testimonialContent} author='Anna Nowak'/>
                    <TestimonialItem title='Polecam wszystkim' content={testimonialContent} author='Kamil Wyczesany'/>
                </div>
            </div>
        </div>
    )

}

export default TestimonialsSection
