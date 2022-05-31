import { render } from '@testing-library/react'
import React,{Component} from 'react'

class Item extends Component{
   render(){
    
        return(
           <div className="boxs">
             <div class="container">
               <div class="row">
            <div class="box d-none d-sm-block">
              <div class="wrapper">
                 <div class="left">
                  <h2>7</h2>
                <div class="right">
                 <span>Years</span>
                 <span>Experience</span>
             </div></div></div></div>
             </div></div>
                     
                 </div>
        
        )
    }
}

export default Item
