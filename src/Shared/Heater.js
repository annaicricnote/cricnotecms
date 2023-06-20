import React from "react";
import { useSelector } from 'react-redux';
import { categories } from "../Reducer/Reducer";
import { getRecentNews } from "../Reducer/Reducer";
import { slotpic } from "../Reducer/Reducer";
import { useDispatch } from 'react-redux'
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { customdecodeURIComponent } from "../Shared/helper"

function Heater() {
    const [currentcat, setCurrentcat] = useState(1)
    const [collapse, setCollapse] = useState(false)
    const navgations =useNavigate()
    const dispatch = useDispatch()
    const categoriesget = useSelector((state) => state.cricnoteinfo.categories)
    const postget = useSelector((state) => state.cricnoteinfo.recentnews)

    useEffect(() => {
        dispatch(categories())
        dispatch(getRecentNews())
        dispatch(slotpic())
    }, [])

  
    const openCategory = (item) => {
        setCurrentcat(item.id)
       
    }


    const getPostBy = (categoryId) => {

        return postget?.data?.filter(function (item, index) {
            return item.categories[0] === categoryId
        })
    }

    const collapseNavClick = () =>{
        setCollapse(!collapse)
    }
    
    const titleclick =(post,e)=>{
        e.preventDefault();      
        let decoded = customdecodeURIComponent(post.title.rendered);   
        navgations(`/news/${post.id}/${decoded}` , {state:{post}})
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
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item dropdown has-submenu menu-large hidden-md-down hidden-sm-down hidden-xs-down">
                                    <a className="nav-link dropdown-toggle" href="/" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">News</a>
                                    <ul className="dropdown-menu megamenu" aria-labelledby="dropdown01">
                                        <li>
                                            <div className="container">
                                                <div className="mega-menu-content clearfix">
                                                    <div className="tab">
                                                        {categoriesget?.data?.length > 0 && categoriesget?.data.map((item, index) => {                                                           
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
                                                                        {getPostBy(item.id)?.slice(0, 4)?.map((post, index) => {
                                                                            return <>
                                                                                {currentcat === item.id ? <>
                                                                                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12"> <div className="blog-box">
                                                                                        <div className="post-media header-catorgy">
                                                                                            <a href="#"  onClick={(e)=>titleclick(post,e)} title="">
                                                                                                <img src={post?.better_featured_image?.source_url} height={"150px"}  alt="" className="img-fluid" />
                                                                                                <div className="hovereffect">
                                                                                                </div>
                                                                                                <span className="menucat">{item.name}</span>
                                                                                            </a>
                                                                                        </div>
                                                                                        <div className="blog-meta header-catorgy-blog" >
                                                                                            <h4><a href="#"  onClick={(e)=>titleclick(post,e)}title="" height={"10px"} line-height = {"20px"} font-size={"15px"}>{post.title.rendered}</a></h4>
                                                                                        </div>
                                                                                    </div>
                                                                                    </div>

                                                                                </> : null}
                                                                            </>
                                                                        })}
                                                                    </>
                                                                })}                                                                

                                                            </div>
                                                        </div>                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>                                
                                <li className="nav-item">
                                    <a className="nav-link" href="/videos">Videos</a>
                                </li>     
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">About Us</a>
                                </li>                         
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">Contact Us</a>
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
