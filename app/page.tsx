import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h3 className="text-amber-600">
        <Link href="admin">chuyển đến trang admin</Link>
        <br />
        <Link href="blog">chuyển đến trang Blog</Link>
      </h3>
    </main>
  );
}
