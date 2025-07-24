import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPopup from "./components/LandingPopup";
import AffordablePage from "./pages/AffordablePage";
import LuxuryPage from "./pages/LuxuryPage";
import Navbar from "./components/Navbar";
import Testimonials from "./components/TestimonialSection";
import DrapedGallery from "./components/DrapedGallery";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import Signup from "./pages/RegisterPage";
import OccasionSection from "./components/OccasionSection";

const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  );
 
  const hidePopupRoutes = ["/login", "/signup", "/occasion"];

  return (
    <>
      {!hidePopupRoutes.includes(location.pathname) && showPopup && (
        <LandingPopup setShowPopup={setShowPopup} />
      )}

      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path="/" element={<AffordablePage />} />
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/affordable" element={<AffordablePage />} />
        <Route path="/luxury" element={<LuxuryPage />} />
      <Route path="/occasion" element={<OccasionSection />} />
      </Routes>

      {!hidePopupRoutes.includes(location.pathname) && (
        <>
          <Testimonials />
          <DrapedGallery />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
