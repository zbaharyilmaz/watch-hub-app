import Link from "next/link";
import SwitchButton from "./ui/SwitchButton";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-3 max-w-6xl mx-auto w-full">
      {/* Logo */}
      <Link
        href={"/"}
        className="flex gap-1 items-center hover:scale-105 transition-transform"
      >
        <span className="text-2xl font-bold bg-amber-500 text-white py-1 px-2 rounded-lg">
          WATCH
        </span>
        <span className="text-xl hidden sm:inline font-semibold text-gray-900 dark:text-white navbar-text">
          Hub
        </span>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        <ul className="flex gap-6 items-center">
          <li>
            <Link
              href={"/"}
              className="text-gray-700 dark:text-white hover:text-amber-500 dark:hover:text-amber-400 transition-colors font-medium navbar-text"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/dashboard"}
              className="text-gray-700 dark:text-white hover:text-amber-500 dark:hover:text-amber-400 transition-colors font-medium navbar-text"
            >
              Dashboard
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link
              href={"/favorites"}
              className="text-gray-700 dark:text-white hover:text-amber-500 dark:hover:text-amber-400 transition-colors font-medium navbar-text"
            >
              Favorites
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link
              href={"/about"}
              className="text-gray-700 dark:text-white hover:text-amber-500 dark:hover:text-amber-400 transition-colors font-medium navbar-text"
            >
              About
            </Link>
          </li>
        </ul>

        {/* Theme Toggle and Auth */}
        <div className="flex items-center gap-4">
          <SwitchButton />
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-8 h-8",
                },
              }}
            />
          </SignedIn>
          <SignedOut>
            <Link
              href={"/signin"}
              className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition-colors font-medium"
            >
              Sign In
            </Link>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}
