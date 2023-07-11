import React from "react";
import "./index.css"
import ReactGA from 'react-ga4';
import { useEffect } from 'react';

function PrivacyPolicy() {
    useEffect(()=>{
        ReactGA.send({ hitType: "pageview", page: "/privacy", title: "Policy page" });
    },[])
    
    return (
        <>        
        <div class="page-title lb single-wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                    <h2><i class="fa fa-file-text-o bg-orange"></i> Privacy policy </h2>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item active">Privacy policy</li>
                    </ol>
                </div>                    
            </div>
        </div>
    </div>

        <div class="section wb">
        <div class="container privacy">
        <h1>Privacy policy</h1>
         <ul>
            <li><p>The content on this website is for general information purposes only. The information is provided by Cricnote Pvt Ltd and while we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.</p></li>
            <li><p>In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website</p></li>
            <li><p>Through this website you are able to link to other websites which are not under the control of Cricnote Pvt Ltd. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them</p></li>
            <li><p>Every effort is made to keep the website up and running smoothly. However, Cricnote Pvt Ltd takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.</p></li>
            <li><p>The views expressed by the Authors in articles under various categories but not restricted to Opinions, Analysis are the views of the writers and should not be considered that of the company. In case of any disputes arising out of it, Cricnote Pvt Ltd will not entertain any claims against content published on the website and should be directed to the Author.</p></li>
           
           
         </ul>
        </div>
        </div>
        </>

    );
}
export default PrivacyPolicy;
