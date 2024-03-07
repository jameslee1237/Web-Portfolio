'use client';
import About from '@/components/About';
import Hero from '@/components/Hero';
import Project from '@/components/Project';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import { useState } from 'react';
import MobileNav from '@/components/MobileNav';

export default function Home() {

  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
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