"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = (props) => {
  const router = useRouter();
 
  const value = {
    router, 
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
