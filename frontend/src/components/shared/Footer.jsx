import React from "react";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  // Define navigation handlers
  const handleFaqClick = (event) => {
    event.preventDefault();
    navigate('/FaqPage'); // Navigate to the FAQ page
  };

  const handleHelpCenterClick = (event) => {
    event.preventDefault();
    navigate('/HelpCenterPage'); // Navigate to the Help Center page
  };

  const handleContactClick = (event) => {
    event.preventDefault();
    navigate('/ContactForm'); // Navigate to the ContactForm page
  };

  return (
    <footer className="bg-[#34495e] text-[#ecf0f1] py-2 px-5 w-full left-0 overflow-hidden">
      <div className="w-full flex flex-col shadow-md">
        <div className="flex justify-between flex-wrap">
          <div className="flex-1 min-w-[220px] my-2 transition-transform transform hover:translate-y-[-5px] hover:shadow-md">
            <h6 className="text-xl font-bold mb-3 relative">
              About Us
              <span className="block w-[50px] h-[3px] bg-yellow-400 mt-1"></span>
            </h6>
            <ul className="list-none p-0">
              <li className="mb-2">
                <a href="#" className="text-[#ecf0f1] no-underline transition-all hover:text-yellow-400 hover:scale-105" >Our Story</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[#ecf0f1] no-underline transition-all hover:text-yellow-400 hover:scale-105" >Our Team</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[#ecf0f1] no-underline transition-all hover:text-yellow-400 hover:scale-105" >Testimonials</a>
              </li>
              <li className="mb-2">
                <a href="#" onClick={handleContactClick} className="text-[#ecf0f1] no-underline transition-all hover:text-yellow-400 hover:scale-105">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="flex-1 min-w-[220px] my-2 transition-transform transform hover:translate-y-[-5px] hover:shadow-md">
            <h6 className="text-xl font-bold mb-3 relative">
              Services
              <span className="block w-[50px] h-[3px] bg-yellow-400 mt-1"></span>
            </h6>
            <ul className="list-none p-0">
              <li className="mb-2">
                <a href="#" className="text-[#ecf0f1] no-underline transition-all hover:text-yellow-400 hover:scale-105">Job Listings</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[#ecf0f1] no-underline transition-all hover:text-yellow-400 hover:scale-105">Employer Services</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[#ecf0f1] no-underline transition-all hover:text-yellow-400 hover:scale-105">Career Advice</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[#ecf0f1] no-underline transition-all hover:text-yellow-400 hover:scale-105">Blog</a>
              </li>
            </ul>
          </div>
          <div className="flex-1 min-w-[220px] my-2 transition-transform transform hover:translate-y-[-5px] hover:shadow-md">
            <h6 className="text-xl font-bold mb-3 relative">
              Resources
              <span className="block w-[50px] h-[3px] bg-yellow-400 mt-1"></span>
            </h6>
            <ul className="list-none p-0">
              <li className="mb-2">
                <a href="#" onClick={handleFaqClick} className="text-[#ecf0f1] no-underline transition-all hover:text-yellow-400 hover:scale-105">FAQ</a>
              </li>
              <li className="mb-2">
                <a href="#" onClick={handleHelpCenterClick} className="text-[#ecf0f1] no-underline transition-all hover:text-yellow-400 hover:scale-105">Help Center</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[#ecf0f1] no-underline transition-all hover:text-yellow-400 hover:scale-105">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[#ecf0f1] no-underline transition-all hover:text-yellow-400 hover:scale-105">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="flex-1 min-w-[220px] my-2 transition-transform transform hover:translate-y-[-5px] hover:shadow-md">
            <h6 className="text-xl font-bold mb-3 relative">
              Follow Us
              <span className="block w-[50px] h-[3px] bg-yellow-400 mt-1"></span>
            </h6>
            <ul className="list-none p-0">
              <li className="mb-2">
                <a href="#" className="text-[#ecf0f1] no-underline transition-all hover:text-yellow-400 hover:scale-105">Facebook</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[#ecf0f1] no-underline transition-all hover:text-yellow-400 hover:scale-105">Twitter</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[#ecf0f1] no-underline transition-all hover:text-yellow-400 hover:scale-105">LinkedIn</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[#ecf0f1] no-underline transition-all hover:text-yellow-400 hover:scale-105">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-t-2 border-[#2c3e50] my-5" />

        <div className="flex justify-between items-center flex-wrap mt-5">
          <span className="text-sm opacity-80">&copy; 2024 Job-Exchange. All rights reserved.</span>
          <div className="flex">
            <a href="#" className="text-[#ecf0f1] ml-3 text-2xl transition-all hover:text-yellow-400 hover:scale-110">
              <i className="ri-facebook-circle-line"></i>
            </a>
            <a href="#" className="text-[#ecf0f1] ml-3 text-2xl transition-all hover:text-yellow-400 hover:scale-110">
              <i className="ri-twitter-line"></i>
            </a>
            <a href="#" className="text-[#ecf0f1] ml-3 text-2xl transition-all hover:text-yellow-400 hover:scale-110">
              <i className="ri-linkedin-line"></i>
            </a>
            <a href="#" className="text-[#ecf0f1] ml-3 text-2xl transition-all hover:text-yellow-400 hover:scale-110">
              <i className="ri-instagram-line"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
