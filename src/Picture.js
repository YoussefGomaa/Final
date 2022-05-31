import { render } from '@testing-library/react'
import React,{Component} from 'react'

class Picture extends Component{
    render() {
        return(
           <div class="parts">
                     <div class="container">
                         
                             <div class="col-md">
                                 <h3>Profolio</h3>
                             </div>
                             <div class="row " >
                                 <div class="col-lg-6">
                                 <div class="left">
                                     <div class="single">
                                 <div class="image">
                             <img class="photo" src={require('./images/3.png').default} /> </div>
                             <div class="text">
                                 <h4>Minimalism</h4>
                                 <p>Illustration . Art Direction</p>
                                 <a href="">View Work</a>
                             
                             </div></div>
                             <div class="single">
                             <div class="image">
                             <img class="photo" src={require('./images/4.png').default} /> </div>
                             <div class="text">
                                 <h4>3D Project</h4>
                                 <p>Illustration . Art Direction</p>
                                 <a href="">View Work</a>
                             </div>
                             </div></div></div>
                             <div class=" col-lg-6">
                                
                             <div class="right">
                             <div class="single">
                             <div class="image">
                             <img class="photo" src={require('./images/1.png').default} /> </div>
                             <div class="text">
                                 <h4>Abstract Art</h4>
                                 <p>Illustration . Art Direction</p>
                                 <a href="">View Work</a>
                             </div></div>
                             <div class="single">
                             <div class="image">
                             <img class="photo" src={require('./images/2.png').default} /> </div>
                             <div class="text">
                                 <h4>Modern BG</h4>
                                 <p>Illustration . Art Direction</p>
                                 <a href="">View Work</a>
                             </div>
                             </div></div>
                             </div>
                         </div>
                         <div class="part-btn"><a href="/">See More Work...</a></div>
                     
                 </div></div>
        
        )
    }
}  
export default Picture
