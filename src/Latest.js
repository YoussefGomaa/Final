import { render } from '@testing-library/react'
import React,{Component} from 'react'

class Latest extends Component{
    render() {
        return(
           <div className="last">
               <div class="head">
               <p>Latest News</p>
               </div>
               <div class="container">
                   <div class="row">
                       <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                           <div class="images">
                               <img src={require('./images/11.png').default}/>
                           </div>
                           <div class="content">
                               <ul>
                                   <li><span>By admin</span> </li>
                                   <li> .Nov 24, 2020</li>
                               </ul>
                               <h8>Helpful tips for become a successful designer</h8>
                               <a href="">Read More...</a>
                           </div>
                       </div>
                       <div class="col-lg-4 col-md-6 col-sm-12 col-122">
                       <div class="images">
                       <img src={require('./images/12.png').default}/>
                       </div>
                       <div class="content">
                               <ul>
                                   <li><span>By admin</span> </li>
                                   <li> .Nov 24, 2020</li>
                               </ul>
                               <h8>Helpful tips for become a successful designer</h8>
                               <a href="">Read More...</a>
                           </div>
                       </div>
                       <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                       <div class="images">
                       <img src={require('./images/13.png').default}/>
                       </div>
                       <div class="content">
                               <ul>
                                   <li><span>By admin</span> </li>
                                   <li> .Nov 24, 2020</li>
                               </ul>
                               <h8>Helpful tips for become a successful designer</h8>
                               <a href="">Read More...</a>
                           </div>
                       </div>
                   </div>
               </div>
             
                     
                 </div>
        
        )
    }
}  
export default Latest
