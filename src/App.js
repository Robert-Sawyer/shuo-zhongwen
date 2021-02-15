import React from "react";
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Layout from "./components/UI/Layout/Layout";
import HomePageContent from "./components/HomePageContent/HomePageContent";
import SignUp from "./components/User/Authorization/SignUp/SignUp";
import Banner from "./components/UI/Banner/Banner";
import CoursesBar from "./components/Courses/CoursesBar";
import TestimonialsSection from "./components/Testimonials/TestimonialsSection";

const App = props => {

    return (
        <div className="App">
            <Layout>
                <Switch>
                    <Route path='/login' component={SignUp}/>
                    <Route path='/' exact component={HomePageContent}/>
                </Switch>

            </Layout>
        </div>
    );
}

export default App;
