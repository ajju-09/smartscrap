"use client";
import { useAppContext } from "@/app/context/AppContext";
import { assets, Loader } from "@/assets/assets";
import { ScrollAnimation } from "@/components/animation";
import { RetroGrid } from "@/components/magicui/retro-grid";
import Navbar2 from "@/components/Navbar2";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const recycle = () => {
  const [details, setDetails] = useState({
    itemtype: "",
    quantity: 1,
    phone: "",
    pincode: "",
    image: [],
  });
  const [userId, setUserId] = useState("");

  const { router } = useAppContext();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

const getUser = async() => {
  const res = await axios.get("/api/details");
  const userData = res.data.data;
  setUserId(userData._id);
}

  const handleImage = (e) => {
    setDetails({
      ...details,
      image: Array.from(e.target.files),
    });
  };

  const getDetails = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("itemtype", details.itemtype);
      formData.append("quantity", details.quantity);
      formData.append("phone", details.phone);
      formData.append("pincode", details.pincode);
      formData.append("userId", userId);

      details.image.forEach((file) => {
        formData.append("images", file); // Note: using 'images' plural to match backend
      });

      if (details.phone.toString().length !== 10) {
        toast.error("Phone number must be 10 digits");
        return;
      }
      if (details.pincode.toString().length !== 6) {
        toast.error("Pincode must be 6 digits");
        return;
      }

      const res = await axios.post("/api/recycle", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Recycle data", res.data);
      toast.success("Successfully Recycled");
      if (res.data.success) {
        router.push("/thanku");
      }
    } catch (error) {
      console.log("Error in Recycle", error.response?.data || error.message);
      if (error.response?.status === 500) {
        toast.error("Please sign up or log in first");
        router.push("/sign-up");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, [])

  useEffect(() => {
    if (
      details.itemtype.length > 0 &&
      details.quantity > 0 &&
      details.phone.toString().length > 0 &&
      details.pincode.toString().length > 0 &&
      details.image.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [details]);

  return (
    <>
      <Navbar2 />
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-4">
        {/* Title with blur effect */}
        <div className="relative mb-6 text-center">
          <div className="absolute inset-0 z-0 bg-[#caf0f8] blur-xl rounded-full mx-auto" />
          <ScrollAnimation>
            <h1 className="relative z-10 text-2xl md:text-4xl font-bold text-[#001219] animate-pulse">
              ♻ Recycle E-Waste
            </h1>
          </ScrollAnimation>
        </div>

        {/* Form container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-100 border-2 border-[#f72585] rounded-3xl p-6 w-full max-w-5xl shadow-xl shadow-[#3bceac]">
          {/* Image */}
          <ScrollAnimation>
            <div className="flex items-center justify-center">
              <Image
                src={assets.recycleImg}
                alt="Recycle"
                className="max-w-full md:h-[400px] h-[200px] rounded-xl"
                priority
              />
            </div>
          </ScrollAnimation>

          {/* Form side */}

          <div className="flex flex-col justify-center space-y-4 text-black">
            {/* Item Type */}
            <div className="grid gap-1.5">
              <Label htmlFor="itemtype">Item Type </Label>
              <Input
                type="text"
                id="itemtype"
                value={details.itemtype}
                onChange={(e) =>
                  setDetails({ ...details, itemtype: e.target.value })
                }
                placeholder="Type of Item e.g: batteries, phone etc"
                className="transition-all border-gray-300 border-2 hover:border-rose-400 "
              />
            </div>

            {/* Quantity */}
            <div className="grid gap-1.5">
              <Label htmlFor="quantity">Quantity</Label>
              <Input
                type="number"
                id="quantity"
                value={details.quantity}
                onChange={(e) =>
                  setDetails({ ...details, quantity: e.target.value })
                }
                placeholder="Count"
                className="transition-all border-gray-300 border-2 hover:border-purple-400 "
              />
            </div>

            {/* Phone and Pincode in Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid gap-1.5">
                <Label htmlFor="phone">Phone No.</Label>
                <Input
                  type="tel"
                  maxLength={10}
                  id="phone"
                  placeholder="Enter phone no."
                  value={details.phone}
                  onChange={(e) =>
                    setDetails({ ...details, phone: e.target.value })
                  }
                  className="transition-all border-gray-300 border-2 hover:border-blue-400 "
                />
              </div>

              <div className="grid gap-1.5">
                <Label htmlFor="pincode">Pincode</Label>
                <Input
                  type="number"
                  maxLength={6}
                  id="pincode"
                  placeholder="Enter Pincode"
                  value={details.pincode}
                  onChange={(e) =>
                    setDetails({ ...details, pincode: e.target.value })
                  }
                  className="transition-all border-gray-300 border-2 hover:border-indigo-400 "
                />
              </div>
            </div>

            {/* Upload Image */}
            <div className="grid gap-1.5">
              <Label htmlFor="image">Upload Image</Label>
              <Input
                type="file"
                id="image"
                multiple
                onChange={handleImage}
                className="transition-all file:border-none  hover:cursor-pointer border-2 hover:border-red-400 "
              />
            </div>

            {/* Submit Button */}
            <div className="grid gap-1.5">
              {loading ? (
                <Button type="button">
                  <Loader />
                  Processing…
                </Button>
              ) : (
                <Button
                  className="hover:bg-green-600 text-white hover:cursor-pointer"
                  onClick={getDetails}
                >
                  {buttonDisabled ? "Can't Submit" : "Submit"}
                </Button>
              )}
            </div>
          </div>
        </div>
        <RetroGrid />
      </section>
    </>
  );
};

export default recycle;
