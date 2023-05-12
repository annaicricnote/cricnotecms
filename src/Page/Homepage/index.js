
import { getRecentNews } from "../../Reducer/Reducer";
import { slotpic } from "../../Reducer/Reducer";
import { useDispatch } from 'react-redux'
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import Trendvideos from "../../Shared/Trendvideos"
import Popularposts from "../../Shared/Popularposts"
import Recentreviews from "../../Shared/Recentreviews"
import Followus from "../../Shared/Followus"
import "./index.css"
function Homepage() {
    const dispatch = useDispatch()
    const postget = useSelector((state) => state.cricnoteinfo.recentnews)

      const headget = useSelector((state) => state.cricnoteinfo.slotpic)

    useEffect(() => {
        dispatch(getRecentNews("hi hi"))
        dispatch(slotpic("hi hi"))

    }, [])
    console.log(headget)
        

    return (
        <>

            <section className="section first-section">
                <div className="container-fluid">
                    <div className="masonry-blog clearfix">
                        {headget && headget?.data?.map((item,index)=>{

                                const classNames = index
                                return   <div key={index} className={`_${index+1}-slot`}>
                                   <div className="masonry-box post-media">
                                       <img src={item?.better_featured_image?.source_url} alt=""/>
                                       <div className="shadoweffect">
                                           <div className="shadow-desc">
                                               <div className="blog-meta">
                                                   <span className="bg-orange"><a href="tech-category-01.html" title="">{item.title.rendered}</a></span>
                                                   <h4><a href="tech-single.html" title="" dangerouslySetInnerHTML={{ __html: item.content.rendered }}></a></h4>
                                                   <small><a href="tech-single.html" title="">24 July, 2017</a></small>
                                                   <small><a href="tech-author.html" title="">by Amanda</a></small>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                        })}
               

                        {/* <div className="_2-slot">
                            <div className="masonry-box post-media">
                                <img src="upload/tech_02.jpg" alt="" />
                                <div className="shadoweffect">
                                    <div className="shadow-desc">
                                        <div className="blog-meta">
                                            <span className="bg-orange"><a href="tech-category-01.html" title="">Gadgets</a></span>
                                            <h4><a href="tech-single.html" title="">Do not make mistakes when choosing web hosting</a></h4>
                                            <small><a href="tech-single.html" title="">03 July, 2017</a></small>
                                            <small><a href="tech-author.html" title="">by Jessica</a></small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="_3-slot">
                            <div className="masonry-box post-media">
                                <img src="upload/tech_03.jpg" alt="" />
                                <div className="shadoweffect">
                                    <div className="shadow-desc">
                                        <div className="blog-meta">
                                            <span className="bg-orange"><a href="tech-category-01.html" title="">Technology</a></span>
                                            <h4><a href="tech-single.html" title="">The most reliable Galaxy Note 8 images leaked</a></h4>
                                            <small><a href="tech-single.html" title="">01 July, 2017</a></small>
                                            <small><a href="tech-author.html" title="">by Jessica</a></small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
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

                                    {postget && postget?.data?.length > 0 && postget?.data?.map((item, index) => {
                                        return <> <div key={index} >
                                            <div className="blog-box row">
                                                <div className="col-md-4">
                                                    <div className="post-media">
                                                        <a href="tech-single.html" title="">
                                                            <img src={item?.better_featured_image?.source_url} alt="" />
                                                            <div className="hovereffect"></div>
                                                        </a>
                                                    </div>
                                                </div>

                                                <div className="blog-meta big-meta col-md-8">
                                                    <h4><a href="tech-single.html" title="" dangerouslySetInnerHTML={{ __html: item.title.rendered }}/></h4>
                                                    <div className="content-recent-news" dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
                                                    <small className="firstsmall"><a className="bg-orange" href="tech-category-01.html" title="">Gadgets</a></small>
                                                    <small><a href="tech-single.html" title="">{item.modified}</a></small>
                                                    <small><a href="tech-author.html" title="">by Matilda</a></small>
                                                    <small><a href="tech-single.html" title=""><i className="fa fa-eye"></i> 1114</a></small>
                                                </div>
                                            </div>
                                        </div> <hr className="invis" /> </>

                                    })}                                 
                                </div>
                            </div>

                            <hr className="invis" />

                            <div className="row">
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
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                            <div className="sidebar">
                                <div className="widget">
                                    <div className="banner-spot clearfix">
                                        <div className="banner-img">
                                            <img src="upload/banner_07.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>

                                {/* Trend videos*/}
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
                                            <img src="upload/banner_03.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {postget?.data?.length > 0 && postget?.data.map((item, index) => {

                return <div key={index}>
                    <p>{ }</p>

                </div>

            })}

        </>
    );
}

export default Homepage;
