"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/assets/assets";
import { Autocomplete, GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Menu } from "lucide-react";

const center = {lat:21.19443761120735, lng:72.86407665386642}

const Page = () => {

  const [currentPosition, setCurrentPosition] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [map, setMap] = useState(/** @type google.maps.Map */ (null));

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    libraries: ['places', 'maps'],
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setCurrentPosition({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
        },
        (err) => {
          console.error("Geolocation error:", err);
        }
      );
    }
  }, []);

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <section className="h-screen w-full flex flex-col md:flex-row relative overflow-hidden">
      {/* Mobile Navbar Toggle */}
      <div className="md:hidden flex justify-between items-center  p-4 shadow z-20">
        <h2 className="text-lg font-semibold">Route Planner</h2>
        <button onClick={() => setIsPanelOpen(!isPanelOpen)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Side Panel */}
      <div
        className={` z-10 p-6 shadow-md md:static absolute top-[64px] left-0 w-full md:w-80 h-auto md:h-full overflow-auto transition-all duration-300 ${
          isPanelOpen ? "block" : "hidden"
        } md:block`}
      >
        <div className="grid grid-cols-1 gap-4 mb-4">
          <Autocomplete>
          <Input type="text" placeholder="Source" />
          </Autocomplete>

          <Autocomplete>
          <Input type="text" placeholder="Destination" />
          </Autocomplete>

          <Button className="hover:cursor-pointer w-full">Calculate Route</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 text-center sm:text-left">
          <p className="px-2">Distance:</p>
          <p className="px-2">Duration:</p>
          <Button onClick={() => map.panTo(currentPosition)} className="hover: cursor-pointer hover:bg-gray-300" variant="outline"><Navigation 
          /></Button>
          
        </div>
      </div>

      {/* Map Container */}
      <div className="flex-1 h-[calc(100vh-64px)] md:h-screen z-0">
        <GoogleMap
          center={currentPosition || { lat: 20.5937, lng: 78.9629 }}
          zoom={14}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          onLoad={map => setMap(map)}
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
    </section>
  );
};

export default Page;
