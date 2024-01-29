"use client";
import React from "react";

const ProductCard = () => {
  return (
    <div>
      <button
        onClick={() => {
          console.log("click");
        }}
      >
        Click here
      </button>
    </div>
  );
};

export default ProductCard;
