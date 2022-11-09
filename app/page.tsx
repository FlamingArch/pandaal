"use client";

import Link from "next/link";
import React from "react";

export default function () {
  const [id, setId] = React.useState("");

  const handleInputField = (e: any) => setId(e.target.value);

  return (
    <div className="p-6 flex flex-col gap-4">
      <p className="text-2xl font-bold">pandaal</p>
      <div className="flex gap-4">
        <input
          type="text"
          className="transition-all rounded-lg border-2 p-2 focus-within:border-black focus-within:shadow-2xl outline-none flex-grow"
          value={id}
          onChange={handleInputField}
          placeholder="Event ID"
        />
        <Link href={`/${id}`}>
          <div className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg border-2 border-blue-800 text-white hover:shadow-2xl hover:shadow-blue-800 transition-all">
            Go to Event
          </div>
        </Link>
      </div>
    </div>
  );
}
