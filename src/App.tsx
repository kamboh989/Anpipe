import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Clients } from "./pages/clients/Clients";
import Contact from "./pages/contact/Contact";
import Product from "./pages/product/Product";
import { Profile } from "./pages/Profile/Profile";
import SlideMain from "./pages/slider/SlideMain";
import { Catalogue } from "./pages/catalogue/Catalogue";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <div id="home">
                <SlideMain />
              </div>

              <div id="about">
                <Profile />
              </div>

              <div id="products">
                <Product />
              </div>

              <div id="clients">
                <Clients />
              </div>

              <div id="contact">
                <Contact />
              </div>

              <Footer />
            </>
          }
        />

        {/* Catalogue route */}
        <Route path="/catalogue" element={<Catalogue />} />
      </Routes>
    </Router>
  );
}

export default App;
