import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Services from "./components/Services";
import Collaboration from "./components/Collaboration";
import Events from "./components/Events";
import OngoingWorkshop from "./components/Ongoing";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Contact from "./pages/Enquiry";
import CollabAll from "./pages/CollabAll";
import OurTeam from "./pages/OurTeam";
import AboutUs from "./pages/AboutUs";
import Eventspage from "./pages/Eventspage";
import Testimonial from "./pages/Testimonial";
import Career from "./pages/Career";
import CareerContact from "./SecondaryPage/CareerContact";

function Home() {
  return (
    <>
      <Background />
      <Services />
      <Collaboration />
      <Events />
      <OngoingWorkshop />
      <Clients />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collaball" element={<CollabAll />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/eventspage" element={<Eventspage />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/career" element={<Career />} />
        <Route path="/careercontact" element={<CareerContact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
