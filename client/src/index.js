import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/Header';
import Label from "./components/label/Label";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.Fragment>
        <Header/>
    </React.Fragment>,
  document.getElementById("root")
);

ReactDOM.render(
    <React.StrictMode>
        <Label />
    </React.StrictMode>,
    document.getElementById('label')
);

reportWebVitals();
