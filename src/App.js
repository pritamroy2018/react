import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import {Routes, Route} from 'react-router-dom';
import Plan from "./pages/Plan";
import Howitwork from "./pages/Howitwork";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/how-it-works" element={<Howitwork />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>     
      <Footer />
    </div>
  );
}


export default App;
