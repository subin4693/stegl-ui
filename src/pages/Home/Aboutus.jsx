import React from "react";
import { motion } from "framer-motion";
import image from "@/assets/img1.jpg";
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Aboutus = () => {
  return (
    <div className="px-5 lg:px-20 py-10">
      {/* Title */}
      <motion.h1
        initial="hidden"
        whileInView="visible"
        // viewport={{ once: true }}
        variants={textVariants}
        className="text-4xl lg:text-5xl text-center font-bold mb-10 text-blue-900"
      >
        About Us
      </motion.h1>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row   gap-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.8 } }}
          // viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <img
            src={image}
            className="w-full h-auto rounded-lg  "
            alt="About Us"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          // viewport={{ once: true }}
          variants={textVariants}
          className="w-full lg:w-1/2 text-lg "
        >
          <p>
            We specialize in highquality products, variety of steel
            products,liquid products like detergents, medical equipments
          </p>

          <p className="mt-4">
            A household and liquid manufacturing company specializes in
            producing liquid-based consumer products such as detergents,
            dishwashing liquids, fabric softeners and other cleaning or personal
            care items. These companies focus on formulation, quality control,
            packaging, and regulatory compliance to ensure product safety and
            effectiveness. They often incorporate sustainability practices, such
            as eco-friendly ingredients and recyclable packaging, to meet
            consumer and environmental standards.
          </p>
        </motion.div>

        {/* Image Section */}
      </div>
    </div>
  );
};

export default Aboutus;
