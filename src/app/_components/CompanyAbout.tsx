"use client";

import { GridPattern } from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import GridBg from "./GridBg";

const CompanyAbout = () => {
  return (
    <GridBg>
      <section>
        <div className="container mx-auto px-10 py-10 md:px-24 md:py-24 ">
          <div className="bg-white p-4 rounded-lg shadow-lg border md:mx-7 ">
            <p
              className={` text-[#272727] motion-preset-focus text-light text:2xl md:text-3xl text-center `}
            >
              ByteForge is a leading technology consulting firm specializing in
              delivering innovative and scalable digital solutions. Our
              expertise spans{" "}
              <span className="font-semibold">across multiple industries</span>,
              helping businesses optimize their technology strategies, enhance
              efficiency, and drive digital transformation.
            </p>
          </div>
        </div>
      </section>
    </GridBg>
  );
};

export default CompanyAbout;
