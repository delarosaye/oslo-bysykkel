import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './Styles/GlobalStyles'
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();