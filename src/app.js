import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom";
import Index from "./components/index";
import './style/style.scss';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers/index';

const store = createStore(reducers);



ReactDOM.render(
    <Provider store={store}>
        <Index />
    </Provider>
    ,document.getElementById('app'));

