import React from "react";
import { artists } from "../db/Database";
export default function Artist() {
  return (
    <>
      <div className="sm:grid  overflow-x-scroll sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  h-56 sm:overflow-hidden min-w-[100%] flex sm:w-full">
        {artists.map((artist) => (
          <div className=" group relative h-56  hover:bg-[rgb(57,55,55)] rounded-xl text-white py-2 px-3 mx-auto cursor-pointer ">
            <div className=" w-40 h-40 overflow-hidden rounded-full  ">
              <img
                className="object-cover w-full h-full"
                src={artist.img}
                alt=""
              />
            </div>
            <div className="pl-4">
              <p className="font-semibold">{artist.name}</p>
              <p className="text-[#A8A8A8]">Artist</p>
            </div>

            <span
              aria-hidden="true"
              className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center absolute top-24 right-7 opacity-0  group-hover:opacity-100 hover:bg-green-400"
            >
              <svg
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="w-7 "
              >
                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
              </svg>
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
