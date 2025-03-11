"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const images = ["/discuss.png", "/jumbo2.jpg", "/jumbo3.jpg"];

const Jumbotron = () => {
  const [index] = useState(0);

  return (
    <section className="relative w-full">
      <div>
        {/* <AnimatePresence>
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: i === index ? 0 : 1 }}
              animate={{ opacity: i === index ? 1 : 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute w-full  h-[500px] md:h-[700px] z-0"
              style={{ zIndex: i === index ? 2 : 1 }}
            >
              <Image
                src={src}
                alt="gambar company"
                fill
                className="w-full  max-h-[500px] md:max-h-[650px] opacity-100 object-cover"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
                }}
              />
              <div
                className="absolute inset-0 bg-black/60"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
                }}
              ></div>
            </motion.div>
          ))}
        </AnimatePresence> */}
      </div>
      <div className="flex flex-col items-center w-full">
        {/* Preset fixed height to prevent layout shift */}
        <div className="min-h-[240px] md:min-h-[300px] lg:min-h-[320px] flex items-center justify-center">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold max-w-7xl mx-auto text-center relative z-20 py-6 bg-clip-text text-[#272727] dark:from-neutral-800 dark:via-white dark:to-white">
            Empowering your businesses
            <br />
            with cutting-edge technology
            <br />
            solutions
          </h1>
        </div>

        {/* Fixed height for buttons container */}
        <div className="flex relative justify-center items-center gap-2 mt-2 z-10 min-h-[60px]">
          <Link href="/service" scroll={false}>
            <Button className="bg-[#272727]  text-[#ffffff] border border-transparent hover:border-[#272727] hover:bg-transparent hover:text-[#272727] font-medium pointer-events-auto p-4">
              Start Now
            </Button>
          </Link>
          <Link href="/#why-choose-us" scroll={true}>
            <Button className="bg-transparent  border text-[#272727] border-[#272727] hover:text-[#ffffff] hover:bg-[#272727]">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
