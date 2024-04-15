"use client";

import React from "react";

const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
};
const ReviewDetail = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error loading review");
  }
  return (
    <div>
      <h2>
        Review {params.reviewId} for product {params.productId}
      </h2>
    </div>
  );
};

export default ReviewDetail;
