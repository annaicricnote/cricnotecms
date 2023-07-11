
import {
    FacebookShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    TwitterShareButton,
  
    } from "react-share";


function Footer() {



  return (
    <>
       <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 not-required-mobile">
                        <div className="widget">
                            <div className="footer-text text-left">
                                <a href="index.html">Cricnote</a>
                                <p>Cricnote is live  platform for local and international cricket scoring and latest cricket news...</p>
                                <div className="social">
                                    <a href="https://www.facebook.com/profile.php?id=100093977225980" target="_blank"  data-toggle="tooltip" data-placement="bottom" title="Facebook"><i className="fa fa-facebook"> </i></a>              
                                    <a href="https://twitter.com/_cricnote" data-toggle="tooltip" target="_blank"  data-placement="bottom" title="Twitter"><i className="fa fa-twitter"></i></a>
                                    <a href="https://www.instagram.com/_cricnote/" data-toggle="tooltip" data-placement="bottom" target="_blank"  title="Instagram"><i className="fa fa-instagram"></i></a>
                                    {/* <a href="#" data-toggle="tooltip" data-placement="bottom" title="Google Plus"><i className="fa fa-google-plus"></i></a> */}
                                    {/* <a href="#" data-toggle="tooltip" data-placement="bottom" title="Pinterest"><i className="fa fa-pinterest"></i></a> */}
                                </div>

                                <hr className="invis"/>

                                <div className="newsletter-widget text-left">
                                    <form className="form-inline">
                                        <input type="text" className="form-control" placeholder="Enter your email address"/>
                                        <button type="submit" className="btn btn-primary">SUBMIT</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                        <div className="widget">
                            <div className="link-widget">
                                <ul>
                                    <li><a href="/">About us</a></li>
                                    <li><a href="/contact">Contact Us</a></li>
                                    <li><a href="/privacy">Privacy policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 text-center">                   
                        <div className="copyright">&copy; cricnote </div>
                    </div>
                </div>
            </div>
        </footer>

        <div className="dmtop">Scroll to Top</div>
        
    </>
  );
}

export default Footer;
