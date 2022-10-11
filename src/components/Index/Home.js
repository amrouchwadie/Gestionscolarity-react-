import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
export const Home = () => (
    <Router>
  <div>
   <div className="slider_area">
        <div className="slider_active owl-carousel">

            <div className="single_slider  d-flex align-items-center slider_bg_1">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="slider_text ">
                                <h3>Booste tes competences <br></br>
                                avec une nouvelle façon  <br></br>
                                d'apprendre.</h3>
                                <Link to="#" className="btn btn-primary">Commencer</Link>
                                <Link to="#" className="btn btn-primary">Faire un tour</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
            <div className="single_slider  d-flex align-items-center slider_bg_2">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="slider_text ">
                                <h3>Booste tes competences <br></br>
                                avec une nouvelle façon  <br></br>
                                    d'apprendre.</h3>
                                <Link to="#" className="boxed-btn3">Commencer</Link>
                                <Link to="#" className="boxed-btn4">Faire un tour</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
            <div className="single_slider  d-flex align-items-center slider_bg_1">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="slider_text ">
                                <h3>Booste tes competences <br></br>
                                avec une nouvelle façon  <br></br>
                                d'apprendre.</h3>
                                <Link to="#" className="boxed-btn3">Commencer</Link>
                                <Link to="#" className="boxed-btn4">Faire un tour</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
    </div>

    <div className="service_area gray_bg">
        <div className="container">
            <div className="row justify-content-center ">
                <div className="col-lg-4 col-md-6">
                    <div className="single_service d-flex align-items-center ">
                        <div className="icon">
                            <i className="flaticon-school"></i>
                        </div>
                        <div className="service_info">
                            <h4>Bourse d'etude</h4>
                            <p>disponible</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single_service d-flex align-items-center ">
                        <div className="icon">
                            <i className="flaticon-error"></i>
                        </div>
                        <div className="service_info">
                            <h4>Etude a distance</h4>
                            <p>dispoible</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single_service d-flex align-items-center ">
                        <div className="icon">
                            <i className="flaticon-book"></i>
                        </div>
                        <div className="service_info">
                            <h4>Examen Surveiller</h4>
                            <p>disponible</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="popular_program_area section__padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section_title text-center">
                        <h3>Programme populaire</h3>
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
                                    <img src="/assets/img/program/1.png" alt="" />
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
                                    <img src="/assets/img/program/2.png" alt="" />
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
                                    <img src="/assets/img/program/3.png" alt="" />
                                </div>
                                <div className="program__content">
                                    <span>Terrain</span>
                                    <h4>Technologie</h4>
                                    <p>pas besoin d'aller au terrain notre application facilité la recherche de l'information</p>
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
                                        <img src="/assets/img/program/1.png" alt="" />
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
                                        <img src="/assets/img/program/3.png" alt="" />
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
                                        <img src="/assets/img/program/2.png" alt="" />
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
                                        <img src="/assets/img/program/3.png" alt="" />
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
                                        <img src="/assets/img/program/2.png" alt="" />
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
                                        <img src="/assets/img/program/1.png" alt="" />
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
                                        <img src="/assets/img/program/2.png" alt="" />
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
                                        <img src="img/program/3.png" alt="" />
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

            <div className="row">
                <div className="col-lg-12">
                    <div className="course_all_btn text-center">
                        <Link to="Courses.html" className="boxed-btn4">Voir tout le cours</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
 
    <div className="latest_coures_area">
        <div className="latest_coures_inner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="coures_info">
                            <div className="section_title white_text">
                                <h3>Dérnier coures</h3>
                                <p> s'adepent de branche vous pouvez apprendre les dernier outils <br></br> pour améliorer vos competence et puis<br></br> pour défier le monde dans le marcher de travail.</p>
                            </div>
                            <div className="coures_wrap d-flex">
                                <div className="single_wrap">
                                    <div className="icon">
                                        <i className="flaticon-lab"></i>
                                    </div>
                                    <h4>Cycle <br></br>
                                        d'ingénieur</h4>
                                        <p>Tous les années des ingénieur sera la possiblité d'inscrire dans autre formation.</p>
                                        <Link to="#" className="boxed-btn5">appliquer maintenant</Link>
                                </div>
                                <div className="single_wrap">
                                    <div className="icon">
                                        <i className="flaticon-lab"></i>
                                    </div>
                                    <h4>Recherchant <br></br>
                                        Doctrorant</h4>
                                        <p>l'access a la grande bibliothéque pour fait une recherche dans n'impote quel.</p>
                                        <Link to="#" className="boxed-btn5">appliquer maintenant</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="recent_event_area section__padding">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                    <div className="section_title text-center mb-70">
                        <h3 className="mb-45">Event Recente</h3>
                        <p>L'access a la derniere evenement pour améliorer vos competence de communication .</p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="single_event d-flex align-items-center">
                        <div className="date text-center">
                            <span>02</span>
                            <p>Dec, 2020</p>
                        </div>
                        <div className="event_info">
                            <Link to="event_details.html">
                                <h4>Comment parler comme un locuteur natif?</h4>
                             </Link>
                            <p><span> <i className="flaticon-clock"></i> 10:30 pm</span> <span> <i className="flaticon-calendar"></i> 21Nov 2020 </span> <span> <i className="flaticon-placeholder"></i> AH Oditoriam</span> </p>
                        </div>
                    </div>
                    <div className="single_event d-flex align-items-center">
                        <div className="date text-center">
                            <span>03</span>
                            <p>Dec, 2020</p>
                        </div>
                        <div className="event_info">
                            <Link to="event_details.html">
                                <h4>Comment parler comme un locuteur natif?</h4>
                             </Link>
                            <p><span> <i className="flaticon-clock"></i> 10:30 pm</span> <span> <i className="flaticon-calendar"></i> 21Nov 2020 </span> <span> <i className="flaticon-placeholder"></i> AH Oditoriam</span> </p>
                        </div>
                    </div>
                    <div className="single_event d-flex align-items-center">
                        <div className="date text-center">
                            <span>10</span>
                            <p>Dec, 2020</p>
                        </div>
                        <div className="event_info">
                            <Link to="event_details.html">
                                <h4>Comment parler comme un locuteur natif?</h4>
                             </Link>
                            <p><span> <i className="flaticon-clock"></i> 10:30 pm</span> <span> <i className="flaticon-calendar"></i> 21Nov 2020 </span> <span> <i className="flaticon-placeholder"></i> AH Oditoriam</span> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div className="admission_area">
        <div className="admission_inner">
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-lg-7">
                        <div className="admission_form">
                            <h3>Apply for Admission</h3>
                            <form action="#">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="single_input">
                                            <input type="text" placeholder="Prenom" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="single_input">
                                            <input type="text" placeholder="Nom" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="single_input">
                                            <input type="text" placeholder=" Number Telephone" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="single_input">
                                            <input type="text" placeholder="Addresse Email " />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="single_input">
                                            <textarea cols="30" placeholder="Ecrire vos Application" rows="10"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="apply_btn">
                                            <button className="boxed-btn3" type="submit">appliquer maintenant</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 
    <div className="recent_news_area section__padding">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                    <div className="section_title text-center mb-70">
                        <h3 className="mb-45">Nouveauté </h3>
                        <p>les nouveautés a prpos de notre platform pour etre toujour a jour.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="single__news">
                        <div className="thumb">
                            <Link to="single-blog.html">
                                <img src="img/news/1.png" alt="" />
                            </Link>
                            <span className="badge">Etude de groupe</span>
                        </div>
                        <div className="news_info">
                            <Link to="single-blog.html">
                                <h4>Les Meillieur universite 
                                    vous avec pas encore penser</h4>
                            </Link>
                            <p className="d-flex align-items-center"> <span><i className="flaticon-calendar-1"></i> May 10, 2020</span> 
                            
                            <span> <i className="flaticon-comment"></i> 01 commentaire</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="single__news">
                        <div className="thumb">
                            <Link to="single-blog.html">
                                <img src="img/news/2.png" alt="" />
                            </Link>
                            <span className="badge bandge_2">Les conference</span>
                        </div>
                        <div className="news_info">
                            <Link to="single-blog.html">
                                <h4>Les evenement de
                                    l'integration</h4>
                            </Link>
                            <p className="d-flex align-items-center"> <span><i className="flaticon-calendar-1"></i> May 10, 2020</span> 
                            
                            <span> <i className="flaticon-comment"></i> 01 commentaire</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  </Router>
)
