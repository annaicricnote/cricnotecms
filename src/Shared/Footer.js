


function Footer() {
  return (
    <>
       <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="widget">
                            <div className="footer-text text-left">
                                <a href="index.html">Cricnote</a>
                                <p>Cricnote is live  platform for local and international cricket scoring and latest cricket news...</p>
                                <div className="social">
                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i className="fa fa-facebook"></i></a>              
                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i className="fa fa-twitter"></i></a>
                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Instagram"><i className="fa fa-instagram"></i></a>
                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Google Plus"><i className="fa fa-google-plus"></i></a>
                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Pinterest"><i className="fa fa-pinterest"></i></a>
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
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 text-center">
                        <br/>
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
