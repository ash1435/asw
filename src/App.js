import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home/Home"
import Nav from "./Nav/Nav"
import Footer from "./Footer/Footer";
import Buy from './Buy/Buy';
import Contact from './Contact/Contact';
import ScrollToTop from "./ScrolltoTop";

function App() {
  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
    <Nav/>
    <Routes>
        
        <Route exact path="/" element={<Home />}></Route>  
        <Route exact path="/buy" element={<Buy/>}></Route> 
        <Route exact path="/contact" element={<Contact/>}></Route>
        {/* <Route exact path="/abtus" element={<Contact/>}></Route> */}
    </Routes>
    <Footer/>     
  </BrowserRouter>
  </>
  );
}

export default App;

