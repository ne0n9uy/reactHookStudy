import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Counter from './Counter';
import Info from './Info';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        {/* <App /> */}
        {/* <Counter/> */}
        <Info/>
    </>
);
