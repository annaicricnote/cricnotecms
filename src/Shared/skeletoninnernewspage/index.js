import React from "react";
import "./index.css"

function Skeletoninnernewspage() {

    return (
        <>
  <div classNameName="container-inner">


<div className="box-inner">

  <div className="skeleton">
	<div className="skeleton-right flex2">
	  <div className="kali2">
		<p className="line h17 w40 m10"></p>
	  </div>
	  <p className="line h17 w400 m10"></p>
	  <div className="kali">
		<div className="skeleton-left flex1">
		  <div className="square circle"></div>
		</div>
		<div className="skeleton-left flex1">
		  <div className="square circle"></div>
		</div>
	  </div>
	  <div className="news-con">
	  <div className="skeleton-left flex11">
		<div className="square"></div>
	  </div>
	  <div className="news-con1">
	  <div className="skeleton-left flex3">
		<div className="square news1"></div>
	  </div>
	  <div className="skeleton-left flex3">
		<div className="square news1"></div>
	  </div>
	  <div className="skeleton-left flex3">
		<div className="square news1"></div>
	  </div>
	  <div className="skeleton-left flex3">
		<div className="square news1"></div>
	  </div>
	</div>
	</div>
	  <div className="line h8 w50"></div>
	  <div className="line  w75"></div>
	  <div className="line h8 w50"></div>
	</div>
  </div>
</div>



</div>






        </>

    )
}
export default Skeletoninnernewspage;