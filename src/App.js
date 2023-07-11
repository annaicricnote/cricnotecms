
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Homepage from './Page/Homepage';
import Header from "./Shared/Heater"
import Footer from "./Shared/Footer"
import Detailes from './Page/Detailes';
import Contactus from './Page/Contactus';
import Aboutpage from './Page/Aboutpage';
import Pagenotfount from './Page/Pagenotfount';
import PrivacyPolicy from './Page/Privacypolicy';
import ReactGA from 'react-ga4';
import React, { useEffect } from 'react';
ReactGA.initialize('GTM-KSFQ3W2');
function App() {
  return (
    <>          
       <BrowserRouter basename="/">
       <Header/>
       <Routes>
        <Route exact path='/' element={<Homepage/>}></Route>
        <Route path='/contact' element={<Contactus/>}></Route>
        <Route path='/about' element={<Aboutpage/>}></Route>
        <Route path='/news/:id/:title' element={<Detailes/>}></Route>
        <Route path='/news/:id' element={<Detailes/>}></Route>
        <Route path='/privacy' element={<PrivacyPolicy/>}></Route>
        <Route path='*' element={<Pagenotfount/>}></Route>
       </Routes>
       </BrowserRouter>
       <Footer/>
    </>
  );
}

export default App;





















































