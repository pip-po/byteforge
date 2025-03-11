"use client";

import dynamic from "next/dynamic";

// import dynamic from "next/dynamic";
// import PhotoServide from "./PhotoServide";
// import CompanyAbout from "./CompanyAbout";
// import StatTickers from "./StatTickers";
// import WhyChooseUs from "./WhyChooseUs";
// import TestimonialCarousel from "./TestimonialCarousel";
// import CTASection from "./CTASection";

const PhotoServide = dynamic(() => import("./PhotoServide"), { ssr: false });
const CompanyAbout = dynamic(() => import("./CompanyAbout"), { ssr: false });
const StatTickers = dynamic(() => import("./StatTickers"), { ssr: false });
const WhyChooseUs = dynamic(() => import("./WhyChooseUs"), { ssr: false });
const TestimonialCarousel = dynamic(() => import("./TestimonialCarousel"), {
  ssr: false,
});
const CTASection = dynamic(() => import("./CTASection"), { ssr: false });

const Homepage = () => {
  return (
    <>
      <PhotoServide />
      <CompanyAbout />
      <StatTickers />
      <hr className="bg-transparent border-none" />
      <WhyChooseUs />
      <TestimonialCarousel />
      <CTASection />
    </>
  );
};

export default Homepage;
