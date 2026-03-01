import React, { useState, useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "../Pages/Shared/NavBar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const RootLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center  z-50">
        <div className="flex flex-col items-center">
          {/* Circular spinning loader */}
          <div className="w-24 h-24 border-8 border-t-primary border-gray-200 rounded-full animate-spin"></div>
          <p className="mt-4 text-xl font-semibold text-primary">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar fixed on top */}
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      {/* Main content */}
      <main className="flex-1 overflow-hidden">
        <div className="h-full">
          <Outlet />
        </div>
      </main>

      {/* Footer fixed at bottom */}
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
