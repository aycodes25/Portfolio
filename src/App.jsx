import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Preloader from './components/Preloader';
import Hero from './components/Hero';
import Services from './components/Services';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 250);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Preloader />
      <main>
        <Hero />
        <Services />
        <Experience />
        <Skills />
        <Projects />
        <Education />
      </main>
      <Footer />

      <button
        className={`scroll-top-button ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp size={22} />
      </button>
    </div>
  );
}

export default App;
