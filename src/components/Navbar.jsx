"use client";

import React, { useEffect, useState } from "react";
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
import { useAppContext } from "@/app/context/AppContext";
import axios from "axios";


const Navbar = () => {
  const { router, userInfo } = useAppContext();
  const [user, setUser] = useState({
    username: ""
  });

  const getUser = async () => {
    try {
      const res = await axios.get('/api/details');
      const userData = res.data.data;
      setUser({username: userData.username})
    } catch (error) {
      console.log(error.message);
    }
  }
  
  useEffect(() => {
    getUser();
  }, [])

  const handleClick = () => {
    router.push("/profile");
  };

  return (
    <nav className="flex h-[18px] justify-between items-center px-6 md:px-8 lg:px-16 py-3 sticky top-0 z-50 backdrop-blur mt-3 mb-5">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold hover:text-green-500">
        SmartScrap
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8 mt-3">
        <Link href="/about" className="hover:border-b transition hover:text-green-500">
          About
        </Link>
        <Link href="/recycle" className="hover:border-b transition hover:text-green-500">
          Recycle
        </Link>
        <Link href="/contact" className="hover:border-b transition hover:text-green-500">
          Contact Us
        </Link>
        <Link href="/feedback" className="hover:border-b transition hover:text-green-500">
          Feedback
        </Link>
         <Button
          variant="outline"
          className="text-black mt-2"
          onClick={() => router.push("/vendor")}
        >
          Vendor
        </Button>
        

        {user.username ? (
          <div
            onClick={handleClick}
            className="w-10 h-10 px-2 mx-2 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold text-green-600 hover:cursor-pointer mt-2"
          >
            {user.username.charAt(0).toUpperCase()}
          </div>
        ) : (
          <Button className="text-black font-bold hover:cursor-pointer mt-2">
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
          <SheetContent className="bg-[#222222] py-3">
            <SheetHeader>
              <SheetTitle className="text-[#1DCD9F] font-bold text-2xl text-center underline">
                SmartScrap
              </SheetTitle>

              <SheetDescription className="flex flex-col items-center gap-6 mt-8 text-gray-100 text-lg font-medium">
                <Link href="/about" className="hover:text-gray-200 hover:border-b transition">
                  About
                </Link>
                <Link href="/recycle" className="hover:text-gray-200 hover:border-b transition">
                  Recycle
                </Link>
                <Link href="/contact" className="hover:text-gray-200 hover:border-b transition">
                  Contact Us
                </Link>
                <Link href="/feedback" className="hover:text-gray-200 hover:border-b transition">
                  Feedback
                </Link>
                <Button
                  variant="outline"
                  className="text-white"
                  onClick={() => router.push("/vendor")}
                >
                  Vendor
                </Button>
                {user.username ? (
                  <div
                    onClick={handleClick}
                    className="w-10 h-10 px-2 mx-2 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold text-green-600 hover:cursor-pointer"
                  >
                    {user.username.charAt(0).toUpperCase()}
                  </div>
                ) : (
                  <Button className="text-black font-bold mt-4 hover:cursor-pointer">
                    <Link href="/sign-up">Sign in</Link>
                  </Button>
                )}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
