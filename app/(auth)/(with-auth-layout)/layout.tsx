'use client';

import { Metadata } from "next";
import { useRouter } from 'next/navigation'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <div>
      <h2>Inner Layout</h2>
      {children}
      <button className="btn btn-success" onClick={()=>router.push('/')}>back to home page</button>
    </div>
  );
}

/* export const metadata: Metadata = {
  title: "Auth",
}; */
