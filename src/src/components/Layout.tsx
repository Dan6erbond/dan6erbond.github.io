import * as React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Navigation from "./Navigation/Navigation";

interface LayoutProps {
    children?: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
    return (
        <React.Fragment>
            <Header/>
            <Navigation/>
            <main>
                {props.children}
            </main>
            <Footer/>
        </React.Fragment>
    );
}