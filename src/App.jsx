import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";

import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import WhatsappButton from "./components/WhatsappButton";
import Footer from "./components/Footer";
import ContactUsPage from "./pages/ContactUs";
import Projects from "./pages/Projects";

// Outdoor Signage
import Billboards from "./pages/Billboards";
import PylonSigns from "./pages/PylonSigns";
import WallMountedSigns from "./pages/WallMountedSigns";
import MonumentSigns from "./pages/MonumentSigns";
import ShopfrontSignage from "./pages/ShopfrontSignage";
import ThreeDLettering from "./pages/ThreeDLettering";
import Lightboxes from "./pages/Lightboxes";
import LEDDigitalSigns from "./pages/LEDDigitalSigns";

// Indoor Signage
import ReceptionSigns from "./pages/ReceptionSigns";
import WallMuralsVinylDecals from "./pages/WallMuralsVinylDecals";
import DirectorySigns from "./pages/DirectorySigns";
import WayfindingSignage from "./pages/WayfindingSignage";
import AcrylicGlassMountedOfficeSigns from "./pages/AcrylicGlassMountedOfficeSigns";
import RetailPOSSignage from "./pages/RetailPOSSignage";
import HangingSigns from "./pages/HangingSigns";

// Window & Door Signage
import VinylLettering from "./pages/VinylLettering";
import PerforatedWindowGraphics from "./pages/PerforatedWindowGraphics";
import FrostedVinyl from "./pages/FrostedVinyl";
import ContraVisionDecals from "./pages/ContraVisionDecals";

// Vehicle Branding
import CarMagnets from "./pages/CarMagnets";
import VinylCutDecals from "./pages/VinylCutDecals";
import FullPartialVehicleWraps from "./pages/FullPartialVehicleWraps";
import FleetBranding from "./pages/FleetBranding";

// Large Format Printing
import PVC from "./pages/PVC";
import Stickers from "./pages/Stickers";
import Banners from "./pages/Banners";
import Wallpapers from "./pages/Wallpapers";

import ScrollToHashElement from "./components/ScrollToHashElement";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <MainLayout>
        <ScrollToTop />
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* About US */}
          <Route path="/about" element={<About />} />

          {/* Outdoor Signage */}
          <Route path="/billboards" element={<Billboards />} />
          <Route path="/pylon-signs" element={<PylonSigns />} />
          <Route path="/wall-mounted-signs" element={<WallMountedSigns />} />
          <Route path="/monument-signs" element={<MonumentSigns />} />
          <Route path="/shopfront-signage" element={<ShopfrontSignage />} />
          <Route path="/3d-lettering" element={<ThreeDLettering />} />
          <Route path="/lightboxes" element={<Lightboxes />} />
          <Route path="/led-digital-signs" element={<LEDDigitalSigns />} />

          {/* Indoor Signage */}
          <Route path="/reception-signs" element={<ReceptionSigns />} />
          <Route
            path="/wall-murals-vinyl-decals"
            element={<WallMuralsVinylDecals />}
          />
          <Route path="/directory-signs" element={<DirectorySigns />} />
          <Route path="/wayfinding-signage" element={<WayfindingSignage />} />
          <Route
            path="/acrylic-glass-mounted-office-signs"
            element={<AcrylicGlassMountedOfficeSigns />}
          />
          <Route path="/retail-pos-signage" element={<RetailPOSSignage />} />
          <Route path="/hanging-signs" element={<HangingSigns />} />

          {/* Window & Door Signage */}
          <Route path="/vinyl-lettering" element={<VinylLettering />} />
          <Route
            path="/perforated-window-graphics"
            element={<PerforatedWindowGraphics />}
          />
          <Route path="/frosted-vinyl" element={<FrostedVinyl />} />
          <Route
            path="/contra-vision-decals"
            element={<ContraVisionDecals />}
          />

          {/* Vehicle Branding */}
          <Route path="/car-magnets" element={<CarMagnets />} />
          <Route path="/vinyl-cut-decals" element={<VinylCutDecals />} />
          <Route
            path="/full-partial-vehicle-wraps"
            element={<FullPartialVehicleWraps />}
          />
          <Route path="/fleet-branding" element={<FleetBranding />} />

          {/* Large Format Printing */}
          <Route path="/pvc" element={<PVC />} />
          <Route path="/stickers" element={<Stickers />} />
          <Route path="/banners" element={<Banners />} />
          <Route path="/wallpapers" element={<Wallpapers />} />

          {/* Projects */}
          <Route path="/projects" element={<Projects />} />

          {/* Contact */}
          <Route path="/contact" element={<ContactUsPage />} />

          {/* 404 Catch-All Route (must be last) */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* This handles smooth scrolling on hash changes */}
        <ScrollToHashElement />

        <WhatsappButton />
        <Footer />
      </MainLayout>
    </Router>
  );
};

export default App;
