import { render } from '@testing-library/react'
import React,{Component} from 'react'

class Register extends Component{
    render() {
        return(
           <div className="forms">
            <div class="top">
                <p>Let’s Talk</p>
            </div>
            <div class="down">
               
                    <div class="container">
                    <div class="row">
                        <div class="col-lg-7 col-md-12 ">
                            <div class="form">
                                <h6>Get In Touch</h6>
                                <form>
                                <div class="row justify-content-center align-item-center">
                                    <div class="col-lg-6 col-md-12">
                                    <div class="log">
                                     <input type="text"  placeholder="name" aria-label="name" aria-describedby="basic-addon1"/>
                                     <p></p>
                                    </div>
                                    </div>
                                    <div class="col-lg-6 col-md-12">
                                    <div class="log">
                                     <input type="text"  placeholder="lastname" aria-label="Lastname" aria-describedby="basic-addon1"/>
                                     <p></p>
                                    </div>
                                    </div>
                                    <div class="col-lg-12">
                                    <div class="log">
                                     <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email"/>
                                         <p></p>
                                     </div>
                                    </div>
                                    <div class="col-lg-12">
                                    <div class="log">
                                     <input type="text"  placeholder="sub" aria-label="Subject" aria-describedby="basic-addon1"/>
                                     <p></p>
                                    </div>
                                    </div>
                                    <div class="col-lg-12">
                                    <div class="log">
                                    <textarea name="message" placeholder="Message"></textarea>
                                    </div>
                                    </div>
                                    <div class="col-lg-12">
                                    <div class="log">
                                    <button type="submit">Send Message</button>
                                    </div>
                                </div></div>
                                </form>
                            </div>
                        </div>
                        <div class=" col-lg-5 justify-content-center align-item-center">
                                    <div class="item">
                                        <div class="top">
                                        <h2>25 North Street,Dubai</h2></div>
                                        <div class="up">
                                        <div class="ph">
                                            <img class="photo" src={require('./images/ball.png').default} /> 
                                            </div>
                                            <div class="paragraph">
                                                <p>Office Address</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="top">
                                        <h2>info@edefytheme .com</h2></div>
                                        <div class="up">
                                        <div class="ph">
                                            <img class="photo" src={require('./images/email.png').default} /> 
                                            </div>
                                            <div class="paragraph">
                                                <p>Office Address</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="top">
                                        <h2>+91 256-987-239</h2></div>
                                        <div class="up">
                                        <div class="ph">
                                            <img class="photo" src={require('./images/download.png').default} /> 
                                            </div>
                                            <div class="paragraph">
                                                <p>Office Address</p>
                                            </div>
                                        </div>
                                 
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
                     
                 </div>
        
        )
    }
}  
export default Register
