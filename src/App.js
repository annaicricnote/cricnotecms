
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Homepage from './Page/Homepage';
import Header from "./Shared/Heater"
import Footer from "./Shared/Footer"

function App() {
  return (
    <>
      <Header/>    
       <BrowserRouter basename="/">
       <Routes>
        <Route path='/' element={<Homepage/>}></Route>
       </Routes>
       </BrowserRouter>
       <Footer/>
    </>
  );
}

export default App;
