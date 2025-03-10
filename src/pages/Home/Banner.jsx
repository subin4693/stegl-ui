import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import image from "@/assets/img4.jpg";

const Banner = () => {
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl lg:text-6xl font-bold text-white drop-shadow-lg px-5 py-3 rounded-lg"
        >
          We specialize in highquality products, variety of steel
          products,liquid products like detergents, medical equipments
        </motion.h2>
      </motion.div>
    </motion.div>
  );
};

export default Banner;
