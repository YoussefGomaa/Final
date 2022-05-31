import { render } from '@testing-library/react'
import React,{Component} from 'react'
import "reactjs-navbar/dist/index.css";
class Navbar extends Component{
    render() {
        return(
            <section>
             
            <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container">
                <a class="navbar-brand" href="#"><img src={require('./images/logo.png').default} /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              
                <div class="collapse navbar-collapse fixed-navbar animated fadeInDown active" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                      <a class="nav-link " href="#">Home</a>
                      <ul>
                        <li><a  href="" >Home</a></li>
                        <li>< a href="">Home-style-2</a></li>
                        <li>< a href="">Home-style-3</a></li>
                        <li>< a href="">Home-style-4</a></li>
                        <li>< a href="">Home-style-5</a></li>
                        <li>< a href="">Home-style-6</a></li>
                        <li>< a href="">Home-style-7</a></li>
                        <li>< a href="">Home-style-8</a></li>
                        <li>< a href="">Home-style-9</a></li>
                        <li>< a href="">Home-style-10</a></li>
        
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link" href="#"  >
                        protfolio
                      </a>
                      <ul>
                        <li><a href="">Profolio-Grid</a></li>
                        <li><a href="">Profolio-Grid 2</a></li>
                        <li><a href="">Profolio mashonary</a></li>
                        <li><a href="">Profolio List</a></li>
                        <li><a href="">Profolio Cro</a></li>
        
                      </ul>
                      
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Pages</a>
                      <ul>
                        <li><a href="">About</a></li>
                        <li><a href="">Services Details</a></li>
                        <li><a href="">Project Details</a></li>
                        <li><a href="">404 page</a></li>
        
        
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Blog</a>
                      <ul>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Blog Fullwidth</a></li>
                        <li><a href="">Blog Details</a></li>
                        
                        
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Contact</a>
                    </li>
                  </ul>
                  <div class="bton " >
                    <a class="br " href="">Lets Talk</a>
                    </div>
                </div> </div>
              </nav>
           
            <div class="wrap">
              <div class="container">
                <div class="row justify-content-center align-item-center">
                  
                  <div class="col-lg-6  col-sm-12 slide-caption justify-content-center align-item-center">
                  <div class="left justify-content-center align-item-center">
                    <h1>
                      I am
                      <span> John </span>
                      Smith
                    </h1>
                    <p>Freelance UI/UX Designer</p>
                    <ul>
                      <li><img class="face" src={require('./images/face2.png').default} /></li>
                      <li><img class="instgram" src={require('./images/instgram.png').default} /></li>
                      <li><img class="linkedin" src={require('./images/linkedin.png').default} /></li>

        
                    </ul>
                  </div></div>
                  <div class="col-lg-6  col-md-12 justify-content-center align-item-center" >
                  <img class="photo  d-none d-lg-block  " src={require('./images/man.logo.png').default} />        </div>
              </div>
          
              </div>
              </div>
            </section>
        )
    }
}  
export default Navbar
