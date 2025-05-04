import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex gap-4 w-full justify-between items-center py-8 px-6 bg-gray-200">
      <Link href={"/"} className="w-10 h-10">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 55 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.53503 9.59074V3.85234C8.53503 1.72475 10.2598 0 12.3874 0C14.515 0 16.2397 1.72475 16.2397 3.85234V9.59074H38.2648V3.85234C38.2648 1.72475 39.9895 0 42.1171 0C44.2447 0 45.9694 1.72475 45.9694 3.85234V9.59074H55V17.3477H45.9694V36.2796H55V44.0366H45.7521C44.3747 53.0765 36.6165 60 27.2522 60C17.8879 60 10.1298 53.0765 8.75238 44.0366H0V36.2796H8.53503V17.3477H0V9.59074H8.53503ZM19.8198 17.3477C17.8426 17.3477 16.2397 18.9506 16.2397 20.9278V36.2796H23.3999V20.9278C23.3999 18.9506 21.797 17.3477 19.8198 17.3477ZM34.6847 17.3477C32.7074 17.3477 31.1046 18.9506 31.1046 20.9278L31.1046 36.2796H38.2648V20.9278C38.2648 18.9506 36.6619 17.3477 34.6847 17.3477ZM37.8894 44.0366H16.6151C17.8749 48.7632 22.1599 52.243 27.2522 52.243C32.3446 52.243 36.6296 48.7632 37.8894 44.0366Z"
            fill="black"
          />
        </svg>
      </Link>
      <div className="flex gap-8">
        <Link
          href="/work"
          className="text-black text-xl hover:underline underline-offset-4"
        >
          Work
        </Link>

        <Link
          href="/contact"
          className="text-black text-xl hover:underline underline-offset-4"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
