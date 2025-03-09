import React from "react";
import { motion } from "framer-motion";

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
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.8 } }}
          // viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <img
            src="https://media.licdn.com/dms/image/v2/D5612AQG1d_PdueYTSw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1682913545543?e=2147483647&v=beta&t=nrtwZdq14_HS3678rfpU_X7iVTDGdERUPMF6ZZRYHKc"
            className="w-full h-auto rounded-lg  "
            alt="About Us"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          // viewport={{ once: true }}
          variants={textVariants}
          className="w-full lg:w-1/2 text-lg leading-relaxed"
        >
          <p>
            We specialize in manufacturing high-quality **liquid-based consumer
            products**, including:
          </p>
          <ul className="list-disc ml-6 mt-3 space-y-2">
            <li>Detergents & Dishwashing Liquids</li>
            <li>Fabric Softeners & Personal Care Items</li>
            <li>Household Cleaning Solutions</li>
          </ul>

          <p className="mt-4">
            Our focus includes **advanced formulation, quality control, and
            sustainable packaging** to ensure **product safety &
            effectiveness**.
          </p>

          <p className="mt-4">
            We integrate **eco-friendly ingredients** and promote **recyclable
            packaging** to meet consumer & environmental standards.
          </p>
        </motion.div>

        {/* Image Section */}
      </div>
    </div>
  );
};

export default Aboutus;
