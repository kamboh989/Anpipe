import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Clients } from "./pages/clients/Clients";
import Contact from "./pages/contact/Contact";
import Product from "./pages/product/Product";
import { Profile } from "./pages/Profile/Profile";
import SlideMain from "./pages/slider/SlideMain";

function App() {
  return (
    <>
      <Header />

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

      <div id="catalogue">
        <Footer />
      </div>
    </>
  );
}

export default App;
