"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ScrollAnimation } from "@/components/animation";
import { Tick } from "@/assets/assets";

const page = () => {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4">
  <div className="bg-gray-900 border-4 border-green-500 shadow-2xl rounded-3xl p-8 max-w-2xl w-full text-center text-white animate-fade-in">
    <div className="mb-6">
      <ScrollAnimation>
        <div className="flex flex-wrap justify-center items-center gap-3">
          <h1 className="text-2xl md:text-4xl font-extrabold text-green-400 animate-pulse">
            Submission Confirmed!
          </h1>
          <div className="w-8 h-8 md:w-10 md:h-10">
            <Tick />
          </div>
        </div>
      </ScrollAnimation>
    </div>

    <div className="text-gray-300 mb-8 text-lg leading-relaxed">
      <p className="mb-2">
        Your e-waste recycling request has been successfully submitted.
      </p>
      <p>
        We appreciate your effort to recycle responsibly. We'll be in touch
        shortly!
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-4">
      <ScrollAnimation>
        <Button className="bg-green-600 hover:bg-green-700 text-white transition-all duration-300">
          <Link href="/">🏠 Return to Home</Link>
        </Button>
      </ScrollAnimation>
      <ScrollAnimation>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300">
          <Link href="/about">ℹ️ Learn About Us</Link>
        </Button>
      </ScrollAnimation>
    </div>
  </div>
</section>

  );
};

export default page;
