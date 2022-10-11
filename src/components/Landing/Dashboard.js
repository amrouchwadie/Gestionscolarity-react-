import React from 'react';
import { BrowserRouter as  Router,Switch,Route, Link } from 'react-router-dom';

import './Dashboard.css';
export const Dashboard = () => (

<div>
<div className="bradcam_area breadcam_bg">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="bradcam_text">
                        <h3>Welcome Back</h3>
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
                        <h3>Latest news</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <nav className="custom_tabs text-center">
                        <div className="nav" id="nav-tab" role="tablist">
                        <Link className="nav-item nav-link active" id="nav-home-tab" to="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Ministry News                             </Link>
                            <Link className="nav-item nav-link" id="nav-profile-tab"  to="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Student News </Link>
                            <Link className="nav-item nav-link" id="nav-contact-tab" to="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Professors News</Link>
                            <Link className="nav-item nav-link" id="nav-contact-tab" to="#nav-contact2" role="tab" aria-controls="nav-contact" aria-selected="false">Internal news</Link>
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
                                    <img src="https://1.bp.blogspot.com/-pQDVojvHv3Y/XZTE7sNNwpI/AAAAAAAANtU/fQZ3OCQVOr4RXUoXIZnWmRE-LlUEVmx9gCLcBGAsYHQ/s1600/2019-10-02_153800.jpg" alt=""/>
                                </div>
                                <div className="program__content">
                                <span>News</span>
                                    <h4>Ministery Note</h4>
                                    <p>Ministery Note consider the absolute abssence of student from school and relying on virtual</p>
                                    <Link to="#" className="boxed-btn5" >Read</Link> </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single__program">
                                <div className="program_thumb">
                                    <img src="https://www.campusfrance.org/sites/default/files/styles/desktop_paragraph_parallax/public/medias/images/2017-10/bourses%20et%20possibilit%C3%A9s%20de%20financement%20%28corps%20du%20texte%29_etudiants.jpg?h=16a6d817&itok=VvxWo8dn" alt=""/>
                                </div>
                                <div className="program__content">
                                <span>News</span>
                                    <h4>Student Displine</h4>
                                    <p>Considering the recent event that happen our staff is going to have to host few studet to discuss the topic</p>
                                    <Link to="#" className="boxed-btn5">Read</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single__program">
                                <div className="program_thumb">
                                    <img src="https://www.letudiant.fr/static/uploads/mediatheque/ETU_ETU/9/9/2205599-etudiants-skema-866x495.jpg" alt=""/>
                                </div>
                                <div className="program__content">
                                <span>News</span>
                                    <h4>Conference of staff</h4>
                                    <p>The panademic won't have us stop therefor we're going to organise conference to tackle the issue</p>
                                    <Link to="#" className="boxed-btn5">Read</Link>
                                 </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single__program">
                                <div className="program_thumb">
                                    <img src="img/about/business.png" alt=""/>
                                </div>
                                <div className="program__content">
                                    <span>News</span>
                                    <h4>Interim Oppurtinity</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                    <Link to="#" className="boxed-btn5">Read</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single__program">
                                <div className="program_thumb">
                                    <img src="img/blog/single_blog_1.png" alt=""/>
                                </div>
                                <div className="program__content">
                                    <span>News</span>
                                    <h4>Integration Day</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                    <Link to="#" className="boxed-btn5">Read</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single__program">
                                <div className="program_thumb">
                                    <img src="img/banner/CCC.png" alt=""/>
                                </div>
                                <div className="program__content">
                                    <span>News</span>
                                    <h4>Conference Day</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                    <Link to="#" className="boxed-btn5">Read</Link>
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
                                        <img src="img/about/business.png" alt=""/>
                                    </div>
                                    <div className="program__content">
                                        <span>News</span>
                                        <h4>Interim Oppurtinity</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                        <Link to="#" className="boxed-btn5">Read</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single__program">
                                    <div className="program_thumb">
                                        <img src="img/program/3.png" alt=""/>
                                    </div>
                                    <div className="program__content">
                                        <span>News</span>
                                        <h4>Integration Day</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                        <Link to="#" className="boxed-btn5">Read</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single__program">
                                    <div className="program_thumb">
                                        <img src="img/program/2.png" alt=""/>
                                    </div>
                                    <div className="program__content">
                                        <span>News</span>
                                        <h4>Conference Day</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                        <Link to="#" className="boxed-btn5">Read</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single__program">
                                    <div className="program_thumb">
                                        <img src="img/about/business.png" alt=""/>
                                    </div>
                                    <div className="program__content">
                                        <span>News</span>
                                        <h4>Interim Oppurtinity</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                        <Link to="#" className="boxed-btn5">Read</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single__program">
                                    <div className="program_thumb">
                                        <img src="img/program/3.png" alt=""/>
                                    </div>
                                    <div className="program__content">
                                        <span>News</span>
                                        <h4>Integration Day</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                        <Link to="#" className="boxed-btn5">Read</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single__program">
                                    <div className="program_thumb">
                                        <img src="img/program/2.png" alt=""/>
                                    </div>
                                    <div className="program__content">
                                        <span>News</span>
                                        <h4>Conference Day</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                        <Link to="#" className="boxed-btn5">Read</Link>
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
                                        <span>News</span>
                                        <h4>Interim Oppurtinity</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                        <Link to="#" className="boxed-btn5">Read</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single__program">
                                    <div className="program_thumb">
                                        <img src="img/program/2.png" alt=""/>
                                    </div>
                                    <div className="program__content">
                                        <span>News</span>
                                        <h4>Integration Day</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                        <Link to="#" className="boxed-btn5">Read</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single__program">
                                    <div className="program_thumb">
                                        <img src="img/about/business.png" alt=""/>
                                    </div>
                                    <div className="program__content">
                                        <span>News</span>
                                        <h4>Conference Day</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                        <Link to="#" className="boxed-btn5">Read</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single__program">
                                    <div className="program_thumb">
                                        <img src="img/program/3.png" alt=""/>
                                    </div>
                                    <div className="program__content">
                                        <span>News</span>
                                        <h4>Interim Oppurtinity</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                        <Link to="#" className="boxed-btn5">Read</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single__program">
                                    <div className="program_thumb">
                                        <img src="img/program/2.png" alt=""/>
                                    </div>
                                    <div className="program__content">
                                        <span>News</span>
                                        <h4>Integration Day</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                        <Link to="#" className="boxed-btn5">Read</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single__program">
                                    <div className="program_thumb">
                                        <img src="img/about/business.png" alt=""/>
                                    </div>
                                    <div className="program__content">
                                        <span>News</span>
                                        <h4>Conference Day</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                        <Link to="#" className="boxed-btn5">Read</Link>
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
                                        <span>News</span>
                                        <h4>Interim Oppurtinity</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                        <Link to="#" className="boxed-btn5">Read</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single__program">
                                    <div className="program_thumb">
                                        <img src="img/about/business.png" alt=""/>
                                    </div>
                                    <div className="program__content">
                                        <span>News</span>
                                        <h4>Integration Day</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                        <Link to="#" className="boxed-btn5">Read</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single__program">
                                    <div className="program_thumb">
                                        <img src="img/program/3.png" alt=""/>
                                    </div>
                                    <div className="program__content">
                                        <span>News</span>
                                        <h4>Conference Day</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                        <Link to="#" className="boxed-btn5">Read</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single__program">
                                    <div className="program_thumb">
                                        <img src="img/program/2.png" alt=""/>
                                    </div>
                                    <div className="program__content">
                                        <span>News</span>
                                        <h4>Interim Oppurtinity</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                        <Link to="#" className="boxed-btn5">Read</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single__program">
                                    <div className="program_thumb">
                                        <img src="img/about/business.png" alt=""/>
                                    </div>
                                    <div className="program__content">
                                        <span>News</span>
                                        <h4>Integration Day</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                        <Link to="#" className="boxed-btn5">Read</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single__program">
                                    <div className="program_thumb">
                                        <img src="img/program/3.png" alt=""/>
                                    </div>
                                    <div className="program__content">
                                        <span>News</span>
                                        <h4>Conference Day</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                        <Link to="#" className="boxed-btn5">Read</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
    <div className="bradcam_area breadcam_bg">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="bradcam_text">
                        <h3>Events & Integrations</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
                
<div className="recent_news_area section__padding">
    
        <div className="container">
           
            <div className="row">
                <div className="col-md-6">
                    <div className="single__news">
                        <div className="thumb">
                            <Link to="single-blog.html">
                                <img src="img/news/1.png" alt="" />
                            </Link>
                            <span className="badge">Project Day</span>
                        </div>
                        <div className="news_info">
                            <Link to="single-blog.html">
                                <h4>Les Meillieur universite 
                                    vous avec pas encore penser</h4>
                            </Link>
                            <p className="d-flex align-items-center"> <span><i className="flaticon-calendar-1"></i> May 10, 2020</span> 
                            
                            <span> <i className="flaticon-comment"></i> 01 Comment</span>
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
                            <span className="badge bandge_2">Investigation day</span>
                        </div>
                        <div className="news_info">
                            <Link to="single-blog.html">
                                <h4>Les evenement de
                                    l'integration</h4>
                            </Link>
                            <p className="d-flex align-items-center"> <span><i className="flaticon-calendar-1"></i> May 10, 2020</span> 
                            
                            <span> <i className="flaticon-comment"></i> 01 Comment</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

)
