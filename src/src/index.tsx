import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Router} from "react-router-dom";
import { createHashHistory } from 'history'

import './index.scss';
import 'react-vertical-timeline-component/style.min.css';

const hashHistory = createHashHistory();

ReactDOM.render(
    <Router history={hashHistory}>
        <App/>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
