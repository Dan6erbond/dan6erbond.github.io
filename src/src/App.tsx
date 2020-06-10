import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Route, Switch, useLocation } from "react-router";
import { Link } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./components/pages/About/About";
import Home from "./components/pages/Home/Home";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (process.env.NODE_ENV !== "development") window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Container fluid="md">
            <h4>Are you looking for the projects page?</h4>
            <br />
            <a href="/projects">Go</a>
          </Container>
        </Route>
        <Route>
          <div style={{ textAlign: "center" }}>
            <h3>404:</h3>
            <h4>Not Found</h4>
            <br />
            <Link to="/" className="btn btn-outline-primary flat-button">
              <FontAwesomeIcon icon={faHome} /> Return to Home
            </Link>
          </div>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
