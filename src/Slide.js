import { render } from '@testing-library/react'
import React,{Component} from 'react'
import Carousel from 'react-bootstrap/Carousel'
class Slide extends Component{
    render() {
        return(
           <div class="slide">
               <div class="container">
                   <h5>Testimonial</h5>
                   <div class="row justify-content-center align-item-center">
                   
                   <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="container">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. </p></div>
        <div class="bottom">
            <div class="bord">
            <img class="photo" src={require('./images/woman.png').default} /> 
            </div>
            <div class="txt">
                <h6>John Harry</h6>
                <p>CEO Modernten</p>
            </div></div>
    </div>
    <div class="carousel-item">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. </p>
        <div class="bottom">
            <div class="bord">
            <img class="photo" src={require('./images/woman.png').default} /> 
            </div>
            <div class="txt">
                <h6>John Harry</h6>
                <p>CEO Modernten</p>
            </div></div>
    </div>
    <div class="carousel-item">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. </p>
        <div class="bottom">
            <div class="bord">
            <img class="photo" src={require('./images/woman.png').default} /> 
            </div>
            <div class="txt">
                <h6>John Harry</h6>
                <p>CEO Modernten</p>
            </div></div>
    </div>
  </div>
  
</div>

<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a></div></div></div>
            

            
        
        )
    }
}  
export default Slide
