"use client";

import Link from "next/link";
import { useState } from "react";
import "../globals.css";
const layout = () => {
  const [name, setName] = useState("");
  return (
    <div className="min-h-screen">
      <input
        className="border border-gray-300 rounded-md p-2 mb-4"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <Link className="bg-teal-300" href="/analytics/revenue">
        Revenue
      </Link>
      <br />
      <Link className="bg-teal-300" href="/analytics/stats">
        Stats
      </Link>
    </div>
  );
};
export default layout;
