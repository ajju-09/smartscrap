'use client'

import Footer from "@/components/Footer";
import Navbar2 from "@/components/Navbar2";
import React from "react";

const ContactUs = () => {

  return (
    <>
    <Navbar2 />   
    <div className="bg-gray-900 text-white p-8 min-h-screen">
      <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
      <p className="text-center text-gray-400 mb-10">
        Have questions about e-waste pickup, vendors, or services? We’re here to help.
      </p>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Contact Form */}
        <form className="space-y-5">
          <input
            type="text"
            required
            placeholder="Full Name"
            className="w-full p-3 rounded bg-gray-800 border border-gray-700"
          />
          <input
            type="email"
            required
            placeholder="Email Address"
            className="w-full p-3 rounded bg-gray-800 border border-gray-700"
          />
          <input
            type="tel"
            placeholder="Phone Number (optional)"
            className="w-full p-3 rounded bg-gray-800 border border-gray-700"
          />
          <textarea
            rows="5"
            required
            placeholder="Your Message"
            className="w-full p-3 rounded bg-gray-800 border border-gray-700"
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 px-6 py-2 rounded hover:bg-green-500 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
          <p>📞 <span className="text-gray-300">+91-9876543210</span></p>
          <p>📧 <span className="text-gray-300">contact@ewastelocator.in</span></p>
          <p>📍 <span className="text-gray-300">101 GreenTech Towers, Pune, MH, India</span></p>
          <p>🕒 <span className="text-gray-300">Mon–Fri, 9AM–6PM</span></p>
              

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">🌐</a>
            <a href="#" className="text-gray-400 hover:text-white">📘</a>
            <a href="#" className="text-gray-400 hover:text-white">📸</a>
            <a href="#" className="text-gray-400 hover:text-white">💼</a>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ContactUs;
