import React from "react";
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Layout from "./components/UI/Layout/Layout";
import HomePageContent from "./pages/Home/HomePageContent";
import Login from "./components/User/Authorization/Login/Login";
import SignUp from "./components/User/Authorization/SignUp/SignUp";
import CoursesPageContent from "./pages/Courses/CoursesPageContent";

const App = props => {

    return (
        <div className="App">
            <Layout>
                <Switch>
                    <Route path='/login' component={Login}/>
                    <Route path='/signup' component={SignUp}/>
                    <Route path='/courses' component={CoursesPageContent}/>
                    <Route path='/' exact component={HomePageContent}/>
                </Switch>

            </Layout>
        </div>
    );
}

export default App;
