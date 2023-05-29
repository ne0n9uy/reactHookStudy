import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Counter from './useState01_Counter';
import Info from './useState02_Info';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        {/* <App /> */}
        {/* <Counter/> */}
        <Info/>
    </>
);
