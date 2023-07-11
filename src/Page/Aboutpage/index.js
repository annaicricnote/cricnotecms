import { Helmet } from "react-helmet";
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
function Aboutpage() {

    useEffect(()=>{
        
        ReactGA.send({ hitType: "pageview", page: "/about", title: "About us page" });
    },[])

    return (
        <>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <title>Cricnote | About us</title>
                <meta name="description" content="உங்களுக்கு தமிழ் மொழியில் அணுகக்கூடிய சிறந்த கிரிக்கெட் செய்திகளை வழங்குகின்றோம். நமது தகவல் அடைவுகளில் நாம் முக்கிய அழகிய கிரிக்கெட் முன்னோட்டத்தைக் கொண்டுள்ளோம்." data-react-helmet="true" />
            </Helmet>
            <div class="page-title lb single-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <h2><i class="fa fa-envelope-open-o bg-orange"></i> About us </h2>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="/">Home</a></li>
                                <li class="breadcrumb-item active">Apout Us</li>
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
                                    {/* <div class="col-lg-5">
                                        <h4>Who we are</h4>
                                        <p>Cricnote is live  platform for local and international cricket scoring and latest cricket news.</p>

                                        <h4>How we help?</h4>
                                        <p>Register or record your street cricket score with our cricnote app. </p>

                                    </div> */}

                                    {/* <div class="col-lg-7">
                                        <form class="form-wrapper">
                                            <input type="text" class="form-control" placeholder="Your name" />
                                            <input type="text" class="form-control" placeholder="Email address" />
                                            <input type="text" class="form-control" placeholder="Phone" />
                                            <input type="text" class="form-control" placeholder="Subject" />
                                            <textarea class="form-control" placeholder="Your message"></textarea>
                                            <button type="submit" class="btn btn-primary">Send <i class="fa fa-envelope-open-o"></i></button>
                                        </form>
                                    </div> */}
                                    <ul>
                                        
                                     
                                     <li><p>At <span>CRICNOTE</span>, we are passionate about cricket and dedicated to bringing you the latest news, updates, and insights from the world of cricket. Whether you're a die-hard cricket fan or simply curious about the sport, we strive to provide you with comprehensive coverage and engaging content.</p></li>
                                    <li><p>Our team of experienced sports journalists and cricket enthusiasts work tirelessly to curate the most up-to-date and accurate information, ensuring that you stay informed about all the happenings in the cricketing world. From international matches and tournaments to domestic leagues and player profiles, we have you covered.</p></li>
                                    <li><p>But that's not all! We have exciting plans for the future. We are actively developing an innovative mobile application designed specifically for local cricketers. Our app will revolutionize the way local cricketers track and manage their scores, making it easier for them to showcase their skills and progress in the game. With this app, cricketers will be able to record their scores, analyze their performance, connect with fellow players, and much more</p></li>
                                    <li><p>At <span>CRICNOTE</span>, our mission is to foster a vibrant cricketing community, connecting fans, players, and enthusiasts from all walks of life. We believe that cricket is not just a sport but a unifying force that brings people together. We aim to create an inclusive platform where everyone can share their love for the game and engage in meaningful conversations</p></li>
                                    <li><p>We value your feedback and encourage you to reach out to us with any suggestions, questions, or contributions. We are always looking to improve and deliver the best possible experience for our users.</p></li>
                                    <li><p>Thank you for visiting <span>CRICNOTE</span>. Stay tuned for the latest cricket news, exciting features, and the launch of our upcoming app. Let's celebrate the spirit of cricket together!</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <h4 style={{marginLeft:'30px'}}><i class="fa fa-envelope-open"></i><span style={{color:"red"}}>Email:</span> info@cricnotye.com</h4>
            <h4 style={{marginLeft:'30px'}}><i class="fa fa-twitter"></i><span style={{color:"red"}}>Twitter:</span> info@cricnotye.com</h4> */}
            </section>
        </>
    )

}
export default Aboutpage;