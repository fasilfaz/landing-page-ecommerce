import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
import CallToActionSection from './CallToActionSection';
import FooterSection from './FooterSection';

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>Fashion & School Uniforms - Your One-Stop Shopping Destination</title>
        <meta 
          name="description" 
          content="Discover our premium fashion collection and school uniforms. Shop trendy dresses and quality school uniforms tailored for every institution. Quality, style, and comfort in one place." 
        />
        <meta property="og:title" content="Fashion & School Uniforms - Your One-Stop Shopping Destination" />
        <meta property="og:description" content="Discover our premium fashion collection and school uniforms. Shop trendy dresses and quality school uniforms tailored for every institution. Quality, style, and comfort in one place." />
      </Helmet>

      <main className="w-full min-h-screen overflow-y-auto ">
        <HeroSection />
        <FeatureSection />
        {/* <CallToActionSection /> */}
        <FooterSection />
      </main>
    </>
  );
};

export default LandingPage;