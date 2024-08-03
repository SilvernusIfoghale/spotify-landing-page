import React from "react";
import { charts } from "../db/Database";
import Card from "./Card";

export default function Charts({ name, artist, img, others }) {
  return (
    <>
      <div className="sm:grid  overflow-x-scroll sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8  sm:h-56 h-80 sm:overflow-hidden min-w-[100%] flex sm:w-full">
        {charts.map((chart) => (
          <Card
            name={chart.name}
            artist={chart.artist}
            photo={chart.img}
            others={chart.others}
          />
        ))}
      </div>
    </>
  );
}
