import { render } from '@testing-library/react'
import React,{Component} from 'react'

class Services extends Component{
   render(){
    
        return(
           <div className="services">
             <div class="container">
                 <div class="row">
                 <div class="col-lg-6 col-md-12">
                     <div class="wrap-col">
                         <div class="wrap-img">
                         <img  src={require('./images/icon1.png').default} />
                         </div>
                         <div class="wrap-txt">
                             <h2>Product Design</h2>
                             <p>consectetur adipiscing elit, eiusmod tempor incididunt labore.</p>
                         </div>
                     </div>
                  </div>
                     <div class="col-lg-6 col-md-12">
                     <div class="wrap-col">
                         <div class="wrap-img">
                         <img  src={require('./images/icon2.png').default} />
                         </div>
                         <div class="wrap-txt">
                             <h2>    Design</h2>
                             <p>consectetur adipiscing elit, eiusmod tempor incididunt labore.</p>
                         </div>
                     </div>
                     </div>
                     <div class="col-lg-6 col-md-12">
                     <div class="wrap-col">
                         <div class="wrap-img">
                         <img  src={require('./images/icon3.png').default} />
                         </div>
                         <div class="wrap-txt">
                             <h2>Visual Design</h2>
                             <p>consectetur adipiscing elit, eiusmod tempor incididunt labore.</p>
                         </div>
                     </div>
                     </div>
                     <div class="col-lg-6 col-md-12">
                     <div class="wrap-col">
                         <div class="wrap-img">
                         <img  src={require('./images/icon4.png').default} />
                         </div>
                         <div class="wrap-txt">
                             <h2>Business Strategy</h2>
                             <p>consectetur adipiscing elit, eiusmod tempor incididunt labore.</p>
                         </div>
                     </div>
                     </div>
                 </div>
             </div></div>
                     
                 
        
        )
    }
}

export default Services
