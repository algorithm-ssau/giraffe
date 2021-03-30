import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
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
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
