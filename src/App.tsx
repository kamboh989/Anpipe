import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// Lazy load sections
const SlideMain = lazy(() => import("./pages/slider/SlideMain"));
const Profile = lazy(() => import("./pages/Profile/Profile").then(m => ({ default: m.Profile })));
const Product = lazy(() => import("./pages/product/Product"));
const Clients = lazy(() => import("./pages/clients/Clients").then(m => ({ default: m.Clients })));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Catalogue = lazy(() => import("./pages/catalogue/Catalogue").then(m => ({ default: m.Catalogue })));

// Loading component
const SectionLoader = () => (
  <div className="w-full h-96 flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        <Header />
        
        {/* Add padding-top to account for fixed header height */}
        <main className="pt-20">
          <Suspense fallback={<SectionLoader />}>
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
                  </>
                }
              />

              {/* Catalogue route */}
              <Route path="/catalogue" element={<Catalogue />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
