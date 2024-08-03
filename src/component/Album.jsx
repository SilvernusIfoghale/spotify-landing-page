import React from "react";
import Card from "./Card";
import { albums } from "../db/Database";

export default function Album() {
  return (
    <>
      {/* <div className="grid grid-cols-6  min-w-[100vw]"> */}
      <div className="sm:grid overflow-y-hidden overflow-x-scroll sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  h-72 sm-h72 sm:overflow-hidden min-w-[100%] flex sm:w-full">
        {albums.map((album) => (
          <Card name={album.name} artist={album.artist} photo={album.img} />
        ))}
      </div>
    </>
  );
}
