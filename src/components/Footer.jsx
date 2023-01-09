import React from "react";
import {BsFacebook, BsInstagram, BsLinkedin, BsTwitter} from 'react-icons/bs'
const Footer = () => {
  return(
  <>
  <div className="bg-gray-300 ">
    <div className="m-5 pt-10 pb-10">
    <h2 className="text-4xl font-bold text-center hover:text-orange-600">
        Best Food - Get Food Delivered without Shipping Charges ❤️ 
    </h2>
    <ul className="mt-6 text-xl ">
        <li>Contact Us</li>
        <li>About Us</li>
        <li>FAQ's</li>
        <li> Something for our Imporvement</li>
    </ul>
    <div className="flex  mt-8 justify-evenly">
        <a href="https://www.instagram.com/tushar_utane/" target="_blank"><BsInstagram className="text-4xl hover:text-orange-600"/></a>
        <a href="https://www.facebook.com/tushar.utane.3/" target="_blank"><BsFacebook className="text-4xl hover:text-orange-600"/></a>
        <a href="https://twitter.com/home" target="_blank"><BsTwitter className="text-4xl hover:text-orange-600"/></a>
        <a href="https://www.linkedin.com/in/tushar-utane-492b00260/" target="_blank"><BsLinkedin className="text-4xl hover:text-orange-600"/></a>
    </div>
    </div>
  </div>
  </>
  )
};

export default Footer;
