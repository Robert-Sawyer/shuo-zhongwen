import React from "react";
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Layout from "./components/UI/Layout/Layout";
import HomePageContent from "./pages/Home/HomePageContent";
import Login from "./components/User/Authorization/Login/Login";
import SignUp from "./components/User/Authorization/SignUp/SignUp";
import CoursesPageContent from "./pages/Courses/CoursesPageContent";
import AboutPageContent from "./pages/About/AboutPageContent";
import BlogPageContent from "./pages/Blog/BlogPageContent";
import ContactPageContent from "./pages/Contact/ContactPageContent";
import SingleCourseMainPage from "./pages/Courses/SingleCourseMainPage/SingleCourseMainPage";

const App = props => {

    return (
        <div className="App">
            <Layout>
                <Switch>
                    <Route path='/login' component={Login}/>
                    <Route path='/signup' component={SignUp}/>
                    <Route path='/courses' component={CoursesPageContent}/>
                    <Route path='/hsk1'><SingleCourseMainPage title='HSK 1'/></Route>
                    <Route path='/about' component={AboutPageContent}/>
                    <Route path='/blog' component={BlogPageContent}/>
                    <Route path='/contact' component={ContactPageContent}/>
                    <Route path='/' exact component={HomePageContent}/>
                </Switch>

            </Layout>
        </div>
    );
}

export default App;
