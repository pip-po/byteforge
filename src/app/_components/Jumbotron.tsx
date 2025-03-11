"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const images = ["/discuss.png", "/jumbo2.jpg", "/jumbo3.jpg"];

const Jumbotron = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Ubah setiap 3 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full">
      <div>
        <AnimatePresence>
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
                priority
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
        </AnimatePresence>
      </div>
      <div>
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold max-w-7xl mx-auto text-center pt-30 md:pt-40 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white dark:from-neutral-800 dark:via-white dark:to-white">
          Empowering your businesses
          <br />
          with cutting-edge technology
          <br />
          solutions
        </h1>
        <div className="flex relative justify-center items-center gap-2 mt-10 z-10">
          <Link href="/service" scroll={false}>
            <Button className="bg-[#ffffff] hover:motion-preset-pop text-[#272727] border border-transparent hover:border-[#ffffff] hover:bg-transparent hover:text-[#ffffff] font-medium pointer-events-auto p-4">
              Start Now
            </Button>
          </Link>
          <Button className="bg-transparent hover:motion-preset-pop border text-[#ffffff] border-[#ffffff] hover:text-[#272727] hover:bg-white">
            <Link href="/#why-choose-us" scroll={true}>
              Learn More
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
