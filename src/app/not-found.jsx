"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl md:text-9xl font-bold text-amber-500 mb-4">
          404
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
          Looks like this page got lost in the entertainment universe. Let's get
          you back to watching!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => router.back()}
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Go Back
          </button>
          <Link
            href="/"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
