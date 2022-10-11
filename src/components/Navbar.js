import React, { Component } from 'react';
import {Link ,withRouter } from 'react-router-dom';
class Navbar extends Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
      }
  render(){
    const loginRegLink = (
        <div className="header-area ">
            <div className="header-top_area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header_top_wrap d-flex justify-content-between align-items-center">
                                <div className="text_wrap">
                                    <p><span>+212647848558</span> <span>university@gmail.com</span></p>
                                </div>
                                <div className="text_wrap">
                                    <p><Link to="/Login"> <i className="ti-user"></i>  Authentifie</Link> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="sticky-header" className="main-header-area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header_wrap d-flex justify-content-between align-items-center">
                                <div className="header_left">
                                    <div className="logo">
                                        <Link to="/">
                                            <img src="img/logo.png" alt="" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="header_right d-flex align-items-center">
                                    <div className="main-menu  d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">
                                                <li><Link  to="/">Accueil</Link></li>
                                                <li><Link to="Service">Nos Service</Link></li>
                                                
                                                <li><Link to="AboutUS">Nos Propos</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="Appointment">
                                        <div className="book_btn d-none d-lg-block">
                                            <Link to="#">Nos Contacter</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div classNameName="col-12">
                            <div classNameName="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
    const userLink = (
        <div className="header-area ">
        <div className="header-top_area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="header_top_wrap d-flex justify-content-between align-items-center">
                            <div className="text_wrap">
                                <p><span>+212647848558</span> <span>university@gmail.com</span></p>
                            </div>
                            <div className="text_wrap">
                                <p><Link to="/Login"> <i className="ti-user"></i>  name</Link> <Link to="/Register">email</Link></p>
                                <a href="" onClick={this.logOut.bind(this)} className="nav-link">  Logout </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="sticky-header" className="main-header-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="header_wrap d-flex justify-content-between align-items-center">
                            <div className="header_left">
                                <div className="logo">
                                    <Link to="/">
                                        <img src="img/logo.png" alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="header_right d-flex align-items-center">
                                <div className="main-menu  d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li><Link  to="/">Accueil</Link></li>
                                            <li><Link to="Service">Nos Service</Link></li>
                                            
                                            <li><Link to="AboutUS">Nos Propos</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="Appointment">
                                    <div className="book_btn d-none d-lg-block">
                                        <Link to="#">Nos Contacter</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div classNameName="col-12">
                        <div classNameName="mobile_menu d-block d-lg-none"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
  return (
            <div> {localStorage.usertoken ? userLink : loginRegLink}</div>
       
  );
  }
}

export default withRouter(Navbar);