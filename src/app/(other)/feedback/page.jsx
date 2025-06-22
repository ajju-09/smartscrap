'use client'
import Footer from "@/components/Footer";
import Navbar2 from "@/components/Navbar2";
import React, { useState } from "react";

const FeedbackPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send data to your backend or API
    setSubmitted(true);
  };

  return (
    <>
    <Navbar2 />
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-2 text-center">We Value Your Feedback</h2>
      <p className="text-center text-gray-400 mb-10">
        Help us improve our services by sharing your thoughts!
      </p>

      <div className="max-w-3xl mx-auto">
        {submitted ? (
          <div className="bg-green-800 text-green-100 p-6 rounded text-center">
            ✅ Thank you for your feedback! We appreciate your input.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              required
              placeholder="Your Name"
              className="w-full p-3 rounded bg-gray-800 border border-gray-700"
            />
            <input
              type="email"
              required
              placeholder="Your Email"
              className="w-full p-3 rounded bg-gray-800 border border-gray-700"
            />
            <select
              required
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-gray-400"
            >
              <option value="">How did you use our service?</option>
              <option value="pickup">Used Pickup Service</option>
              <option value="dropoff">Visited Vendor Facility</option>
              <option value="just-browsing">Just Browsed</option>
            </select>
            <textarea
              rows="5"
              required
              placeholder="Your Feedback"
              className="w-full p-3 rounded bg-gray-800 border border-gray-700"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-500 transition"
            >
              Submit Feedback
            </button>
          </form>
        )}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default FeedbackPage;
