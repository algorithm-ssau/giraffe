import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header/Header';
import Footer from "../components/footer/Footer";


ReactDOM.render(
    <React.Fragment>
        <Header/>
    </React.Fragment>,
    document.getElementById("root")
);

ReactDOM.render(
    <React.Fragment>
        <Footer/>
    </React.Fragment>,
    document.getElementById("footer")
);