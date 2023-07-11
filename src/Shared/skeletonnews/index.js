import React from "react";
import "./index.css"

function Skeletonnews() {

    return (
        <>
  <div className="Skeletonnews">
    <main>
        <ul className="o-vertical-spacing o-vertical-spacing--l">
          <li className="blog-post o-media">
            <div className="o-media__figure">
              <span className="skeleton-box skeleton-box-title" ></span>
            </div>
            <div className="o-media__body">
              <div className="o-vertical-spacing">
                <h3 className="blog-post__headline">
                  <span className="skeleton-box" style={{width:"50%" ,height:"12px"}}></span>
                </h3>
                <p>
                  <span className="skeleton-box skeleton-box-1"></span>
                  <span className="skeleton-box skeleton-box-2"></span>
                  <span className="skeleton-box skeleton-box-3"></span>
                  <span className="skeleton-box skeleton-box-4"></span>
                </p>
                
              
              </div>
            </div>
          </li>
          <li className="blog-post o-media">
            <div className="o-media__figure">
              <span className="skeleton-box skeleton-box-title" ></span>
            </div>
            <div className="o-media__body">
              <div className="o-vertical-spacing">
                <h3 className="blog-post__headline">
                  <span className="skeleton-box" style={{width:"50%" ,height:"12px"}}></span>
                </h3>
                <p>
                  <span className="skeleton-box skeleton-box-1"></span>
                  <span className="skeleton-box skeleton-box-2"></span>
                  <span className="skeleton-box skeleton-box-3"></span>
                  <span className="skeleton-box skeleton-box-4"></span>
                </p>
                
              
              </div>
            </div>
          </li>
          
          
        </ul>
      </main>
      </div>


        </>

    )
}
export default Skeletonnews;