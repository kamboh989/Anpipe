import { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Background3D from "./components/3d/Background3D";
import FeaturesSection from "./pages/slider/FeaturesSection";

import SlideMain from "./pages/slider/SlideMain";
import Profile from "./pages/Profile/Profile";

// Lazy load deeper sections
const Product = lazy(() => import("./pages/product/Product"));
const Clients = lazy(() => import("./pages/clients/Clients"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Catalogue = lazy(() => import("./pages/catalogue/Catalogue"));

// Loading component
const SectionLoader = () => (
  <div className="w-full h-96 flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// --- App Structure ---

function App() {
  const [activePreset, setActivePreset] = (useState<'hero' | 'products' | 'features' | 'profile' | 'clients' | 'contact' | 'catalogue'>('hero'));

  useEffect(() => {
    // Handle catalogue route change
    if (window.location.pathname === '/catalogue') {
      setActivePreset('catalogue');
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const mapping: Record<string, any> = {
            'home': 'hero',
            'about': 'profile',
            'products': 'products',
            'features': 'features',
            'clients': 'clients',
            'contact': 'contact'
          };
          if (mapping[id]) setActivePreset(mapping[id]);
        }
      });
    }, { threshold: 0.3, rootMargin: '-10% 0px -10% 0px' });

    ['home', 'about', 'products', 'features', 'clients', 'contact'].forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen">
        {/* Base Layer: 3D Background */}
        <div className="fixed inset-0 z-0">
          <Background3D preset={activePreset} />
        </div>

        {/* Content Layer: All UI elements */}
        <div className="relative z-10 pointer-events-none">
          <Header />
          <main className="pt-20 pointer-events-auto">
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

                      <div id="features">
                        <FeaturesSection />
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
      </div>
    </Router>
  );
}

export default App;
