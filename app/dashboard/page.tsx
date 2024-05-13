"use client";

import React from "react";
import { useState } from "react";

const DashBoard = () => {
  const [name, setName] = useState("");
  console.log("hello le anh singg");
  return (
    <div>
      <h1>DashBoard page</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello ! {name}!</p>
    </div>
  );
};

export default DashBoard;
