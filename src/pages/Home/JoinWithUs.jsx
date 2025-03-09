import React from "react";
import { motion } from "framer-motion";

const JoinWithUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex flex-col lg:flex-row justify-center items-center min-h-[80vh] bg-blue-900 text-white px-5 lg:px-10 py-10"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60  "
        style={{
          backgroundImage:
            "url('https://www.act.com.ng/uploads/industry/1572536744ezgif-1-3f10b40ebe32-1544776810367.gif')",
        }}
      ></div>

      {/* Content Box */}
      <div className="relative z-10 bg-white/10 p-8 rounded-lg shadow-lg w-full max-w-3xl text-center backdrop-blur-lg">
        <h2 className="text-4xl font-bold text-white mb-4">Join With Us</h2>

        {/* Job Listings */}
        <ul className="text-lg text-white mb-6 space-y-2">
          <li>
            🔹 <strong>Office Staff</strong>
          </li>
          <li>
            🔹 <strong>Assistant Administration</strong>
          </li>
          <li>
            🔹 <strong>Management Section</strong>
          </li>
          <li>
            🔹 <strong>Stock Attender</strong>
          </li>
          <li>
            🔹 <strong>HR Manager</strong>
          </li>
        </ul>

        {/* Qualification & Salary */}
        <p className="text-white text-lg mb-2">
          <strong>Qualification:</strong> SSLC / +2 / Degree / ITI / Diploma
        </p>
        <p className="text-white text-lg mb-2">
          <strong>Salary:</strong> ₹20,000 - ₹30,000
        </p>
        <p className="text-white text-lg mb-4">✅ Free Food & Accommodation</p>
        <p className="text-white text-lg mb-6">🔹 Age Below 29</p>

        {/* Apply Now */}
        <motion.a
          href="tel:6282425353"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300"
        >
          📞 Apply Now: 6282425353
        </motion.a>
      </div>
    </motion.div>
  );
};

export default JoinWithUs;
