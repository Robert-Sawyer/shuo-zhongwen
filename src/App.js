import React from "react";
import './App.css';
import Layout from "./components/UI/Layout/Layout";
import Banner from "./components/UI/Banner/Banner";

const App = props => {

    return (
        <div className="App">
            <Layout>
                <Banner/>
            </Layout>
        </div>
    );
}

export default App;
