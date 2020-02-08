import React from 'react';
import { Header } from '../../containers/Header/Header';
import { About } from '../../components/About/About';
import { Info } from '../../components/Info/Info';
import { Projects } from '../../components/Projects/Projects';
import { OpinionsCarousel } from '../../components/OpinionsCarousel/OpinionsCarousel';
import { LogoContainer } from '../../components/LogoContainer/LogoContainer';
import { LatestBlog } from '../../components/LatestBlog/LatestBlog';
import { Contact } from '../../components/Contact/Contact';
import { Footer } from '../../components/Footer/Footer';

export const Layout = () => {
  return (
    <div>
      <Header />
      <About />
      <Info />
      <Projects />
      <OpinionsCarousel />
      <LogoContainer />
      <LatestBlog />
      <Contact />
      <Footer />
    </div>
  );
};
