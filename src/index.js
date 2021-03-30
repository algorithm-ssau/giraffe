import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Navbar,Nav,Carousel} from "react-bootstrap";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">4ABREC-ECO</Navbar.Brand>
          <Nav className="mr-auto">
              <Nav.Link href="#home">Pizza</Nav.Link>
              <Nav.Link href="#features">Burgers</Nav.Link>
              <Nav.Link href="#pricing">Rolls</Nav.Link>
          </Nav>
      </Navbar>,
      <Carousel>
          <Carousel.Item>
              <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
                  alt="First slide"
              />
              <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              <img
                  className="d-block w-100"
                  src="https://klike.net/uploads/posts/2019-06/1559545617_2.jpg"
                  alt="Burger"
              />

              <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
                  alt="Third slide"
              />

              <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
