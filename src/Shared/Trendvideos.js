
import { useSelector } from 'react-redux';
import { trendvideo } from "../Reducer/Reducer";
import { useDispatch } from 'react-redux'
import { useState, useEffect } from "react";




function Trendvideos() {
  const dispatch = useDispatch()
  const videoget = useSelector((state) => state.cricnoteinfo.trendvideos)
  useEffect(() => {

    dispatch(trendvideo("hi hi"))

  }, [])


  const filtertheimage = (rendered) => {
    const startinindex = rendered.indexOf("<figure");
    const endingstring = rendered.indexOf("</figure>");
    return rendered.substr(startinindex, endingstring);
  }
  return (
    <>

      <div className="widget">
        <h2 className="widget-title">Trend Videos</h2>
        <div className="trend-videos">
          {videoget?.data?.length > 0 && videoget.data.map((item, index) => {
            
            return <> <div key={index} className="blog-box">
              <div className="post-media">
                <a href="tech-single.html" title="">
                  <div style={{ width: "255px", height: "147px" }} dangerouslySetInnerHTML={{ __html: filtertheimage(item.content.rendered) }} />
                  <div class="hovereffect">
                    <span class="videohover"></span>
                  </div>
                </a>
              </div>
              <div className="blog-meta">
                <h4><a href="tech-single.html" title="">{item.title.rendered}</a></h4>
              </div>
            </div>
              <hr class="invis"/></>
          })}
        </div>
      </div>



    </>
  );
}

export default Trendvideos;
