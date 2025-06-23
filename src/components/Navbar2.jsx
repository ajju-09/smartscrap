"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { HamIcon } from "@/assets/assets";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";




const Navbar2 = () => {
    

  return (
    <nav className="flex justify-between items-center px-6 md:px-8 lg:px-16 py-1 sticky top-0 z-50 backdrop-blur mt-3">
      {/* Logo */}
      <div className="text-2xl font-bold hover:text-green-500">
        <Link href='/'>SmartScrap</Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        <Link href="/about" className="hover:border-b transition hover:text-green-500">
          About
        </Link>
        <Link href="/recycle" className="hover:border-b transition hover:text-green-500">
          Recycle
        </Link>
        <Link href="/contact-us" className="hover:border-b transition hover:text-green-500">
          Contact Us
        </Link>
        <Link href="/feedback" className="hover:border-b transition hover:text-green-500">
          Feedback
        </Link>
       
      </div>

      {/* Mobile Menu - Hamburger */}
      <div className="md:hidden flex items-center">
        <Sheet>
          <SheetTrigger>
            <HamIcon />
          </SheetTrigger>
          <SheetContent className="bg-[#222222] py-3">
            <SheetHeader>
              <SheetTitle className="text-[#1DCD9F] font-bold text-2xl text-center underline">
                <Link href="/">SmartScrap</Link>
              </SheetTitle>

              <SheetDescription className="flex flex-col items-center gap-6 mt-8 text-gray-100 text-lg font-medium">
                <Link href="/about" className="hover:text-gray-200 hover:border-b transition">
                  About
                </Link>
                <Link href="/recycle" className="hover:text-gray-200 hover:border-b transition">
                  Recycle
                </Link>
                <Link href="/contact-us" className="hover:text-gray-200 hover:border-b transition">
                  Contact Us
                </Link>
                <Link href="/feedback" className="hover:text-gray-200 hover:border-b transition">
                  Feedback
                </Link>
                
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar2;
