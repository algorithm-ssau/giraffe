import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header/Header';
import Footer from "../components/footer/Footer";
import Review from "../components/review/Review";
import reportWebVitals from "../reportWebVitals";
import About from "../components/about_giraffe/About";

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

ReactDOM.render(
        <Review/>,
    document.getElementById("review")
);
ReactDOM.render(
    <About/>,
    document.getElementById("about")
);
reportWebVitals();
