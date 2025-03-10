import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import image from "@/assets/img4.jpg";

const sentences = [
  "We specialize in high-quality liquid consumer products like detergents.",
  "Our focus is on advanced formulation and strict quality control.",
  "We ensure regulatory compliance for safe and effective products.",
  "Sustainability is key—we use eco-friendly ingredients and recyclable packaging.",
  "Our goal is to meet both consumer expectations and environmental standards.",
];

const Banner = () => {
  const [currentSentence, setCurrentSentence] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSentence((prev) => (prev + 1) % sentences.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-[90vh] flex justify-center items-center text-center px-5 lg:px-10"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 to-white/20"></div>

      <motion.div className="relative z-10 w-full max-w-3xl">
        <motion.h2
          key={currentSentence}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl lg:text-6xl font-bold text-white drop-shadow-lg px-5 py-3 rounded-lg"
        >
          {sentences[currentSentence]}
        </motion.h2>
      </motion.div>
    </motion.div>
  );
};

export default Banner;
