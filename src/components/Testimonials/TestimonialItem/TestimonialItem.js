import React from 'react'
import classes from './TestimonialItem.module.css'

const TestimonialItem = props => {

    return (
        <div className={classes.ItemContainer}>
            <div className={classes.Testimonial}>
                <h3 className={classes.Title}>{props.title}</h3>
                <div className={classes.Rate}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <blockquote className={classes.ContentContainer}>
                    <p className={classes.Content}>
                        {props.content}
                    </p>
                </blockquote>
                <div className={classes.Author}>
                    <span>{props.author}</span>
                </div>
            </div>
        </div>
    )
}

export default TestimonialItem
