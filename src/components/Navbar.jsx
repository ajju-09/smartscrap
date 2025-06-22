"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { Button } from "./ui/button";
import { HamIcon } from "@/assets/assets";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAppContext } from "@/app/context/AppContext";

const Navbar = () => {
  const { router } = useAppContext();
  const [user, setUser] = useState({ username: "" });

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get("/api/details");
        const userData = res.data.data;
        setUser({ username: userData.username });
      } catch (error) {
        console.log(error.message);
      }
    };
    getUser();
  }, []);

  const handleClick = () => {
    router.push("/profile");
  };

  return (
    <nav className="flex justify-between items-center px-6 md:px-8 lg:px-16 py-3 sticky top-0 z-50 backdrop-blur mt-3 mb-5">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold hover:text-green-500">
        SmartScrap
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8 mt-1">
        <Link
          href="/about"
          className="hover:border-b transition hover:text-green-500"
        >
          About
        </Link>
        <Link
          href="/recycle"
          className="hover:border-b transition hover:text-green-500"
        >
          Recycle
        </Link>
        <Link
          href="/contact-us"
          className="hover:border-b transition hover:text-green-500"
        >
          Contact Us
        </Link>
        <Link
          href="/feedback"
          className="hover:border-b transition hover:text-green-500"
        >
          Feedback
        </Link>
        <Button variant="outline" className="text-black hover:cursor-pointer">
          <Link href="/vendor">Vendor</Link>
        </Button>

        {user.username ? (
          <div
            onClick={handleClick}
            className="w-10 h-10 bg-yellow-400 border-red-600 border-3 rounded-full flex items-center justify-center text-2xl font-bold text-black hover:cursor-pointer"
          >
            {user.username.charAt(0).toUpperCase()}
          </div>
        ) : (
          <Button className="text-black font-bold hover:cursor-pointer">
            <Link href="/sign-up">Sign in</Link>
          </Button>
        )}
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center">
        <Sheet>
          <SheetTrigger>
            <HamIcon />
          </SheetTrigger>
          <SheetContent className="py-3">
            <SheetHeader>
              <SheetTitle className="text-center font-bold text-2xl underline">
                SmartScrap
              </SheetTitle>

              {/* Replace SheetDescription with div to allow nested divs/buttons */}
              <div className="flex flex-col items-center gap-6 mt-8 text-lg font-medium text-black">
                <Link href="/about" className="hover:border-b transition">
                  About
                </Link>
                <Link href="/recycle" className="hover:border-b transition">
                  Recycle
                </Link>
                <Link href="/contact-us" className="hover:border-b transition">
                  Contact Us
                </Link>
                <Link href="/feedback" className="hover:border-b transition">
                  Feedback
                </Link>
                <Button
                  variant="outline"
                  className="text-black hover:cursor-pointer"
                >
                  <Link href="/vendor">Vendor</Link>
                </Button>

                {user.username ? (
                  <div
                    onClick={handleClick}
                    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold text-green-600 hover:cursor-pointer"
                  >
                    {user.username.charAt(0).toUpperCase()}
                  </div>
                ) : (
                  <Button className="text-black font-bold mt-4 hover:cursor-pointer">
                    <Link href="/sign-up">Sign in</Link>
                  </Button>
                )}
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
