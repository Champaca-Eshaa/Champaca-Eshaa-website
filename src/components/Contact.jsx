import React from "react";
import useScrollAnimation from "../animations/useScrollAnimation";
import { BsInstagram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

import { TbBrandWhatsapp } from "react-icons/tb";

const Contact = () => {
  useScrollAnimation("rise-fade");
  return (
    <div
      id="contactUs"
      className=" text-white px-40 max-md:px-5 py-10 max-md:py-5 rise-fade"
    >
      {/* <p className='px-3'>Contact Us</p> */}
      <p className="font-bold text-amber-600 text-4xl py-3 ">
        Get In Touch With Us
      </p>
      <p className="md:w-1/2 text-base">
        Contact us for inquiries and to place orders. We will respond within 2
        working days. For immediate assistance, you can reach us via phone or
        follow us on our social media platforms.
      </p>
      <p className="py-3"> email: malini@champacaeshaa.in</p>
      <p className="py-3"> phone: +91 96000 05369</p>

      <div className="flex py-3 space-x-6">
        <a
          href="tel:9600005369"
          className="bg-amber-600 rounded-2xl p-3 md:px-5 flex items-center justify-center space-x-2 md:space-x-3 max-md:px-3"
        >
          <FaPhoneAlt />
          <p className="">Call us</p>
        </a>

        <a
          href="https://wa.me/919600005369"
          className="bg-amber-600 rounded-2xl p-2 md:px-5 flex items-center justify-center space-x-2 md:space-x-3 max-md:px-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TbBrandWhatsapp />

          <p>chat with us</p>
        </a>
      </div>

      <p className="font-bold  pb-3">Follow us on </p>
      <div className="flex gap-5">
        <a
          href="https://www.instagram.com/champaca_eshaa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram />
        </a>
        <a
          href="https://www.youtube.com/@Champaca_Eshaa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61561741444956"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
      </div>
    </div>
  );
};

export default Contact;
