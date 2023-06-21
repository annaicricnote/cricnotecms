

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
import { useDispatch } from 'react-redux';
import { customdecodeURIComponent } from "../../Shared/helper";
import  Socialmedia  from "../../Shared/Socialmedia";

function Detailes() {

    const postget = useSelector((state) => state.cricnoteinfo.recentnews);
    const dispatch = useDispatch()
    const Locate = useLocation()
    const { state } = Locate || {};
    const { item } = state || {};
    const { id } = useParams();
    const [items, setItems] = useState(item)
    const [link, setLink] = useState(null)
    useEffect(() => {
        if (postget && postget?.data?.length > 0 && (!item || item === undefined)) {
            const filterdata = postget?.data?.filter((datas, index) => {
                return datas.id === parseInt(id)
            })
            filterdata.length > 0 && setItems(filterdata[0])
        }
    }, [id, postget])


    useEffect(()=>{
        if(items !==""){            
            setLink(`http://cricnote.in//news/${items?.id}`)
        }
    },[items])

   

    return (
        <>
            {items?.title?.rendered && link?
                <Helmet>
                    <meta property="og:title" content={items?.title?.rendered} />
                    <meta property="og:url" content={`${window.location.origin}'/'${items?.slug}`} />
                    <meta property="og:image" content={items?.better_featured_image?.source_url} />
                    <meta property="og:type" content="article" />
                    <meta property="og:description" content={items?.content?.rendered} />
                    <meta property="og:locale" content="en_GB" />
                    <meta name="description" content={items?.content?.rendered} />
                    <meta name="description" content={items?.content?.rendered} />
                </Helmet> : null}
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
                                        {items?.title?.rendered && link ?
                                            <Socialmedia
                                                quote={items?.title?.rendered}
                                                imageUrl={items?.better_featured_image?.source_url}
                                                url={link}
                                                description={items?.content?.rendered}
                                                hashtags={["_cricnote"]}
                                                title={items?.title?.rendered}
                                            /> : null}
                                    </div>

                                    <div class="single-post-media"> {/*Feature image */}
                                        <img src={items?.better_featured_image?.source_url} alt="" />
                                    </div>

                                    <div class="blog-content" dangerouslySetInnerHTML={{ __html: items?.content?.rendered }} /> {/*post blog content */}



                                    <div class="blog-title-area">


                                        <div class="post-sharing">
                                            {items?.title?.rendered && link ?
                                                <Socialmedia
                                                    quote={items?.title?.rendered}
                                                    imageUrl={items?.better_featured_image?.source_url}
                                                    url={link}
                                                    description={items?.content?.rendered}
                                                    hashtags={["_cricnote"]}
                                                    title={items?.title?.rendered}
                                                /> : null}
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



                                    <hr class="invis1" />


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
