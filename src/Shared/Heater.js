import React from "react";
import { useSelector } from 'react-redux';
import { categories } from "../Reducer/Reducer";
import { useDispatch } from 'react-redux'
import { useState, useEffect } from "react";
function Heater() {
    const [currentcat, setCurrentcat] = useState(1)
    const [collapse, setCollapse] = useState(false)

    const dispatch = useDispatch()
    const categoriesget = useSelector((state) => state.cricnoteinfo.categories)
    const postget = useSelector((state) => state.cricnoteinfo.recentnews)

    useEffect(() => {
        dispatch(categories())

    }, [])

    const openCategory = (item) => {
        setCurrentcat(item.id)
        console.log(item.id)
    }


    const getPostBy = (categoryId) => {

        return postget?.data?.filter(function (item, index) {
            return item.categories[0] === categoryId
        })
    }

    const collapseNavClick = () =>{
        setCollapse(!collapse)
    }


  
    return (
        <>
            <header className="tech-header header ">
                <div className="container-fluid">
                    <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
                        <button className="navbar-toggler navbar-toggler-right" onClick={collapseNavClick} type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand" href="/">Cricnote</a>
                        <div className={ collapse ? "show collapse navbar-collapse" : "collapse navbar-collapse"} id="navbarCollapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="">Home</a>
                                </li>
                                <li className="nav-item dropdown has-submenu menu-large hidden-md-down hidden-sm-down hidden-xs-down">
                                    <a className="nav-link dropdown-toggle" href="/" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">News</a>
                                    <ul className="dropdown-menu megamenu" aria-labelledby="dropdown01">
                                        <li>
                                            <div className="container">
                                                <div className="mega-menu-content clearfix">
                                                    <div className="tab">
                                                        {categoriesget?.data?.length > 0 && categoriesget?.data.map((item, index) => {
                                                            console.log(item.name)
                                                            return <>

                                                                <button key={index} className={index == 0 ? "tablinks active" : "tablinks"} onClick={() => openCategory(item)}>{item.name}</button>

                                                            </>
                                                        })}
                                                    </div>

                                                    <div className="tab-details clearfix">
                                                        <div id="cat01" className="tabcontent active">
                                                            <div className="row">

                                                                {categoriesget?.data?.length > 0 && categoriesget?.data.map((item, index) => {
                                                                    return <>
                                                                        {getPostBy(item.id)?.map((post, index) => {
                                                                            return <>
                                                                                {currentcat === item.id ? <>
                                                                                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12"> <div className="blog-box">
                                                                                        <div className="post-media">
                                                                                            <a href="tech-single.html" title="">
                                                                                                <img src={post?.better_featured_image?.source_url} height={"188px"}  alt="" className="img-fluid" />
                                                                                                <div className="hovereffect">
                                                                                                </div>
                                                                                                <span className="menucat">{item.name}</span>
                                                                                            </a>
                                                                                        </div>
                                                                                        <div className="blog-meta">
                                                                                            <h4><a href="tech-single.html" title="" height={"10px"} >{post.title.rendered}</a></h4>
                                                                                        </div>
                                                                                    </div>
                                                                                    </div>

                                                                                </> : null}
                                                                            </>
                                                                        })}
                                                                    </>



                                                                    //newcate.map()
                                                                })}
                                                                {/* <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                                    <div className="blog-box">
                                                                        <div className="post-media">
                                                                            <a href="tech-single.html" title="">
                                                                            <img src="upload/tech_menu_01.jpg" alt="" className="img-fluid"/>
                                                                                <div className="hovereffect">
                                                                                </div>
                                                                                <span className="menucat">Science</span>
                                                                            </a>
                                                                        </div>
                                                                        <div className="blog-meta">
                                                                            <h4><a href="tech-single.html" title="">Top 10+ care advice for your toenails</a></h4>
                                                                        </div>
                                                                    </div>
                                                                </div> */}

                                                            </div>
                                                        </div>
                                                        <div id="cat02" className="tabcontent">
                                                            <div className="row">
                                                                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                                    <div className="blog-box">
                                                                        <div className="post-media">
                                                                            <a href="tech-single.html" title="">
                                                                                <img src="upload/tech_menu_05.jpg" alt="" />
                                                                                <div className="hovereffect">
                                                                                </div>
                                                                                <span className="menucat">Technology</span>
                                                                            </a>
                                                                        </div>
                                                                        <div className="blog-meta">
                                                                            <h4><a href="tech-single.html" title="">2017 summer stamp will have design models here</a></h4>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                                    <div className="blog-box">
                                                                        <div className="post-media">
                                                                            <a href="tech-single.html" title="">
                                                                                <img src="upload/tech_menu_06.jpg" alt="" />
                                                                                <div className="hovereffect">
                                                                                </div>
                                                                                <span className="menucat">Technology</span>
                                                                            </a>
                                                                        </div>
                                                                        <div className="blog-meta">
                                                                            <h4><a href="tech-single.html" title="">Which color is the most suitable color for you?</a></h4>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                                    <div className="blog-box">
                                                                        <div className="post-media">
                                                                            <a href="tech-single.html" title="">
                                                                                <img src="upload/tech_menu_07.jpg" alt="" />
                                                                                <div className="hovereffect">
                                                                                </div>
                                                                                <span className="menucat">Technology</span>
                                                                            </a>
                                                                        </div>
                                                                        <div className="blog-meta">
                                                                            <h4><a href="tech-single.html" title="">Subscribe to these sites to keep an eye on the fashion</a></h4>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                                    <div className="blog-box">
                                                                        <div className="post-media">
                                                                            <a href="tech-single.html" title="">
                                                                                <img src="upload/tech_menu_08.jpg" alt="" />
                                                                                <div className="hovereffect">
                                                                                </div>
                                                                                <span className="menucat">Technology</span>
                                                                            </a>
                                                                        </div>
                                                                        <div className="blog-meta">
                                                                            <h4><a href="tech-single.html" title="">The most trends of this year with color combination</a></h4>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="cat03" className="tabcontent">
                                                            <div className="row">
                                                                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                                    <div className="blog-box">
                                                                        <div className="post-media">
                                                                            <a href="tech-single.html" title="">
                                                                                <img src="upload/tech_menu_09.jpg" alt="" />
                                                                                <div className="hovereffect">
                                                                                </div>
                                                                                <span className="menucat">Social Media</span>
                                                                            </a>
                                                                        </div>
                                                                        <div className="blog-meta">
                                                                            <h4><a href="tech-single.html" title="">I visited the architects of Istanbul for you</a></h4>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                                    <div className="blog-box">
                                                                        <div className="post-media">
                                                                            <a href="tech-single.html" title="">
                                                                                <img src="upload/tech_menu_10.jpg" alt="" />
                                                                                <div className="hovereffect">
                                                                                </div>
                                                                                <span className="menucat">Social Media</span>
                                                                            </a>
                                                                        </div>
                                                                        <div className="blog-meta">
                                                                            <h4><a href="tech-single.html" title="">Prepared handmade dish dish in the Netherlands</a></h4>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                                    <div className="blog-box">
                                                                        <div className="post-media">
                                                                            <a href="tech-single.html" title="">
                                                                                <img src="upload/tech_menu_11.jpg" alt="" />
                                                                                <div className="hovereffect">
                                                                                </div>
                                                                                <span className="menucat">Social Media</span>
                                                                            </a>
                                                                        </div>
                                                                        <div className="blog-meta">
                                                                            <h4><a href="tech-single.html" title="">I recommend you visit the fairy chimneys</a></h4>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                                    <div className="blog-box">
                                                                        <div className="post-media">
                                                                            <a href="tech-single.html" title="">
                                                                                <img src="upload/tech_menu_12.jpg" alt="" />
                                                                                <div className="hovereffect">
                                                                                </div>
                                                                                <span className="menucat">Social Media</span>
                                                                            </a>
                                                                        </div>
                                                                        <div className="blog-meta">
                                                                            <h4><a href="tech-single.html" title="">One of the most beautiful ports in the world</a></h4>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="cat04" className="tabcontent">
                                                            <div className="row">
                                                                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                                    <div className="blog-box">
                                                                        <div className="post-media">
                                                                            <a href="tech-single.html" title="">
                                                                                <img src="upload/tech_menu_13.jpg" alt="" />
                                                                                <div className="hovereffect">
                                                                                </div>
                                                                                <span className="menucat">Car News</span>
                                                                            </a>
                                                                        </div>
                                                                        <div className="blog-meta">
                                                                            <h4><a href="tech-single.html" title="">A collection of the most beautiful shop designs</a></h4>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                                    <div className="blog-box">
                                                                        <div className="post-media">
                                                                            <a href="tech-single.html" title="">
                                                                                <img src="upload/tech_menu_14.jpg" alt="" />
                                                                                <div className="hovereffect">
                                                                                </div>
                                                                                <span className="menucat">Car News</span>
                                                                            </a>
                                                                        </div>
                                                                        <div className="blog-meta">
                                                                            <h4><a href="tech-single.html" title="">America's and Canada's most beautiful wine houses</a></h4>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                                    <div className="blog-box">
                                                                        <div className="post-media">
                                                                            <a href="tech-single.html" title="">
                                                                                <img src="upload/tech_menu_15.jpg" alt="" />
                                                                                <div className="hovereffect">
                                                                                </div>
                                                                                <span className="menucat">Car News</span>
                                                                            </a>
                                                                        </div>
                                                                        <div className="blog-meta">
                                                                            <h4><a href="tech-single.html" title="">The most professional ways to color your walls</a></h4>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                                    <div className="blog-box">
                                                                        <div className="post-media">
                                                                            <a href="tech-single.html" title="">
                                                                                <img src="upload/tech_menu_16.jpg" alt="" />
                                                                                <div className="hovereffect">
                                                                                </div>
                                                                                <span className="menucat">Car News</span>
                                                                            </a>
                                                                        </div>
                                                                        <div className="blog-meta">
                                                                            <h4><a href="tech-single.html" title="">Stylish cabinet designs and furnitures</a></h4>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="cat05" className="tabcontent">
                                                            <div className="row">
                                                                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                                    <div className="blog-box">
                                                                        <div className="post-media">
                                                                            <a href="tech-single.html" title="">
                                                                                <img src="upload/tech_menu_17.jpg" alt="" />
                                                                                <div className="hovereffect">
                                                                                </div>
                                                                                <span className="menucat">Worldwide</span>
                                                                            </a>
                                                                        </div>
                                                                        <div className="blog-meta">
                                                                            <h4><a href="tech-single.html" title="">Grilled vegetable with fish prepared with fish</a></h4>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                                    <div className="blog-box">
                                                                        <div className="post-media">
                                                                            <a href="tech-single.html" title="">
                                                                                <img src="upload/tech_menu_18.jpg" alt="" />
                                                                                <div className="hovereffect">
                                                                                </div>
                                                                                <span className="menucat">Worldwide</span>
                                                                            </a>
                                                                        </div>
                                                                        <div className="blog-meta">
                                                                            <h4><a href="tech-single.html" title="">The world's finest and clean meat restaurants</a></h4>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                                    <div className="blog-box">
                                                                        <div className="post-media">
                                                                            <a href="tech-single.html" title="">
                                                                                <img src="upload/tech_menu_19.jpg" alt="" />
                                                                                <div className="hovereffect">
                                                                                </div>
                                                                                <span className="menucat">Worldwide</span>
                                                                            </a>
                                                                        </div>
                                                                        <div className="blog-meta">
                                                                            <h4><a href="tech-single.html" title="">Fried veal and vegetable dish</a></h4>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                                    <div className="blog-box">
                                                                        <div className="post-media">
                                                                            <a href="tech-single.html" title="">
                                                                                <img src="upload/tech_menu_20.jpg" alt="" />
                                                                                <div className="hovereffect">
                                                                                </div>
                                                                                <span className="menucat">Worldwide</span>
                                                                            </a>
                                                                        </div>
                                                                        <div className="blog-meta">
                                                                            <h4><a href="tech-single.html" title="">Tasty pasta sauces and recipes</a></h4>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link" href="tech-category-01.html">Gadgets</a>
                                </li> */}
                                <li className="nav-item">
                                    <a className="nav-link" href="videos">Videos</a>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link" href="tech-category-03.html">Reviews</a>
                                </li> */}
                                <li className="nav-item">
                                    <a className="nav-link" href="contact">Contact Us</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav mr-2">
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><i className="fa fa-rss"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><i className="fa fa-android"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><i className="fa fa-apple"></i></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Heater;
