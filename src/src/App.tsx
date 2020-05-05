import React from 'react';
import Layout from "./components/Layout";
import {Route, Switch} from "react-router";
import Home from "./components/pages/Home/Home";
import {History} from "history";

interface AppProps {
    history: History;
}

function App(props: AppProps) {
    return (
        <Layout history={props.history}>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
