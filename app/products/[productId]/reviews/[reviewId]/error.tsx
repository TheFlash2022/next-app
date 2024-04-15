"use client";

import React from "react";

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  return (
    <div>
      <h3>error in reviewId</h3>
      <p>{error.message}</p>
      <button className="btn btn-success" onClick={reset}>
        Try again
      </button>
    </div>
  );
};

export default ErrorBoundary;
