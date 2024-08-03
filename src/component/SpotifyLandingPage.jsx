import React from "react";
import NavBar from "./NavBar";
import Main from "./Main";
import Footer from "./Footer";

export default function SpotifyLandingPage() {
  return (
    <div className="bg-gray-900 min-h-[100%] h-[100vh] ">
      <div className="bg-gray-950 h-100vh sm:h-[calc(100vh-80px)] flex   ">
        <NavBar />
        <Main />
      </div>

      <Footer />
    </div>
  );
}
