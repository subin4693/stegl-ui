import React from "react";
import { motion } from "framer-motion";
import image from "@/assets/img3.jpg";

const ContactUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex   flex-col flex-col-reverse lg:flex-row justify-center items-center min-h-[80vh] bg-white px-5 lg:px-10 py-10"
    >
      <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0 hidden lg:flex">
        <img
          src={image}
          alt="Contact Us"
          className="w-full max-w-md lg:max-w-lg object-cover rounded-lg  "
        />
      </div>

      <div className="w-full lg:w-1/2 bg-white p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center lg:text-left">
          Get in Touch
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 text-lg mb-1">Name</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-lg mb-1">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-lg mb-1">Message</label>
            <textarea
              rows="4"
              className="w-full p-3 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300"
          >
            📩 Send Message
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactUs;
