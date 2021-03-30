import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Navbar,Nav,Carousel} from "react-bootstrap";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
    <React.StrictMode>
        <Navbar bg="dark" variant="dark" fixed = "top">
            <Navbar.Brand href="#home">4ABREC-ECO</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Pizza</Nav.Link>
                <Nav.Link href="#features">Burgers</Nav.Link>
                <Nav.Link href="#pricing">Rolls</Nav.Link>
            </Nav>
        </Navbar>
        <Carousel>
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src="https://s1.1zoom.ru/b5050/434/Fast_food_Pizza_542007_1366x768.jpg"
                    alt="Pizza"
                />
                <Carousel.Caption>
                    <h3>Pizza</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src="https://cdn.wallscloud.net/converted/1611188683-burgeri-7JNA-1366x768-MM-100.jpg"
                    alt="Burger"
                />

                <Carousel.Caption>
                    <h3>Burger</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://look.com.ua/pic/202011/1366x768/look.com.ua-365903.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Rolls</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
