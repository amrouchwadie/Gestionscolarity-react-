import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export const Service = () => (
    <Router>
  <div>

<div className="bradcam_area breadcam_bg">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="bradcam_text">
                        <h3>Nos Service</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="popular_program_area section__padding program__page">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section_title text-center">
                        <h3>Programme Populaire</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <nav className="custom_tabs text-center">
                        <div className="nav" id="nav-tab" role="tablist">
                        <Link className="nav-item nav-link active" id="nav-home-tab" to="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Diplômé                                </Link>
                            <Link className="nav-item nav-link" id="nav-profile-tab"  to="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">cycle ingénieur </Link>
                            <Link className="nav-item nav-link" id="nav-contact-tab" to="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Recherche Doctorant</Link>
                            <Link className="nav-item nav-link" id="nav-contact-tab" to="#nav-contact2" role="tab" aria-controls="nav-contact" aria-selected="false">Stage</Link>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single__program">
                                <div className="program_thumb">
                                    <img src="img/program/1.png" alt=""/>
                                </div>
                                <div className="program__content">
                                <span>Recherche</span>
                                    <h4>Sur tous les cycle</h4>
                                    <p>Tous les cycle d'ingénieur seront l'access a la bibliothéque Drive</p>
                                    <Link to="#" className="boxed-btn5" >appliquer maintenant</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single__program">
                                <div className="program_thumb">
                                    <img src="img/program/2.png" alt=""/>
                                </div>
                                <div className="program__content">
                                <span>Stage</span>
                                    <h4>Tous les branches</h4>
                                    <p>Le plateforme sera facilité la recheche de stage sinon il y aura des projets</p>
                                    <Link to="#" className="boxed-btn5">appliquer maintenant</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single__program">
                                <div className="program_thumb">
                                    <img src="img/program/3.png" alt=""/>
                                </div>
                                <div className="program__content">
                                <span>Terrain</span>
                                    <h4>Technologie</h4>
                                    <p>pas besoin d'aller au terrain notre application facilité la recherche de l'information</p>
                                    <Link to="#" className="boxed-btn5">appliquer maintenant</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single__program">
                                <div className="program_thumb">
                                    <img src="img/program/1.png" alt=""/>
                                </div>
                                <div className="program__content">
                                    <span>Agriculture</span>
                                    <h4>Chemical engneering</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                    <Link to="#" className="boxed-btn5">appliquer maintenant</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single__program">
                                <div className="program_thumb">
                                    <img src="img/program/2.png" alt=""/>
                                </div>
                                <div className="program__content">
                                    <span>Agriculture</span>
                                    <h4>Mechanical engneering</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                    <Link to="#" className="boxed-btn5">appliquer maintenant</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single__program">
                                <div className="program_thumb">
                                    <img src="img/program/3.png" alt=""/>
                                </div>
                                <div className="program__content">
                                    <span>Agriculture</span>
                                    <h4>Bio engneering</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                    <Link to="#" className="boxed-btn5">appliquer maintenant</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="single__program">
                                    <div className="program_thumb">
                                        <img src="img/program/1.png" alt=""/>
                                    </div>
                                    <div className="program__content">
                                        <span>Agriculture</span>
                                        <h4>Chemical engneering</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                        <Link to="#" className="boxed-btn5">appliquer maintenant</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single__program">
                                    <div className="program_thumb">
                                        <img src="img/program/3.png" alt=""/>
                                    </div>
                                    <div className="program__content">
                                        <span>Agriculture</span>
                                        <h4>Mechanical engneering</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                        <Link to="#" className="boxed-btn5">appliquer maintenant</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single__program">
                                    <div className="program_thumb">
                                        <img src="img/program/2.png" alt=""/>
                                    </div>
                                    <div className="program__content">
                                        <span>Agriculture</span>
                                        <h4>Bio engneering</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                        <Link to="#" className="boxed-btn5">appliquer maintenant</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single__program">
                                    <div className="program_thumb">
                                        <img src="img/program/1.png" alt=""/>
                                    </div>
                                    <div className="program__content">
                                        <span>Agriculture</span>
                                        <h4>Chemical engneering</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                        <Link to="#" className="boxed-btn5">appliquer maintenant</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single__program">
                                    <div className="program_thumb">
                                        <img src="img/program/3.png" alt=""/>
                                    </div>
                                    <div className="program__content">
                                        <span>Agriculture</span>
                                        <h4>Mechanical engneering</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                        <Link to="#" className="boxed-btn5">appliquer maintenant</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single__program">
                                    <div className="program_thumb">
                                        <img src="img/program/2.png" alt=""/>
                                    </div>
                                    <div className="program__content">
                                        <span>Agriculture</span>
                                        <h4>Bio engneering</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                        <Link to="#" className="boxed-btn5">appliquer maintenant</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="single__program">
                                    <div className="program_thumb">
                                        <img src="img/program/3.png" alt=""/>
                                    </div>
                                    <div className="program__content">
                                        <span>Agriculture</span>
                                        <h4>Chemical engneering</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                        <Link to="#" className="boxed-btn5">appliquer maintenant</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single__program">
                                    <div className="program_thumb">
                                        <img src="img/program/2.png" alt=""/>
                                    </div>
                                    <div className="program__content">
                                        <span>Agriculture</span>
                                        <h4>Mechanical engneering</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                        <Link to="#" className="boxed-btn5">appliquer maintenant</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single__program">
                                    <div className="program_thumb">
                                        <img src="img/program/1.png" alt=""/>
                                    </div>
                                    <div className="program__content">
                                        <span>Agriculture</span>
                                        <h4>Bio engneering</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                        <Link to="#" className="boxed-btn5">appliquer maintenant</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single__program">
                                    <div className="program_thumb">
                                        <img src="img/program/3.png" alt=""/>
                                    </div>
                                    <div className="program__content">
                                        <span>Agriculture</span>
                                        <h4>Chemical engneering</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                        <Link to="#" className="boxed-btn5">appliquer maintenant</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single__program">
                                    <div className="program_thumb">
                                        <img src="img/program/2.png" alt=""/>
                                    </div>
                                    <div className="program__content">
                                        <span>Agriculture</span>
                                        <h4>Mechanical engneering</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                        <Link to="#" className="boxed-btn5">appliquer maintenant</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single__program">
                                    <div className="program_thumb">
                                        <img src="img/program/1.png" alt=""/>
                                    </div>
                                    <div className="program__content">
                                        <span>Agriculture</span>
                                        <h4>Bio engneering</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                        <Link to="#" className="boxed-btn5">appliquer maintenant</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="tab-pane fade" id="nav-contact2" role="tabpanel" aria-labelledby="nav-contact-tab">
                                <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="single__program">
                                    <div className="program_thumb">
                                        <img src="img/program/2.png" alt=""/>
                                    </div>
                                    <div className="program__content">
                                        <span>Agriculture</span>
                                        <h4>Chemical engneering</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                        <Link to="#" className="boxed-btn5">appliquer maintenant</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single__program">
                                    <div className="program_thumb">
                                        <img src="img/program/1.png" alt=""/>
                                    </div>
                                    <div className="program__content">
                                        <span>Agriculture</span>
                                        <h4>Mechanical engneering</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                        <Link to="#" className="boxed-btn5">appliquer maintenant</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single__program">
                                    <div className="program_thumb">
                                        <img src="img/program/3.png" alt=""/>
                                    </div>
                                    <div className="program__content">
                                        <span>Agriculture</span>
                                        <h4>Bio engneering</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                        <Link to="#" className="boxed-btn5">appliquer maintenant</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single__program">
                                    <div className="program_thumb">
                                        <img src="img/program/2.png" alt=""/>
                                    </div>
                                    <div className="program__content">
                                        <span>Agriculture</span>
                                        <h4>Chemical engneering</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                        <Link to="#" className="boxed-btn5">appliquer maintenant</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single__program">
                                    <div className="program_thumb">
                                        <img src="img/program/1.png" alt=""/>
                                    </div>
                                    <div className="program__content">
                                        <span>Agriculture</span>
                                        <h4>Mechanical engneering</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                        <Link to="#" className="boxed-btn5">appliquer maintenant</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single__program">
                                    <div className="program_thumb">
                                        <img src="img/program/3.png" alt=""/>
                                    </div>
                                    <div className="program__content">
                                        <span>Agriculture</span>
                                        <h4>Bio engneering</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                        <Link to="#" className="boxed-btn5">appliquer maintenant</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>

  </div>
  </Router>
)