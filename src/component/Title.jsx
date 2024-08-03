import React from "react";

export default function Title({ title, view }) {
  return (
    <div className="top flex justify-between pb-4 px-6">
      <p className="text-white font-bold text-2xl hover:underline cursor-pointer">
        {title}
        {/* Popular artists */}
      </p>
      <p className="text-gray-300 font-semibold text-sm hover:text-white hover:underline cursor-pointer">
        {view}
      </p>
    </div>
  );
}
