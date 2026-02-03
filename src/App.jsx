import { useEffect, useState, Suspense } from "react";
import Background3D from "./components/Background3D";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import GetInTouch from "./components/getInTouch";
import Certifications from "./components/certifications";
import SectionSeparator from "./components/SectionSeparator";
import Preloader from "./components/Preloader";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Optional: You could track window load here if you wanted the preloader to wait
    // But for smooth 0-100 animation, we'll let Preloader drive the timing.
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <Background3D />
      </Suspense>
      {loading ? (
        <Preloader onComplete={() => setLoading(false)} />
      ) : (
        <div>
          <Navbar />
          <Hero />
          <SectionSeparator />
          <About />
          <SectionSeparator />
          <Education />
          <SectionSeparator />
          <Skills />
          <SectionSeparator />
          <Projects />
          <SectionSeparator />
          <Certifications />
          <SectionSeparator />
          <GetInTouch />
          <SectionSeparator />
          <Contact />
        </div>
      )}
    </>
  );
}
