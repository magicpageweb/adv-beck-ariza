import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Values from './components/Values';
import PracticeAreas from './components/PracticeAreas';
import Professionals from './components/Professionals';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-navy-900">
      <Header />
      <Hero />
      <About />
      <Values />
      <PracticeAreas />
      <Professionals />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
