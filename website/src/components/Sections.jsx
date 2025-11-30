import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import AestheticSection from "./AestheticSection";
import ServicesSection from "./ServicesSection";
import WhyChooseUs from "./WhyChooseUs";
import AllProducts from "./AllProducts";
import Testimonials from "./Testimonials";
import DiscountBanner from "./DiscountBanner";
import Footer from "./Footer";

export default function Sections() {
  return (
    <>
      <Header />
      <HeroSection />
      <AestheticSection />
      <ServicesSection />
      <WhyChooseUs />
      <AllProducts />
      <Testimonials />
      <DiscountBanner />
      <Footer />
    </>
  );
}
