function Contactus (){
  return(
    <>
   <div class="page-title lb single-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <h2><i class="fa fa-envelope-open-o bg-orange"></i> Contact us <small class="hidden-xs-down hidden-sm-down">How Can We Help You?. </small></h2>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/">Home</a></li>
                            <li class="breadcrumb-item active">Contact</li>
                        </ol>
                    </div>                    
                </div>
            </div>
        </div>

        <section class="section wb">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="page-wrapper">
                            <div class="row">
                                <div class="col-lg-5">
                                    <h4>Who we are</h4>
                                    <p>Cricnote is live  platform for local and international cricket scoring and latest cricket news.</p>
                   
                                    <h4>How we help?</h4>
                                    <p>Register or record your street cricket score with our cricnote app. </p>
                                              
                                </div>
                                <div class="col-lg-7">
                                    <form class="form-wrapper">
                                        <input type="text" class="form-control" placeholder="Your name"/>
                                        <input type="text" class="form-control" placeholder="Email address"/>
                                        <input type="text" class="form-control" placeholder="Phone"/>
                                        <input type="text" class="form-control" placeholder="Subject"/>
                                        <textarea class="form-control" placeholder="Your message"></textarea>
                                        <button type="submit" class="btn btn-primary">Send <i class="fa fa-envelope-open-o"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )

}
export default Contactus;