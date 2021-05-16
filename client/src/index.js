import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/Header';
import Label from "./components/label/Label";
import Footer from "./components/footer/Footer";
import Popular from "./components/popular/Popular"
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
        <Header/>,
  document.getElementById("root")
);

ReactDOM.render(
    <React.StrictMode>
        <Label />
    </React.StrictMode>,
    document.getElementById('label')
);

ReactDOM.render(
    <React.StrictMode>
        <Footer/>
    </React.StrictMode>,
    document.getElementById('footer')
);

ReactDOM.render(
    <Popular/>,
    document.getElementById('popular')
);

reportWebVitals();
