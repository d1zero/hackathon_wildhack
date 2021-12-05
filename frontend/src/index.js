import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import 'normalize.css';

const GlobalStyles = createGlobalStyle`
    ul {
        display: block;
        list-style-type: disc;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;
    }
    a {
        color: inherit;
        text-decoration: none
    }
    html {
        overflow-y: scroll;
    }
`;

ReactDOM.render(
    <BrowserRouter>
        <GlobalStyles />
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
