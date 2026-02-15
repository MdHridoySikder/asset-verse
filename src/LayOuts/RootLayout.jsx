import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Pages/Shared/NavBar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar fixed on top */}
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      {/* Main content scrollable */}
      <main className="flex-1 overflow-auto">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default RootLayout;
