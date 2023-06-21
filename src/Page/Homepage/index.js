

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import Trendvideos from "../../Shared/Trendvideos"
import Popularposts from "../../Shared/Popularposts"
import Recentreviews from "../../Shared/Recentreviews"
import Followus from "../../Shared/Followus"
import { useNavigate } from "react-router-dom";
import image from "../../images/images/add.png"
import { customdecodeURIComponent } from "../../Shared/helper"
import InfiniteScroll from 'react-infinite-scroll-component'
import React, { useState } from 'react';
import axios from 'axios';
import { api } from "../../config/config"
import { useEffect } from 'react';
import "./index.css"
function Homepage() {

    const nav = useNavigate()
    const dispatch = useDispatch()
    const postget = useSelector((state) => state.cricnoteinfo.recentnews)
    const headget = useSelector((state) => state.cricnoteinfo.slotpic)


    const titleclick = (item, e) => {
        e.preventDefault();
        let decoded = customdecodeURIComponent(item.title.rendered);
        nav(`/news/${item.id}/${decoded}`, { state: { item } })
    }

    const [recentviews, setRecentviews] = useState(postget.data)
    const [hasMore, setHasMore] = useState(true)
    const [pageNumber, setPageNumber] = useState(2)

    useEffect(() => {
        setRecentviews(postget.data)
    }, [postget])
    
    const fechmoreviews = () => {       
        axios.get(api.post + `page=${pageNumber}`)
            .then(function (response) {
                // handle success                   
                setRecentviews(recentviews.concat(response.data))
                setPageNumber((prev) => prev + 1)
            })
            .catch(function (error) {
                // handle error
                setHasMore(false)
                console.log(error);
            })
    }


    return (
        <>

            <section className="section first-section">
                <div className="container-fluid">
                    <div className="masonry-blog clearfix">
                        {headget && headget?.data?.map((item, index) => {

                            const classNames = index
                            return <div key={index} className={`_${index + 1}-slot`}>
                                <div className="masonry-box post-media">
                                    <img src={item?.better_featured_image?.source_url} alt="" />
                                    <div className="shadoweffect">
                                        <div className="shadow-desc">
                                            <div className="blog-meta">
                                                <span className="bg-orange"><a href="#" title="" onClick={(e) => titleclick(item, e)}>{item.title.rendered}</a></span>
                                                <h4><a href="#" title="" dangerouslySetInnerHTML={{ __html: item.content.rendered }}></a></h4>
                                                <small><a href="#" title="">{item.modified}</a></small>
                                                <small><a href="#" title="">by Suresh</a></small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                            <div className="page-wrapper">
                                <div className="blog-top clearfix">
                                    <h4 className="pull-left">Recent News <a href="#"><i className="fa fa-rss"></i></a></h4>
                                </div>
                                <div className="blog-list clearfix">
                                    {recentviews?.length > 0 ?
                                        <InfiniteScroll dataLength={recentviews?.length} next={fechmoreviews} hasMore={hasMore}>

                                            {recentviews && recentviews?.length > 0 && recentviews?.map((item, index) => {
                                                return <> <div key={index} >
                                                    <div className="blog-box row">
                                                        <div className="col-md-4">
                                                            <div className="post-media">
                                                                <a onClick={(e) => titleclick(item, e)} href="#" title="">
                                                                    <img src={item?.better_featured_image?.source_url} alt="" />
                                                                    <div className="hovereffect"></div>
                                                                </a>
                                                            </div>
                                                        </div>

                                                        <div className="blog-meta big-meta col-md-8">
                                                            <h4><a onClick={(e) => titleclick(item, e)} href="#" title="" dangerouslySetInnerHTML={{ __html: item.title.rendered }} /></h4>
                                                            <div className="content-recent-news" dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
                                                            <small className="firstsmall"><a className="bg-orange" href="tech-category-01.html" title="">cricket</a></small>
                                                            <small><a onClick={(e) => titleclick(item, e)} href="#" title="">{item.modified}</a></small>
                                                            <small><a onClick={(e) => titleclick(item, e)} href="#" title="">by Suresh</a></small>
                                                        </div>
                                                    </div>
                                                </div> <hr className="invis" /> </>

                                            })}
                                        </InfiniteScroll> : null}

                                </div>
                            </div>

                            <hr className="invis" />

                            {/* <div className="row">
                                <div className="col-md-12">
                                    <nav aria-label="Page navigation">
                                        <ul className="pagination justify-content-start">
                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">Next</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div> */}
                        </div>

                        <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                            <div className="sidebar">
                                <div className="widget">
                                    <div className="banner-spot clearfix">
                                        <div className="banner-img">
                                            <img src={image} alt="" />
                                        </div>
                                    </div>
                                </div>

                                {/* Trendvideos*/}
                                <Trendvideos />
                                {/* Popularposts */}
                                <Popularposts />

                                {/* Recentreviews */}
                                <Recentreviews />

                                {/* Followus */}
                                <Followus />

                                <div className="widget">
                                    <div className="banner-spot clearfix">
                                        <div className="banner-img">
                                            {/* <img src="upload/banner_03.jpg" alt="" /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* 
            {postget?.data?.length > 0 && postget?.data.map((item, index) => {

                return <div key={index}>
                    <p>{ }</p>

                </div>

            })} */}

        </>
    );
}

export default Homepage;
