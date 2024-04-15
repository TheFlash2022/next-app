"use client";

import React from "react";
import { useRouter } from "next/navigation";

const OrderProduct = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("placing your order");
    router.push("/");
  };
  return (
    <div>
      <h3>order product</h3>
      <button onClick={handleClick}>place order</button>
    </div>
  );
};

export default OrderProduct;
