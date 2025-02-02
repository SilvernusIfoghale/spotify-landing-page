import React from "react";
import Card from "./Card";
import { radio } from "../db/Database";

export default function Radio() {
  return (
    <>
      <div className="sm:grid  overflow-x-scroll  overflow-y-hidden sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  sm:h-[17.8rem] h-[18.2rem]  sm:overflow-hidden min-w-[100%] flex sm:w-full">
        {radio.map((data) => (
          <Card
            name={data.name}
            artist={data.artist}
            photo={data.img}
            others={data.others}
          />
        ))}
      </div>
    </>
  );
}
