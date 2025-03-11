import { Metadata } from "next";
import CultureSection from "./_components/CultureSection";
import TimelineCompany from "./_components/TimelineCompany";

export const metadata: Metadata = {
  title: "About Us - ByteForge",
  description:
    "Learn more about ByteForge, our mission, values, and commitment to delivering innovative digital solutions.",
};

const about = () => {
  return (
    <section className="container mx-auto p-4 mt-16">
      <TimelineCompany />
      <CultureSection />
    </section>
  );
};

export default about;
