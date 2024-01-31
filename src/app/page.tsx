import About from '@/components/About';
import Hero from '@/components/Hero';
import Project from '@/components/Project';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
        <Nav />
        <section id="Herosection">
          <Hero />
        </section>
        <section id="Aboutsection">
          <About />
        </section>
        <section id="Projectsection">
          <Project />
        </section>
        <section id="Contactsection">
          <Contact />
        </section>
        <Footer />
    </main>
    
  );
}