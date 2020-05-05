import * as React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {History} from "history";

interface LayoutProps {
    children?: React.ReactNode;
    history: History;
}

export default function Layout(props: LayoutProps) {
    return (
        <React.Fragment>
            <Header history={props.history}/>
            <main>
                {props.children}
            </main>
            <Footer/>
        </React.Fragment>
    );
}