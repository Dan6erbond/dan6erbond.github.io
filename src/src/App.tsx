import React from 'react';
import Layout from "./components/Layout";
import {Route, Switch} from "react-router";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
