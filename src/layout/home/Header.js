import React from 'react';
import {Link  } from 'react-router-dom';


export default function Header() {

  return (
    <div>
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
                                    <p><Link to="/home/login"> <i className="ti-user"></i>  Authentifie</Link></p>
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
                                        <Link to="/">
                                            <img src="img/logo.png" alt="" />
                                        </Link>
                                </div>
                                <div className="header_right d-flex align-items-center">
                                    <div className="main-menu  d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">
                                                <li><Link  to="/home">Accueil</Link></li>
                                                <li><Link to="/home/Service">Nos Service</Link></li>
                                                
                                                <li><Link to="/home/AboutUS">Nos Propos</Link></li>
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
    </div>
  );
}