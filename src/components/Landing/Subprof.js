import React from 'react';
import './Subprof.css';
import { BrowserRouter as Route, Link } from 'react-router-dom';
export const Subprof = () => (
  <div>
    <div class="container">
 


        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-4">
						<h2>Substitute Teachers</h2>
					</div>
					<div class="col-sm-8">						
						<Link to="#" class="btn btn-primary"><i class="material-icons"></i> <span>Refresh List</span></Link>
						<Link to="#" class="btn btn-info"><i class="material-icons"></i> <span>Export to Excel</span></Link>
					</div>
                </div>
            </div>
            <nav class="navbar navbar-light bg-light">
<div class="row">
  <Link class="navbar-brand"> <div class="col-sm-3">
						<div class="show-entries">
							<span>Show & Enteries</span>
							<select class="form-control">
								<option>5</option>
								<option>10</option>
								<option>15</option>
								<option>20</option>
							</select>
							
						</div>
					</div></Link>
  <form class="form-inline">
  
  <span class="filter-icon"><i class="fa fa-filter"></i></span>
	<div class="filter-group">
							
							<select class="form-control">
								<option>All</option>
								<option>Berlin</option>
								<option>London</option>
								<option>Madrid</option>
								<option>New York</option>
								<option>Paris</option>								
							</select>
						</div>
						<div class="filter-group">
						
							<select class="form-control">
								<option>Any</option>
								<option>Delivered</option>
								<option>Shipped</option>
								<option>Pending</option>
								<option>Cancelled</option>
							</select>
						</div>
						
                        <input type="text" placeholder="Name" class="form-control" />
                        <button type="button" class="btn btn-primary"><i class="fa fa-search"></i></button>
	
  </form>
  </div>
</nav>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
						<th>E-Mail</th>
						<th>Phone Number</th>						
                        <th>Domain</th>						
						<th>Password</th>
						<th></th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td><Link to="#"><img src="/examples/images/avatar/1.jpg" class="avatar" alt="Avatar" /> Michael Holz</Link></td>
						<td>Michael.H@gmail.com</td>
                        <td>+212 641415963</td>                        
						<td><span class="status text-success"></span> Computer Science</td>
						<td>123456789</td>
						<td><Link className="btn btn-warning" to="MProf" role="button" ><i class="material-icons">✎</i></Link></td>
                        <td><Link className="btn btn-danger" to="#" role="button"  ><i class="material-icons">🗑️</i></Link></td>
                    </tr>
					<tr>
                        <td>2</td>
                        <td><Link to="#"><img src="/examples/images/avatar/2.jpg" class="avatar" alt="Avatar" /> Paula Wilson</Link></td>
                        <td>W.Paula@gmail.com</td>                       
						<td>+212 658965441</td>
						<td><span class="status text-info"></span> Math</td>
						<td>azerty-1234</td>
                        <td><Link className="btn btn-warning" to="MProf" role="button" ><i class="material-icons">✎</i></Link></td>
                        <td><Link className="btn btn-danger" to="#" role="button"  ><i class="material-icons">🗑️</i></Link></td> </tr>
					<tr>
                        <td>3</td>
                        <td><Link to="#"><img src="/examples/images/avatar/3.jpg" class="avatar" alt="Avatar" /> Antonio Moreno</Link></td>
                        <td>W.Paula@gmail.com</td>                       
						<td>+212 98786414</td>
						<td><span class="status text-info"></span> Literature</td>
						<td>azerty-1234</td>
                        <td><Link className="btn btn-warning" to="MProf" role="button" ><i class="material-icons">✎</i></Link></td>
                        <td><Link className="btn btn-danger" to="#" role="button"  ><i class="material-icons">🗑️</i></Link></td> </tr>
					<tr>
                        <td>4</td>
                        <td><Link to="#"><img src="/examples/images/avatar/4.jpg" class="avatar" alt="Avatar" /> Mary Saveley</Link></td>
                        <td>W.Paula@gmail.com</td>                       
						<td>+212 4584878451</td>
						<td><span class="status text-info"></span> Math</td>
						<td>qwerty-7894</td>
                        <td><Link className="btn btn-warning" to="MProf" role="button" ><i class="material-icons">✎</i></Link></td>
                        <td><Link className="btn btn-danger" to="#" role="button"  ><i class="material-icons">🗑️</i></Link></td>  </tr>
					<tr>
                        <td>5</td>
                        <td><Link to="#"><img src="/examples/images/avatar/5.jpg" class="avatar" alt="Avatar" /> Martin Sommer</Link></td>
                        <td>W.Paula@gmail.com</td>                       
						<td>+212 658965441</td>
						<td><span class="status text-info"></span> Math</td>
						<td>azerty-1234</td>
                        <td><Link className="btn btn-warning" to="MProf" role="button" ><i class="material-icons">✎</i></Link></td>
                        <td><Link className="btn btn-danger" to="#" role="button"  ><i class="material-icons">🗑️</i></Link></td> </tr>
                </tbody>
            </table>
			<div class="clearfix">
                <div class="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                <ul class="pagination">
                    <li class="page-item disabled"><Link to="#">Previous</Link></li>
                    <li class="page-item"><Link to="#" class="page-link">1</Link></li>
                    <li class="page-item"><Link to="#" class="page-link">2</Link></li>
                    <li class="page-item"><Link to="#" class="page-link">3</Link></li>
                    <li class="page-item active"><Link to="#" class="page-link">4</Link></li>
                    <li class="page-item"><Link to="#" class="page-link">5</Link></li>
					<li class="page-item"><Link to="#" class="page-link">6</Link></li>
					<li class="page-item"><Link to="#" class="page-link">7</Link></li>
                    <li class="page-item"><Link to="#" class="page-link">Next</Link></li>
                </ul>
            </div>
        </div>
    </div>     

  </div>
)
