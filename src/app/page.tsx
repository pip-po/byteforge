import { Metadata } from "next";
import CompanyAbout from "./_components/CompanyAbout";
import CTASection from "./_components/CTASection";
import Jumbotron from "./_components/Jumbotron";
import PhotoServide from "./_components/PhotoServide";
import StatTickers from "./_components/StatTickers";
import TestimonialCarousel from "./_components/TestimonialCarousel";
import WhyChooseUs from "./_components/WhyChooseUs";
import Homepage from "./_components/Homepage";

export const metadata: Metadata = {
  title: "ByteForge - Empowering Innovation",
  description:
    "Welcome to ByteForge, where we build cutting-edge digital solutions to accelerate your business growth.",
};

export default function Home() {
  return (
    <div className="mt-10 md:mt-20">
      <Jumbotron />
      <Homepage />
    </div>
  );
}
