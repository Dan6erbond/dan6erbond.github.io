import React, { useEffect } from "react";
import { Route, Switch, useLocation } from "react-router";
import Layout from "./components/Layout";
import {Route, Switch} from "react-router";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import IDPA from "./components/pages/Projects/IDPA/IDPA";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHammer, faHome} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {Container} from "react-bootstrap";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (process.env.NODE_ENV !== "development") window.scrollTo(0, 0);
  }, [pathname]);

    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/projects/idpa">
                    <IDPA/>
                </Route>
                <Route path="/projects">
                    <Container fluid="md">
                        <h4>
                            <FontAwesomeIcon icon={faHammer}/> Work in progress!
                        </h4>
                        <br/>
                        <Link to="/" className="btn btn-outline-primary flat-button">
                            <FontAwesomeIcon icon={faHome}/> Return to Home
                        </Link>
                    </Container>
                </Route>
                <Route>
                    <div style={{textAlign: 'center'}}>
                        <h3>404:</h3>
                        <h4>Not Found</h4>
                        <br/>
                        <Link to="/" className="btn btn-outline-primary flat-button">
                            <FontAwesomeIcon icon={faHome}/> Return to Home
                        </Link>
                    </div>
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
