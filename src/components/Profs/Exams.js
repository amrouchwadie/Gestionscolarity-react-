import React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import {Subm} from './Subm';
export const Exams = () => (
  <div>
<br />
<div class="container">
  <div class="row">
    <div class="col"><Dropdown>
  <Dropdown.Toggle variant="primary" id="dropdown-basic">
    <h4>Create </h4><i className="ti-angle-down"></i>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item to="#"><h4>Quiz </h4> </Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item to="#"><h4>Open</h4></Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item to="#"><h4>Quiz-Ques</h4></Dropdown.Item>
  </Dropdown.Menu>
</Dropdown></div>
    <div class="col"></div>
    <div class="col"></div>
    <div class="col-4">  <input type="search"  placeholder="Search " /></div>
  </div>
  <br />
  <div class="row">
    <div class="col-8">
    <Card>
 
  <Card.Body>
    <Card.Title>Quiz</Card.Title>
    <Card.Text>
      <Link to="Subm">15 min Quiz  </Link>
    </Card.Text>
   
  </Card.Body>
</Card>

    </div>
    <div class="col-4">

    <Card>
 
 <Card.Body>
   <Card.Title>Action</Card.Title>
   <Card.Text>
   <Link to="#" className="edit" title="Edit" /*data-toggle="tooltip"*/><i className="material-icons"></i></Link>
                            <Link to="#" className="delete" title="Delete" /*data-toggle="tooltip"*/><i className="material-icons"></i></Link>
                       
   </Card.Text>
  
 </Card.Body>
</Card>

    </div>
  </div>
  <div class="row">
    <div class="col-8">
    <Card>
 
  <Card.Body>
    <Card.Title>Open</Card.Title>
    <Card.Text>
      <Link to="#"> Link database to php project </Link>
    </Card.Text>
   
  </Card.Body>
</Card>

    </div>
    <div class="col-4">

    <Card>
 
 <Card.Body>
   <Card.Title>Action</Card.Title>
   <Card.Text>
   <Link to="#" className="edit" title="Edit" /*data-toggle="tooltip"*/><i className="material-icons"></i></Link>
                            <Link to="#" className="delete" title="Delete" /*data-toggle="tooltip"*/><i className="material-icons"></i></Link>
                       
   </Card.Text>
  
 </Card.Body>
</Card>

    </div>
  </div>
  <div class="row">
    <div class="col-8">
    <Card>
 
  <Card.Body>
    <Card.Title>Quiz Ques</Card.Title>
    <Card.Text>
      <Link to="#">Do presentation about Laravel and React js </Link>
    </Card.Text>
   
  </Card.Body>
</Card>

    </div>
    <div class="col-4">

    <Card>
 
 <Card.Body>
   <Card.Title>Action</Card.Title>
   <Card.Text>
   <Link to="#" className="edit" title="Edit" /*data-toggle="tooltip"*/><i className="material-icons"></i></Link>
                            <Link to="#" className="delete" title="Delete" /*data-toggle="tooltip"*/><i className="material-icons"></i></Link>
                       
   </Card.Text>
  
 </Card.Body>
</Card>

    </div>
  </div>
</div>
<Route path="/Subm" component={Subm} />
  </div>
)
