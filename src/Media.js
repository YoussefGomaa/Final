import { render } from '@testing-library/react'
import React,{Component} from 'react'

class Media extends Component{
   render(){
    
        return(
           <div className="media">
           <div class="container">
               <div class="row justify-content-center align-item-center">
                   <div class="col-lg-4 col-md-6">
                       <div class="photo1">
                   <img  src={require('./images/face2.png').default} />
                       </div>
                       <div class="media-text">
                           <p>Facebook</p>
                       </div>
                       </div>
                   
                   <div class="col-lg-4 col-md-6">
                       <div class="photo2">
                   <img  src={require('./images/instgram.png').default} />
                   </div>
                   <div class="media-text">
                           <p>Instgram</p>
                       </div>
                   </div>
                   <div class="col-lg-4 col-md-6">
                       <div class="photo3">
                   <img  src={require('./images/twitter.png').default} />
                   </div>
                   <div class="media-text">
                           <p>Twitter</p>
                       </div>
                   </div>
                   
                   <div class="col-lg-4 col-md-6">
                       <div class="photo4">
                   <img  src={require('./images/dripple.png').default} />
                   </div>
                   <div class="media-text">
                           <p>Dribble</p>
                       </div>
                   </div>
                   <div class="col-lg-4 col-md-6">
                       <div class="photo5">
                   <img  src={require('./images/linkedin.png').default} />
                   </div>
                   <div class="media-text">
                           <p>LinkedIn</p>
                       </div>
                   </div>
                   <div class="col-lg-4 col-md-6">
                       <div class="photo6">
                   <img  src={require('./images/behance.png').default} />
                   </div>
                   <div class="media-text">
                           <p>Behance</p>
                       </div></div>
                   </div>
               </div>
           </div>
        
        )
    }
}

export default Media
