import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import { FirebaseContext } from './store/FirebaseContext';
import firebase from './Firebase/config.js'
import Context from './store/FirebaseContext';

ReactDOM.render(
    <React.StrictMode>
    <FirebaseContext.Provider value={firebase}>
            <Context>
            <App />
            </Context>

        </FirebaseContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
