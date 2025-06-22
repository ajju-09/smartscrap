"use client";
import { useAppContext } from "@/app/context/AppContext";
import {ScrollAnimation} from "@/components/animation";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const userProfile = () => {
  const { router } = useAppContext();

  const [user, setUser] = useState({
    username: "",
    email: "",
    createdAt: "",
  });

  const getUserDetails = async () => {
    try {
      const res = await axios.get("/api/details");
      const userData = res.data.data;

      setUser({
        username: userData.username,
        email: userData.email,
        createdAt: userData.createdAt?.slice(0, 10) || "N/A", // format date
      });
      
    } catch (error) {
      console.log(error.message);
      toast.error("Failed to fetch details");
    }
  };

  const logOut = async () => {
    try {
      await axios.get("/api/logout");
      toast.success("Logout successfull");
      router.push("/");
    } catch (error) {
      console.log(error.message);
      toast.error("Failed to logout");
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <>
      <Navbar />
      <section className="p-6 mx-auto flex flex-1 items-center min-h-screen justify-center bg-gradient-to-r from-[#90e0ef] via-[#ade8f4] to-[#caf0f8] w-full rounded-3xl">
        <div className="w-full max-w-md shadow-lg rounded-xl p-6 bg-black text-white">
          <div className="flex flex-col items-center text-center">
            {/* Profile Letter Avatar */}
            <ScrollAnimation>
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-3xl font-bold text-green-600 mb-4">
              {user.username ? user.username.charAt(0).toUpperCase() : "U"}
            </div>
            </ScrollAnimation>
              
            {/* User Details */}
            <ScrollAnimation>
            <h2 className="text-2xl font-bold mb-3">
              {user.username || "Username"}
            </h2>
            </ScrollAnimation>
            <p className="text-gray-300">{user.email || "user@example.com"}</p>
            
            <div className="mt-4 space-y-2 text-sm text-gray-300">
              <p>
                <strong>Joined:</strong>{" "}
                {user.createdAt
                  ? new Date(user.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "N/A"}
              </p>
            </div>
            
            <Button
              onClick={logOut}
              className="mt-6 w-full rounded-lg py-2 hover:bg-green-600 bg-green-500 text-white font-semibold hover:cursor-pointer"
            >
              Logout
            </Button>
          </div>
        </div>
      </section>
      </>
  );
};

export default userProfile;
