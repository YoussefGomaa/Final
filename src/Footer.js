
import { render } from '@testing-library/react'
import React,{Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-solid-svg-icons'
import { IconContext } from "react-icons";

class Footer extends Component{
    render() {
        return(
           <footer>
               <div class="list">
                   <div class="container">
                       <div class="row">
                   <div class="col-lg-2 col-md-3 col-sm-3 col-12">
                   <a class="navbar-brand" href="#"><img src={require('./images/logo.png').default} /></a></div>
                   <div class="col-lg-6 col-md-9 col-sm-9 col-12">
                       <ul class="list1">
                           <li><a href="">About</a></li>
                           <li><a href="">Protfolio</a></li>
                           <li><a href="">Blog</a></li>
                           <li><a href="">Contact</a></li>
                       </ul>
                   </div>
                   <div class="col-lg-4 col-md-12 col-sm-12 col-12">
                       <ul class="linked">
                       <li><img src={require('./images/face2.png').default} /></li>
                           <li><img src={require('./images/twitter.png').default} /></li>
                           <li><img src={require('./images/instgram.png').default} /></li>

                          
                       </ul>
                   </div>
               </div></div>
                   </div>
                   <div class="foot">
                       <div class="foot-txt">
                           <p>© 2020 Follio. All rights reserved</p>
                       </div>
                   </div>
           </footer>
        
        )
    }
}  
export default Footer
