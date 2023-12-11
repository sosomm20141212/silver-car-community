import './App.css';

import React, { useEffect }  from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

import Store from './componenets/Store.js';
import axios from 'axios';

function App() {

    useEffect(() => {
        axios.get('/api/store')
        .then(res => console.log(res))
        .catch(err => console.error(err));
    }, []);

    return (
        <div className="App">
            <Store/>
        </div>
    );
}

export default App;
