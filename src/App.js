import { Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Features from "./components/Features";
import OmniChannel from "./components/OmniChannel";
import Products from "./components/Products";
import ManagedServices from "./components/ManagedServices";
import CampaignManager from "./components/CampaignManager";
import Service from "./components/Service";
import ImageSection from "./components/ImageSection";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

import Service3 from "./components/Service3";
import Service2 from "./components/Service2";
import Service4 from "./components/Service4";
import TargtAudience from "./components/TargetAudience";
import Products2 from "./components/Products-2";
import Products3 from "./components/Products-3";

function App() {
  return (
    <>
      <header className="header">
        <Nav />
      </header>
      <Routes>
        <Route
          path=""
          element={
            <>
              <Home />
              <TargtAudience />
              <Products3 />

              <Products2 />
              <Features render={() => <Features scrollTo="#features" />} />
              <Products />
              <ManagedServices />
              <CampaignManager />
              {/* <Service3 /> */}
              <Pricing />
              <OmniChannel />
              <ImageSection />
              {/* <Testimonials /> */}
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
