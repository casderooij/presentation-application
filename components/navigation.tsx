import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <Link href="/">
        <a>/</a>
      </Link>
      <Link href="/info">
        <a>/info</a>
      </Link>
    </nav>
  );
}
