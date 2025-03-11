import React from "react";
import ServicesSection from "./_components/ServiceSection";
import Pricing from "./_components/Pricing";
import TestimonialCarousel from "../_components/TestimonialCarousel";
import CTAServices from "./_components/CTAServices";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - ByteForge",
  description:
    "Explore ByteForge's top-tier services, from software development to AI-driven solutions.",
};

const service = () => {
  return (
    <div>
      <ServicesSection />
      <Pricing />
      <TestimonialCarousel />
      <CTAServices />
    </div>
  );
};

export default service;
