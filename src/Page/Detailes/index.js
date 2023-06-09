

import Trendvideos from "../../Shared/Trendvideos"
import Popularposts from "../../Shared/Popularposts"
import Recentreviews from "../../Shared/Recentreviews"
import Followus from "../../Shared/Followus"
import { useLocation } from "react-router-dom";
import image from "../../images/images/add.png"
import "./index.css"
import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet";

import { useSelector } from 'react-redux';

import { useState, useEffect } from "react";
import {
    TwitterShareButton,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    TwitterIcon,
    FacebookIcon,
} from "react-share";

function Detailes() {
    const postget = useSelector((state) => state.cricnoteinfo.recentnews);

    const Locate = useLocation()
    const { state } = Locate || {};
    const { item } = state || {};
    const { id } = useParams();
    const [items, setItems] = useState(item)
    useEffect(() => {      
        if (postget?.data?.length > 0 && (!item || item === undefined)) {
            const filterdata = postget?.data?.filter((datas, index) => {
                return datas.id === parseInt(id)
            })
            filterdata.length > 0 && setItems(filterdata[0])
        }

    }, [id])
 
    const share = "https://www.linkedin.com/in/sureshkumar-a-624a4125a/";
    const share1 = "http://cricnote.in/news/117/what-tamil-nadu-weatherman-saying"
    const share2 = "http://cricnote.in/news/117/what-tamil-nadu-weatherman-saying"
    return (
        <>
            <Helmet>
                <meta property="og:title" content={items?.title?.rendered} />
                <meta property="og:url" content={`${window.location.origin}'/'${items?.slug}`} />
                <meta property="og:image" content={items?.better_featured_image?.source_url} />
                <meta property="og:type" content="article" />
                <meta property="og:description" content="Cricnote is live  platform for local and international cricket scoring and latest cricket news." />
                <meta property="og:locale" content="en_GB" />
            </Helmet>
            <div id="wrapper">
                <section class="section single-wrapper">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                                <div class="page-wrapper">
                                    <div class="blog-title-area text-center">
                                        <ol class="breadcrumb hidden-xs-down">
                                            <li class="breadcrumb-item"><a href="/">Home</a></li>
                                            <li class="breadcrumb-item active">{items?.title?.rendered}</li>
                                        </ol>

                                        <span class="color-orange"><a title="">Cricket</a></span>

                                        <h3>{items?.title?.rendered}</h3>

                                        <div class="blog-meta big-meta">
                                            <small><a title="">21 July, 2017</a></small>
                                        </div>

                                        <div class="post-sharing">
                                            {/* {postget?.data?.length > 0 && postget?.data?.map((item, index) => { */}
                                            <FacebookShareButton title="gfyfyfgygfy" discription="sssssssssssss" url={share2}>
                                                <FacebookIcon size={60} round={true}></FacebookIcon>
                                            </FacebookShareButton>
                                            {/* <ul class="list-inline">

                                                <li><a href="#" class="fb-button btn btn-primary"><i class="fa fa-facebook"></i> <span class="down-mobile">Share on Facebook</span>

                                                </a></li>
                                                <li><a href="#" class="tw-button btn btn-primary"><i class="fa fa-twitter"></i> <span class="down-mobile">Tweet on Twitter</span>

                                                    <LinkedinShareButton url={share}>
                                                        <LinkedinIcon size={50} round={true}></LinkedinIcon>
                                                    </LinkedinShareButton>
                                                </a></li>
                                                <li><a href="#" class="gp-button btn btn-primary"><i class="fa fa-google-plus"></i>

                                                </a></li>

                                            </ul> */}

                                            {/* })} */}

                                        </div>
                                    </div>

                                    <div class="single-post-media"> {/*Feature image */}
                                        <img src={items?.better_featured_image?.source_url} alt="" />
                                    </div>

                                    <div class="blog-content" dangerouslySetInnerHTML={{ __html: items?.content?.rendered }} /> {/*post blog content */}



                                    <div class="blog-title-area">
                                        {/* <div class="tag-cloud-single">
                                            <span>Tags</span>
                                            <small><a href="#" title="">lifestyle</a></small>
                                            <small><a href="#" title="">colorful</a></small>
                                            <small><a href="#" title="">trending</a></small>
                                            <small><a href="#" title="">another tag</a></small>
                                        </div> */}

                                        <div class="post-sharing">
                                            <ul class="list-inline">
                                                <li><a href="#" class="fb-button btn btn-primary"><i class="fa fa-facebook"></i> <span class="down-mobile">Share on Facebook</span></a></li>
                                                <li><a href="#" class="tw-button btn btn-primary"><i class="fa fa-twitter"></i> <span class="down-mobile">Tweet on Twitter</span></a></li>
                                                <li><a href="#" class="gp-button btn btn-primary"><i class="fa fa-google-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="banner-spot clearfix">
                                                <div class="banner-img">
                                                    <img src="" alt="" class="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <hr class="invis1" />

                                    <div class="custombox prevnextpost clearfix">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="blog-list-widget">
                                                    <div class="list-group">
                                                        <a href="tech-single.html" class="list-group-item list-group-item-action flex-column align-items-start">
                                                            <div class="w-100 justify-content-between text-right">
                                                                <img src="upload/tech_menu_19.jpg" alt="" class="img-fluid float-right" />
                                                                <h5 class="mb-1">5 Beautiful buildings you need to before dying</h5>
                                                                <small>Prev Post</small>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-6">
                                                <div class="blog-list-widget">
                                                    <div class="list-group">
                                                        <a href="tech-single.html" class="list-group-item list-group-item-action flex-column align-items-start">
                                                            <div class="w-100 justify-content-between">
                                                                <img src="upload/tech_menu_20.jpg" alt="" class="img-fluid float-left" />
                                                                <h5 class="mb-1">Let's make an introduction to the glorious world of history</h5>
                                                                <small>Next Post</small>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <hr class="invis1" />

                                    <div class="custombox authorbox clearfix">
                                        <h4 class="small-title">About author</h4>
                                        <div class="row">
                                            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                                                <img src="upload/author.jpg" alt="" class="img-fluid rounded-circle" />
                                            </div>

                                            <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12">
                                                <h4><p>Jessica</p></h4>
                                                <p>Quisque sed tristique felis. Lorem <a href="#">visit my website</a> amet, consectetur adipiscing elit. Phasellus quis mi auctor, tincidunt nisl eget, finibus odio. Duis tempus elit quis risus congue feugiat. Thanks for stop Tech Blog!</p>

                                                <div class="topsocial">
                                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i class="fa fa-facebook"></i></a>
                                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Youtube"><i class="fa fa-youtube"></i></a>
                                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Pinterest"><i class="fa fa-pinterest"></i></a>
                                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i class="fa fa-twitter"></i></a>
                                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Instagram"><i class="fa fa-instagram"></i></a>
                                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Website"><i class="fa fa-link"></i></a>
                                                </div>

                                            </div>
                                        </div>
                                    </div> */}

                                    <hr class="invis1" />

                                    {/* <div class="custombox clearfix">
                                        <h4 class="small-title">You may also like</h4>
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="blog-box">
                                                    <div class="post-media">
                                                        <a href="tech-single.html" title="">
                                                            <img src="upload/tech_menu_04.jpg" alt="" class="img-fluid" />
                                                            <div class="hovereffect">
                                                                <span class=""></span>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div class="blog-meta">
                                                        <h4><a href="tech-single.html" title="">We are guests of ABC Design Studio</a></h4>
                                                        <small><a href="blog-category-01.html" title="">Trends</a></small>
                                                        <small><a href="blog-category-01.html" title="">21 July, 2017</a></small>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-6">
                                                <div class="blog-box">
                                                    <div class="post-media">
                                                        <a href="tech-single.html" title="">
                                                            <img src="upload/tech_menu_06.jpg" alt="" class="img-fluid" />
                                                            <div class="hovereffect">
                                                                <span class=""></span>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div class="blog-meta">
                                                        <h4><a href="tech-single.html" title="">Nostalgia at work with family</a></h4>
                                                        <small><a href="blog-category-01.html" title="">News</a></small>
                                                        <small><a href="blog-category-01.html" title="">20 July, 2017</a></small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}

                                    {/* <hr class="invis1" />

                                    <div class="custombox clearfix">
                                        <h4 class="small-title">3 Comments</h4>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="comments-list">
                                                    <div class="media">
                                                        <a class="media-left" href="#">
                                                            <img src="upload/author.jpg" alt="" class="rounded-circle" />
                                                        </a>
                                                        <div class="media-body">
                                                            <h4 class="media-heading user_name">Amanda Martines <small>5 days ago</small></h4>
                                                            <p>Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone Kickstarter, drinking vinegar jean.</p>
                                                            <a href="#" class="btn btn-primary btn-sm">Reply</a>
                                                        </div>
                                                    </div>
                                                    <div class="media">
                                                        <a class="media-left" href="#">
                                                            <img src="upload/author_01.jpg" alt="" class="rounded-circle" />
                                                        </a>
                                                        <div class="media-body">

                                                            <h4 class="media-heading user_name">Baltej Singh <small>5 days ago</small></h4>

                                                            <p>Drinking vinegar stumptown yr pop-up artisan sunt. Deep v cliche lomo biodiesel Neutra selfies. Shorts fixie consequat flexitarian four loko tempor duis single-origin coffee. Banksy, elit small.</p>

                                                            <a href="#" class="btn btn-primary btn-sm">Reply</a>
                                                        </div>
                                                    </div>
                                                    <div class="media last-child">
                                                        <a class="media-left" href="#">
                                                            <img src="upload/author_02.jpg" alt="" class="rounded-circle" />
                                                        </a>
                                                        <div class="media-body">

                                                            <h4 class="media-heading user_name">Marie Johnson <small>5 days ago</small></h4>
                                                            <p>Kickstarter seitan retro. Drinking vinegar stumptown yr pop-up artisan sunt. Deep v cliche lomo biodiesel Neutra selfies. Shorts fixie consequat flexitarian four loko tempor duis single-origin coffee. Banksy, elit small.</p>

                                                            <a href="#" class="btn btn-primary btn-sm">Reply</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}

                                    <hr class="invis1" />

                                    <div class="custombox clearfix">
                                        <h4 class="small-title">Leave a Reply</h4>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <form class="form-wrapper">
                                                    <input type="text" class="form-control" placeholder="Your name" />
                                                    <input type="text" class="form-control" placeholder="Email address" />
                                                    <input type="text" class="form-control" placeholder="Website" />
                                                    <textarea class="form-control" placeholder="Your comment"></textarea>
                                                    <button type="submit" class="btn btn-primary">Submit Comment</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                                <div class="sidebar">
                                    <div class="widget">
                                        <div class="banner-spot clearfix">
                                            <div class="banner-img">
                                                <img src={image} alt="" class="img-fluid" />
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
                                </div>
                            </div>
                        </div>
                    </div>

                </section>





            </div>
        </>
    );
}
export default Detailes;
