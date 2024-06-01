import Header from "@/components/Layout/Header/Header";
import Link from "next/link";

export default function Home() {

  return (
    <Header>
      <Link href="/blog">
        <h1>Blog</h1>
      </Link>

    </Header>
  );
}
