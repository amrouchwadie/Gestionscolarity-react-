import React, { Component } from 'react';

import './home.css'
class Home extends Component {

    
    render() {
        return (
            <div  >
               <section id="mu-about-us">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="mu-about-us-area">           
            <div class="row">
              <div class="col-lg-6 col-md-6">
                <div class="mu-about-us-left">
              
                  <div class="mu-title">
                    <h2>What Can I Do ?</h2>              
                  </div>
                 
                  <p>In college, homework assignments generally make up 5-20% of your grade, but can be the biggest time-suck for most students. Yes, working problems is one of the best ways to turn new concepts into working knowledge, but a large majority of those problems that take you hours and hours to work through, you’ll never see on an exam.</p>
                  <ul>
                    <li>Google what you need to gain more knowledge </li>
                    <li>They study in short and marthons study smartly.</li>
                    <li>Highlight your response before upload</li>
                
                  </ul>
                     </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="mu-about-us-right">                            
                <a id="mu-abtus-video" href="https://www.youtube.com/embed/HN3pm9qYAUs" target="mutube-video">
                  <img src="https://images.theconversation.com/files/354218/original/file-20200822-16-914mkk.jpg?ixlib=rb-1.1.0&rect=7%2C14%2C4754%2C3234&q=45&auto=format&w=496&fit=clip" alt="img"/>
                </a>                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

 
  <section id="mu-service">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12">
          <div class="mu-service-area">
     
            <div class="mu-service-single">
              <span class="fa fa-book"></span>
              <h3>Learn Online</h3>
              <p style={{color:"white"}}>Similiar to to the real life experience with much more project to be done</p>
            </div>
         
            <div class="mu-service-single">
              <span class="fa fa-users"></span>
              <h3>Expert Teachers</h3>
              <p style={{color:"white"}}>Brilliant teachers in order to aquire different set of skills for the future</p>
            </div>
    
            <div class="mu-service-single">
              <span class="fa fa-table"></span>
              <h3>Best Classrooms</h3>
              <p style={{color:"white"}} >Easy access to classroom that fit what you want to learn and aquire </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>

  

  <section id="mu-abtus-counter">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="mu-abtus-counter-area">
            <div class="row">
              
              <div class="col-lg-3 col-md-3 col-sm-3">
                <div class="mu-abtus-counter-single">
                  <span class="fa fa-book" style={{color:"black"}}></span>
                  <h4 class="counter" style={{color:"black"}}>568</h4>
                  <p  style={{color:"black"}}>Subjects</p>
                </div>
              </div>
           
              <div class="col-lg-3 col-md-3 col-sm-3"  style={{color:"black"}}>
                <div class="mu-abtus-counter-single" style={{color:"black"}}>
                  <span class="fa fa-users" style={{color:"black"}}></span>
                  <h4 class="counter" style={{color:"black"}}>3500</h4>
                  <p  style={{color:"black"}} >Students</p>
                </div>
              </div>
      
              <div class="col-lg-3 col-md-3 col-sm-3"  style={{color:"black"}} >
                <div class="mu-abtus-counter-single"  style={{color:"black"}} >
                  <span class="fa fa-flask"  style={{color:"black"}}></span>
                  <h4 class="counter"  style={{color:"black"}}>65</h4>
                  <p  style={{color:"black"}}>Modern Lab</p>
                </div>
              </div>
        
              <div class="col-lg-3 col-md-3 col-sm-3">
                <div class="mu-abtus-counter-single no-border">
                  <span class="fa fa-user-secret"style={{color:"black"}}></span>
                  <h4 class="counter"style={{color:"black"}}>250</h4>
                  <p style={{color:"black"}}>Teachers</p>
                </div>
              </div>
         
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
            </div >
        )

    }

}



export default Home
