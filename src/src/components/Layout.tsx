import * as React from "react";
import Navigation from "./Header/Navigation";
import Footer from "./Footer/Footer";

interface LayoutProps {
    children?: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
    return (
        <React.Fragment>
            <Navigation/>
            <main>
                {props.children}
            </main>
            <Footer/>
        </React.Fragment>
    );
}