import React from "react";
import './App.css';
import Layout from "./components/UI/Layout/Layout";
import Banner from "./components/UI/Banner/Banner";
import CoursesBar from "./components/Courses/CoursesBar";

const App = props => {

    return (
        <div className="App">
            <Layout>
                <Banner/>
                <CoursesBar/>
            </Layout>
        </div>
    );
}

export default App;
