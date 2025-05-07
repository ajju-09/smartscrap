import "./globals.css";
import { Roboto } from "next/font/google";
import { AppContextProvider } from "./context/AppContext";
import { Toaster } from "@/components/ui/sonner";


const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'], // choose weights you need
  variable: '--font-roboto', // optional CSS variable
});

export const metadata = {
  title: "Smart Scrap",
  description: "Drop Smart, Recycle Faster.",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body
        className={` ${roboto.variable} antialiased`}
      ><AppContextProvider>
      
        {children}
        <Toaster />
       
        </AppContextProvider>
      </body>
    </html>
    
  );
}
