import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h3 className="text-amber-600">
        <Link href="admin">chuyển đến trang admin</Link>
      </h3>
      <ProductCard />
    </main>
  );
}
