import { render } from '@testing-library/react'
import React,{Component} from 'react'

class About extends Component{
   render(){
    
        return(
           <div className="about">
           <div class="container">
               <div class="row">
                   <div class="col-lg-6 col-md-12">
                   <img class="photo" src={require('./images/background3.png').default} /> 
                   </div>
                   <div class="col-lg-6 col-md-12">
                       <h3>I create products not just art</h3>
                       <p>My name is John Smith. I am a web designer and developer.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                       </p>
                       <div class="but">
                       <a class="btn1">Lets Talk</a></div>
                   </div>
               </div>
           </div>
                     
                 </div>
        
        )
    }
}

export default About
