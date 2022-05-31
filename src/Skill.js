import { render } from '@testing-library/react'
import React,{Component} from 'react'

class Skill extends Component{
   render(){
    
        return(
           <div className="skill">
           <div class="container">
               <div class="row">
                   <div class="col-lg-4 col-md-6">
                       <div class="one">
                       <p class="per1">75%</p>
                       <span class="bar"><span class="html"></span></span>
                       <p class="word">Communication</p>
                        
                           
                       
                       </div>
                       
                   </div>
                   <div class="col-lg-4 col-md-6">
                   <div class="one">
                   <p class="per2">95%</p>
                       <span class="bar"><span class="project"></span></span>
                       <p class="word">Project Management</p>
                       </div>
                   </div>
                   <div class="col-lg-4 col-md-6">
                   <div class="one">
                   <p class="per3">65%</p>
                       <span class="bar"><span class="problem"></span></span>
                       <p class="word">problem Solving</p>
                       </div>
                   </div>
                   
                   <div class="col-lg-4 col-md-6">
                   <div class="one">
                   <p class="per4">55%</p>
                       <span class="bar"><span class="Analitical"></span></span>
                       <p class="word">Analitical Abilites</p>
                       </div>
                   </div>
                   <div class="col-lg-4 col-md-6">
                   <div class="one">
                   <p class="per5">43%</p>
                       <span class="bar"><span class="organization"></span></span>
                       <p class="word">Organization</p>
                       </div>
                   </div>
                   <div class="col-lg-4 col-md-6">
                   <div class="one">
                   <p class="per6">82%</p>
                       <span class="bar"><span class="create"></span></span>
                       <p class="word">Creativity</p>
                      
                   </div>
                   </div>
               </div>
           </div>
                 </div>
        
        )
    }
}

export default Skill
