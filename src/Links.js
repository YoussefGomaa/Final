import { render } from '@testing-library/react'
import React,{Component} from 'react'
import About from './About';
import Skill from './Skill';
import Services from './Services';
import Media from './Media';
import Award from './Award';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class Links extends Component{
  
    render()
    {
        return(
           <div className="wrap-links">
            <div class="container">
<Router>
              <ul class="row">
                <li class="col-lg-2 col-md-4 link1">
                  <Link to="/About">About</Link>
                </li>
                <li class="col-lg-2 col-md-4">
                  <Link to="/skill">Skill</Link>
                </li>
                <li class="col-lg-2 col-md-4">
                <Link to="/Services">Service</Link>
                </li>
                <li class="col-lg-2 col-md-4">
                  <Link to="/Social">Social Media</Link>
                </li>
                <li class="col-lg-2 col-md-4">
                  <Link to="/Award">Award</Link>
                </li>
</ul>
<Switch>
          <Route exact path="/About">
            <About />
          </Route>
          <Route path="/Skill">
            <Skill />
          </Route>
          <Route path="/Services">
            <Services />
          </Route>
          <Route path="/Social">
            <Media />
          </Route>
          <Route path="/Award">
            <Award />
          </Route>
        </Switch>
    </Router>          
            </div>
                 </div>
        
        )
    }

  }
export default Links
