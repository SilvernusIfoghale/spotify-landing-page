import React from "react";
import Card from "./Card";
import { playlists } from "../db/Database";

export default function PlayLists({ name, artist, img, others }) {
  return (
    <>
      {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8  h-72 overflow-hidden "> */}
      <div className="sm:grid  overflow-x-scroll  overflow-y-hidden sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  sm:h-72 h-[18.2rem] sm:overflow-hidden min-w-[100%] flex sm:w-full">
        {playlists.map((playlist) => (
          <Card
            name={playlist.name}
            artist={playlist.artist}
            photo={playlist.img}
            others={playlist.others}
          />
        ))}
      </div>
    </>
  );
}
