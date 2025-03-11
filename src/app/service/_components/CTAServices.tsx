"use client";

import { Cover } from "@/components/ui/cover";
import { motion } from "framer-motion";
import Link from "next/link";

const CTAServices = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-6  text-[#272727] rounded-2xl shadow-lg">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Join the businesses that trust <Cover>ByteForge!</Cover> <br />
        Let’s create success together!"
      </motion.h2>
      <motion.p
        className="text-lg md:text-xl mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Get in Touch Today!
      </motion.p>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Link
          href="/contact"
          className="bg-white text-[#272727] font-semibold text-lg px-6 py-3 rounded-full shadow-md hover:bg-[#272727]/10 transition duration-300"
        >
          Contact Us
        </Link>
      </motion.div>
    </section>
  );
};

export default CTAServices;
