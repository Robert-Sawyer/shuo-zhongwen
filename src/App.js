import React from "react";
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Layout from "./components/UI/Layout/Layout";
import HomePageContent from "./components/HomePageContent/HomePageContent";
import Login from "./components/User/Authorization/Login/Login";
import Banner from "./components/UI/Banner/Banner";
import CoursesBar from "./components/Courses/CoursesBar";
import TestimonialsSection from "./components/Testimonials/TestimonialsSection";
import SignUp from "./components/User/Authorization/SignUp/SignUp";

const App = props => {

    return (
        <div className="App">
            <Layout>
                <Switch>
                    <Route path='/login' component={Login}/>
                    <Route path='/signup' component={SignUp}/>
                    <Route path='/' exact component={HomePageContent}/>
                </Switch>

            </Layout>
        </div>
    );
}

export default App;
