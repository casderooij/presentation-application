import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="absolute w-full h-full p-4">
      <ul className="flex flex-col items-end justify-between h-full">
        <li>
          <Link href="/">
            <a className="px-6 py-2 text-white rounded-full bg-slate-800">/</a>
          </Link>
        </li>
        <li>
          <Link href="/info">
            <a className="px-6 py-2 text-white rounded-full bg-slate-800/60 backdrop-blur-lg">
              /info
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
