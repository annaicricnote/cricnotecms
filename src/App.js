
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Homepage from './Page/Homepage';
import Header from "./Shared/Heater"
import Footer from "./Shared/Footer"
import Detailes from './Page/Detailes';
import Contactus from './Page/Contactus';
import Pagenotfount from './Page/Pagenotfount';
import PrivacyPolicy from './Page/Privacypolicy';
function App() {
  return (
    <>
          
       <BrowserRouter basename="/">
       <Header/>
       <Routes>
        <Route exact path='/' element={<Homepage/>}></Route>
        <Route path='/contact' element={<Contactus/>}></Route>
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





















































