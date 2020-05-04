import React from 'react';
import Layout from "./components/Layout";
import {Route, Switch} from "react-router";
import Home from "./components/pages/Home/Home";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
