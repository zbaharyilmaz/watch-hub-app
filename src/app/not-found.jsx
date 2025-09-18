"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui";

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
          <Button variant="primary" size="md" onClick={() => router.back()}>
            Go Back
          </Button>
          <Link href="/">
            <Button variant="secondary" size="md">
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
