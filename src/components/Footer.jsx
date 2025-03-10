import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import logo from "@/assets/logo-bg.png";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-14 px-5 lg:px-28">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start space-y-3">
          <div className="flex items-center ">
            <img src={logo} alt="Logo" className="w-36" />
            <h2 className="text-xl font-semibold text-white">
              Lacta Corporate
            </h2>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Your trusted household & liquid manufacturing company.
          </p>
        </div>

        <div className="flex flex-col space-y-3">
          <h2 className="text-lg font-semibold text-white">Quick Links</h2>
          {["Home", "About Us", "Services", "Careers", "Contact Us"].map(
            (link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className="text-blue-200 hover:text-white transition-colors"
              >
                {link}
              </a>
            )
          )}
        </div>

        <div className="flex flex-col space-y-3 items-center md:items-start">
          <h2 className="text-lg font-semibold text-white">Contact Us</h2>
          <p className="text-gray-300">📞 +91 88481 98144</p>
          <div className="flex space-x-4 mt-3">
            {[
              { icon: FaFacebookF, link: "#", color: "hover:text-blue-500" },
              { icon: FaTwitter, link: "#", color: "hover:text-blue-400" },
              { icon: FaInstagram, link: "#", color: "hover:text-pink-500" },
              { icon: FaLinkedin, link: "#", color: "hover:text-blue-600" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className={`text-gray-300 ${item.color} transition-colors`}
              >
                <item.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm mt-10 border-t border-gray-700 pt-5">
        © {new Date().getFullYear()} Eclasia. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
