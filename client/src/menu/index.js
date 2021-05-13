import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header/Header';
import Footer from "../components/footer/Footer";
import Pizza from "../components/menu_pizza/Pizza";
import reportWebVitals from "../reportWebVitals";
import Roll from "../components/menu_roll/Roll";


ReactDOM.render(
    <React.Fragment>
        <Footer/>
    </React.Fragment>,
    document.getElementById("footer")
);

ReactDOM.render(
    <React.Fragment>
        <Header/>
    </React.Fragment>,
    document.getElementById("root")
);

ReactDOM.render(
    <Pizza/>,
    document.getElementById('pizzas')
);

ReactDOM.render(
    <Roll/>,
    document.getElementById('rolls')
);

reportWebVitals();