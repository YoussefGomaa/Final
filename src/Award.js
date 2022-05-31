import { render } from '@testing-library/react'
import React,{Component} from 'react'

class Award extends Component{
   render(){
    
        return(
           <div className="award">
               <div class="container">
                   <div class="row">
                       <div class="col-lg-6 col-md-12">
                       <img class="certficate" src={require('./images/award1.png').default} />
                       </div>
                       <div class="col-lg-6 col-md-12">
                       <img class="certficate" src={require('./images/award2.png').default} />

                       </div>
                       <div class="col-lg-6 col-md-12">
                       <img class="certficate" src={require('./images/award3.png').default} />

                       </div>
                       <div class="col-lg-6 col-md-12">
                       <img class="certficate" src={require('./images/award4.png').default} />

                       </div>

                   </div>
               </div>
           
                     
                 </div>
        
        )
    }
}

export default Award
