import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/Home";
import NoPage from "./pages/nopage/NoPage";
import './App.css';
import AboutPage from "./pages/about/About";
import ContactUs from "./pages/contact/Contact";
import Event from "./pages/event/Event";
import Programs from "./pages/programs/Program";

const App = () => {
  return ( 
    <div>
      <Router basename="/theBlizzcodeAcademy">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/aboutus" element={<AboutPage/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
          <Route path="/events" element={<Event/>}/>
          <Route path="/programs" element={<Programs/>}/>
          <Route path="/*" element={<NoPage/>}/>
        </Routes>
      </Router>
    </div>
   );
}
 
export default App;
