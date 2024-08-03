import React from "react";

export default function Footer() {
  return (
    <footer className="hidden sm:flex bg-gradient-to-r from-[#af2896] to-[#509bf5] bottom-2 right-2 left-1  mx-auto h-[4.4rem] text-[0.9rem] w-full py-2 px-5 items-center z-2 text-white fixed flex justify-between">
      <div className="">
        <p className="font-bold ">Preview of Spotify</p>
        <p className="font-semibold">
          Sign up to get unlimited songs and podcasts with occasional ads No
          credit card needed.
        </p>
      </div>
      <button className="text-gray-700 flex items-center justify-center bg-white w-[8.5rem] h-[2.8rem] rounded-full font-semibold hover:bg-gray-200 hover:font-bold hover:h-[3rem] hover:w-[8.7rem] text-[1.1rem]">
        Sign up free
      </button>
    </footer>
  );
}
