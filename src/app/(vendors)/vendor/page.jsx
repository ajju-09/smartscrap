"use client";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const page = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCards = async () => {
    try {
      const response = await axios.get("/api/getFormData");
      const cardDetails = response.data.data;
      setCards(cardDetails);
    } catch (error) {
      console.error("Error fetching cards:", error);
    } finally {
      setLoading(false);
    }
  };


  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this card?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete("/api/deleteCard", { data: { id } });
      setCards((prev) => prev.filter((card) => card._id !== id));
      toast.success("Card deleted successfully");
    } catch (error) {
      toast.error("Failed to delete card");
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col space-y-3 px-4 py-4">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen flex flex-col px-4 py-4">
      {/* Navbar */}
      <nav className="mb-4">
        <div className="navbar bg-base-100 shadow-sm flex justify-between">
          <a className="btn btn-ghost text-xl" href="/">
            Smart Scrap
          </a>
          <div className="dropdown dropdown-end">
            <div role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card) => (
          <div
            key={card._id}
            className="card bg-[#ecbcfd] text-black shadow-sm flex flex-col md:flex-row rounded-2xl"
          >
            <figure className="md:w-1/3 w-full">
              <Image
                src={card.image[0]} // assuming image is an array with 1+ URLs
                alt="card image"
                className="object-cover hover:cursor-pointer  rounded-2xl border-2 border-black w-full h-full"
                width={400}
                height={200}
              />
            </figure>
            <div className="card-body w-full">
              <div className="grid grid-cols-1 gap-3 text-lg">
                <p className="font-bold ">
                  UserId: <span className="font-semibold text-[#3a0ca3]">{card.userId._id}</span>
                </p>
                <p className="font-bold">
                  Email Id: <span className="font-semibold text-[#7400b8]">{card.userId.email}</span>
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <p className="font-bold">
                    Customer: <span className="font-semibold text-[#dc2f02]">{card.userId.username.charAt(0).toUpperCase() + card.userId.username.slice(1)}</span>
                  </p>
                  <p className="font-bold">
                    Type: <span className="font-semibold text-[#006400]">{card.itemtype}</span>
                  </p>
                  <p className="font-bold">
                    Quantity: <span className="font-semibold text-[#006400]">{card.quantity}</span>
                  </p>
                  <p className="font-bold col-span-2 sm:col-span-1">
                    Phone no.: <span className="font-semibold text-[#006400]">{card.phone}</span>
                  </p>
                  <p className="font-bold col-span-2 sm:col-span-1">
                    Pincode: <span className="font-semibold text-[#006400]">{card.pincode}</span>
                  </p>
                </div>
              </div>
              <div className="card-actions justify-end mt-4">
                <button
                  onClick={() => handleDelete(card._id)}
                  className="btn bg-[#ff0000]"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
