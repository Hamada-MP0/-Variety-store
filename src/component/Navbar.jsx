/* eslint-disable react/prop-types */
import Logo from "../assets/logo.png";
 import { IoMdSearch } from "react-icons/io";
 import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import   { useState } from "react";
import { motion } from "framer-motion";
const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "services ",
    link: "https://ag-gren.com/business?utm_source=google&utm_campaign={campaign_id}&utm_term=marketing&unique=8642066698950647537&gad_source=5&gclid=EAIaIQobChMI66mvhZq8iwMV1peDBx3vJhAqEAAYASAAEgL45vD_BwE",
  },
  {
    id: 3,
    name: "shoppingooo",
    link: "https://shoppingooo.com/?srsltid=AfmBOorIdfiHMGw9sPUAqvPzzoabTqikYudflXKCY5k3pvtiN20pE0dZ",
  },
  {
    id: 3,
    name: "amazon",
    link: "https://www.amazon.com/",
  },
  {
    id: 3,
    name: "Electronics",
    link: "https://cairosales.com/en/?gad_source=5&gclid=EAIaIQobChMImcjay5m8iwMVSJSDBx0UGg-DEAAYASAAEgJjfvD_BwE",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup ,handleLoginPopup,handleSignPopup}) => {

  const [isFocused, setIsFocused] = useState(false);
  // دالة التبديل بين الفتح والإغلاق

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className=" bg-primary/40 py-2">
        <div className=" head container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              Shopsy
            </a>
          </div>

          {/* search bar */}
          <div className=" searsh flex justify-between items-center gap-4">
            {isFocused && (
              <div
                className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
                onClick={() => setIsFocused(false)} // إغلاق البحث عند النقر خارج input
              />
            )}

            {/* مربع البحث */}
       <div className = "relative"> 
       <motion.input
              initial={{ width: "300px", opacity: 0.8 }}
              animate={
                  isFocused
                  ? {
                      width: "50%",
                      opacity: 1,
                      scale: 1.1,
                      position: "fixed",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: 50,
                    }
                  : {}
                  
              }
              transition={{ duration: 0.3, ease: "easeInOut" }}
              type="text"
              placeholder="Search..."
              className=" w-[200px]  rounded-full border border-gray-300 px-3 py-2 transition-all duration-300 focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-gray-800 z-50 text-black"
              onFocus={() => setIsFocused(true)}
            />
            <IoMdSearch className="text-gray-500 absolute top-1/2 -translate-y-1/2 right-3" />
            
     
              
       </div>
            {/* order button */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex contmap justify-center  grid grid-cols-[1fr_10fr_1fr] w-[100%]  ">
      <button onClick={() => handleLoginPopup()} className="res login mx-[5px] ml-[50px] bg-primary text-white px-3  rounded-full hover:text-black hover:bg-slate-500 transition-all duration-200">Login</button>

        <ul className=" nav sm:flex hidden items-center gap-4  flex justify-center">
          {Menu.map((data) => (
            <li  key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200 z-index-50"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
      
        </ul>
        <button  onClick={() => handleSignPopup()} className=" sign res mx-[5px] mr-[50px] bg-primary text-white px-3  rounded-full hover:text-black hover:bg-slate-500 transition-all duration-200">Sign Up</button>
{/* 
        <div className="flex   items-center justify-between absolute min-h-10 w-full ">
  </div> */}
      </div>
    </div>
  );
};

export default Navbar;
