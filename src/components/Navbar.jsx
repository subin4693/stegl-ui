import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-bg.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="p-2 md:p-5  md:px-10 shadow flex justify-between items-center sticky top-0 right-0 left-0 backdrop-blur-3xl bg-white/10 z-[100] bg-gradient-to-b from-blue-900/90 to-blue-700/90"
    >
      {/* Logo */}
      <motion.div whileHover={{ scale: 1.1 }} className=" cursor-pointer">
        <img src={logo} className="w-20 h-12 object-contain" alt="Logo" />
        Lacta corporate
      </motion.div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Navigation Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="hidden lg:flex gap-6 text-lg font-medium"
      >
        {["Home", "About us", "Contact us", "Careers", "Services"].map(
          (item, index) => (
            <motion.a
              key={index}
              whileHover={{ scale: 1.1, color: "#fff" }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-200 after:transition-all after:duration-300 hover:after:w-full text-blue-100"
            >
              {item}
            </motion.a>
          )
        )}
      </motion.div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute top-16 left-0 w-full bg-white z-[100] shadow-md p-5 flex flex-col gap-4 text-lg font-medium lg:hidden"
        >
          {["Home", "About us", "Contact us", "Careers", "Services"].map(
            (item, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.1, color: "#1d4ed8" }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer text-center "
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </motion.a>
            )
          )}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
// "url('https://portal.engineersaustralia.org.au/sites/default/files/Drone_illo_200117.gif')",
// https://www.act.com.ng/uploads/industry/1572536744ezgif-1-3f10b40ebe32-1544776810367.gif
