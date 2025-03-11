"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import React, { useMemo } from "react";

// Variants untuk animasi framer-motion
const textVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const buttonVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { delay: 0.4, duration: 0.5, ease: "easeOut" },
  },
};

const CTASection = React.memo(() => {
  // Gunakan useMemo untuk komponen yang statis
  const ctaContent = useMemo(
    () => (
      <section className="flex flex-col mt-10 items-center justify-center text-center py-20 px-6 bg-[#272727] text-white shadow-lg ">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Ready to take your business to the next level?
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mb-6"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Get in Touch Today!
        </motion.p>
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Link
            href="/contact"
            className="bg-white text-[#272727] font-semibold text-lg px-6 py-3 rounded-full shadow-md transition duration-300 hover:bg-gray-200 hover:scale-105"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    ),
    []
  );

  return ctaContent;
});

export default CTASection;
