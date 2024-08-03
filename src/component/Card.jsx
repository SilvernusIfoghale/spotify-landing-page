import React from "react";

export default function Card({ name, artist, photo, others }) {
  return (
    <div className=" group relative h-72  hover:bg-[rgb(57,55,55)] rounded-xl text-white py-2 px-3 mx-auto cursor-pointer ">
      <div className=" w-40 h-40 overflow-hidden rounded-xl  ">
        <img className="object-cover w-full h-full" src={photo} alt="" />
      </div>
      <div className="pl-4 pt-1">
        <p className="font-semibold">{name}</p>
        <p className="text-[#A8A8A8]">{artist} </p>
        <p className="text-[#A8A8A8] mt-[-3px]">{others}</p>
      </div>
      <span
        aria-hidden="true"
        className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center absolute top-[105px] right-4 opacity-0 group-hover:opacity-100 hover:bg-green-400"
      >
        <svg
          data-encore-id="icon"
          role="img"
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="w-7"
        >
          <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
        </svg>
      </span>
    </div>

    // <div className="relative h-56 w-44 hover:bg-[#393737] rounded-xl text-white py-2  cursor-pointer group">
    //   <div className="w-40 h-40 overflow-hidden rounded-xl   mx-auto ">
    //     <img className="object-contain w-full h-full" src={photo} alt="" />
    //   </div>
    //   <div className="pl-4 pt-1">
    //     <p className="font-semibold">{name}</p>
    //     <p className="text-[#A8A8A8]">{artist}</p>
    //   </div>
    //   <span
    //     aria-hidden="true"
    //     className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center absolute top-[105px] right-4 opacity-0 group-hover:opacity-100 hover:bg-green-400"
    //   >
    //     <svg
    //       data-encore-id="icon"
    //       role="img"
    //       aria-hidden="true"
    //       viewBox="0 0 24 24"
    //       className="w-7"
    //     >
    //       <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
    //     </svg>
    //   </span>
    // </div>
  );
}
