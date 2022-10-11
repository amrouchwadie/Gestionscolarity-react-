import React from 'react';
import './searchcss.css';
import { BrowserRouter as Route, Link } from 'react-router-dom';
export const Class = () => (
  <div>
    <div className="container-xl">
    <div className="table-responsive">
        <div className="table-wrapper">
            <div className="table-title">
           
                <div className="row">
                    
             
                    
                <input id='search-btn' type='checkbox'/>
<label for='search-btn'>Show search bar</label>
<input id='search-bar' type='text' placeholder='Search for student...'/>
    
   
                    
                  
                    
                </div>
            </div>
            <table className="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Last Name <i className="fa fa-sort"></i></th>
                        <th>First Name<i className="fa fa-sort"></i> </th>
                        <th>Email <i className="fa fa-sort"></i></th>
                        <th>Password <i className="fa fa-sort"></i></th>
                        <th>Year <i className="fa fa-sort"></i></th>
                        
                  
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><Link to="#"><img src="/examples/images/avatar/1.jpg" class="avatar" alt="Avatar" /></Link></td>
                        <td>Thomas Hardy</td>
                        <td>89 Chiaroscuro Rd.</td>
                        <td>Portland</td>
                        <td>azerty-123</td>
                        <td>1st year</td>
                        
                       
                    </tr>
                    <tr>
                    <td><Link to="#"><img src="/examples/images/avatar/1.jpg" class="avatar" alt="Avatar" /></Link></td>
                        <td>Maria Anders</td>
                        <td>Obere Str. 57</td>
                        <td>Berlin</td>
                        <td>azerty-123</td>
                        <td>1st year</td>
                       
                   
                    </tr>
                    <tr>
                    <td><Link to="#"><img src="/examples/images/avatar/1.jpg" class="avatar" alt="Avatar" /></Link></td>
                        <td>Fran Wilson</td>
                        <td>C/ Araquil, 67</td>
                        <td>Madrid</td>
                        <td>azerty-123</td>
                        <td>1st year</td>
                       
                   
                    </tr>
                    <tr>
                    <td><Link to="#"><img src="/examples/images/avatar/1.jpg" class="avatar" alt="Avatar" /></Link></td>
                        <td>Dominique Perrier</td>
                        <td>25, rue Lauriston</td>
                        <td>Paris</td>
                        <td>azerty-123</td>
                        <td>1st year</td>
                      
                       
                    </tr>
                    <tr>
                    <td><Link to="#"><img src="/examples/images/avatar/1.jpg" class="avatar" alt="Avatar" /></Link></td>
                        <td>Martin Blank</td>
                        <td>Via Monte Bianco 34</td>
                        <td>Turin</td>
                         <td>azerty-123</td>
                        <td>1st year</td>
                       
                      
                    </tr>        
                </tbody>
            </table>
            <div className="clearfix">
                <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                <ul className="pagination">
                    <li className="page-item disabled"><Link to="#"><i className="fa fa-angle-double-left"></i></Link></li>
                    <li className="page-item active"><Link to="#" className="page-link">1</Link></li>
                    <li className="page-item"><Link to="#" className="page-link">2</Link></li>
                    <li className="page-item "><Link to="#" className="page-link">3</Link></li>
                    <li className="page-item"><Link to="#" className="page-link">4</Link></li>
                    <li className="page-item"><Link to="#" className="page-link">5</Link></li>
                    <li className="page-item"><Link to="#" className="page-link"><i className="fa fa-angle-double-right"></i></Link></li>
                </ul>
            </div>
        </div>
    </div>  
</div>   

  </div>
)
