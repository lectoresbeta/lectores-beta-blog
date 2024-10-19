import React, { useRef } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CookieConsent from '../CookieConsent/CookieConsent';

const Layout = () => {
  const howItWorksSectionRef = useRef<HTMLDivElement>(null);
  const testimonialsSectionRef = useRef<HTMLDivElement>(null);
  const resourcesSectionRef = useRef<HTMLDivElement>(null);
  const prefooterRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    if (section === 'howItWorks' && howItWorksSectionRef.current) {
      howItWorksSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'testimonials' && testimonialsSectionRef.current) {
      testimonialsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'resources' && resourcesSectionRef.current) {
      resourcesSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'prefooter' && prefooterRef.current) {
      prefooterRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Header scrollToSection={scrollToSection} />
      <main>
      <Outlet context={{ howItWorksSectionRef, testimonialsSectionRef, resourcesSectionRef, prefooterRef, scrollToSection }} />
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Layout;