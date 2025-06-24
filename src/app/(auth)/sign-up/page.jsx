"use client";
import { useAppContext } from "@/app/context/AppContext";
import { assets, Loader } from "@/assets/assets";
import Navbar2 from "@/components/Navbar2";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const signUp = () => {
  const { router } = useAppContext();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSignUp = async () => {
    try {
      setLoading(true);
      await axios.post("/api/signup", user);
      toast.success("Successfully Signup");
      router.push("/sign-in");
    } catch (error) {
      toast.error("SignUp failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.username.length > 0 &&
      user.email.length > 0 &&
      user.password.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <>
      <Navbar2 />
      <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 py-8 relative">
        
        {/* Image Section */}
        {/* <ScrollAnimation> */}
        <div className="hidden md:flex w-1/2 justify-center items-center z-20">
          {assets.signupimg && (
            <Image
              src={assets.signupimg}
              alt="Sign Up Illustration"
              width={350}
              height={350}
              className="object-contain"
            />
          )}
        </div>
        {/* </ScrollAnimation> */}

        {/* Form Section */}
        {/* <ScrollAnimation> */}
        <div className="grid w-full max-w-sm gap-8 border-2 border-white rounded-3xl m-8 p-6 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl shadow-[#80ffdb]">
          <h1 className="px-1 font-extrabold text-3xl text-green-400 animate-bounce">
            Welcome
          </h1>

          {/* Username */}
          <div className="grid gap-1.5">
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
            />
          </div>

          {/* Email */}
          <div className="grid gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
            />
          </div>

          {/* Password */}
          <div className="grid gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
            />
          </div>

          {/* Button */}
          <div className="grid gap-2">
            {loading ? (
              <Button type="button">
                <Loader />
                Processing…
              </Button>
            ) : (
              <Button
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold transition-all duration-200 hover:cursor-pointer"
                onClick={onSignUp}
              >
                {buttonDisabled ? "No SignUp" : "SignUp"}
              </Button>
            )}

            <p className="text-md px-2 mx-1 mt-3">
              Already have account ? visit{" "}
              <Link href="/sign-in" className="text-blue-600 ">
                Sign In
              </Link>
            </p>
          </div>
        </div>
        {/* </ScrollAnimation> */}
      </section>
    </>
  );
};

export default signUp;
