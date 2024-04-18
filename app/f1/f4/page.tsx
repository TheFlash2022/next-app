import React from "react";
import Link from "next/link";

const F4 = () => {
  return (
    <>
      <div>F4 page</div>
      <Link href={"/f1/f3"}>go to f3</Link>
      <Link href={"/admin"}>go to Admin</Link>
    </>
  );
};

export default F4;
