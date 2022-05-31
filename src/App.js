import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import './index.css';
import Navbar from './Navbar';
import Item from './Item';
import About from './About';
import Skill from './Skill';
import Services from './Services';
import Links from './Links';
import Media from './Media';
import Award from './Award';
import Picture from './Picture';
import Slide from './Slide';
import Register from './Register';
import Latest from './Latest';
import Footer from './Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


function App(){
  return(
    <div className="App">
      <Navbar/>
      <Item/>
      <Links/>
      <Picture/>
      <Slide/>
      <Register/>
      <Latest/>
      <Footer/>
    </div>
  )
}
export default App;

