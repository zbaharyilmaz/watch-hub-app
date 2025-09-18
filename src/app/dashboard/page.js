"use client";

import React, { useEffect } from "react";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Card, Button } from "@/components/ui";

export default function Dashboard() {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/signin");
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!isSignedIn) {
    return null; // Will redirect via useEffect
  }

  return (
    <>
      <SignedIn>
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-white mb-4">
                Welcome to Your Dashboard
              </h1>
              <p className="text-xl text-gray-300">
                Manage your watchlist and discover new content
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  My Watchlist
                </h3>
                <p className="text-gray-300 mb-4">
                  Keep track of movies and shows you want to watch
                </p>
                <Button variant="primary" size="sm">
                  View Watchlist
                </Button>
              </Card>

              <Card className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Recently Watched
                </h3>
                <p className="text-gray-300 mb-4">
                  See your recent viewing history
                </p>
                <Button variant="info" size="sm">
                  View History
                </Button>
              </Card>

              <Card className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Recommendations
                </h3>
                <p className="text-gray-300 mb-4">
                  Discover new content based on your preferences
                </p>
                <Button variant="success" size="sm">
                  Get Recommendations
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </SignedIn>

      <SignedOut>
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
          <div className="text-white text-xl">Redirecting to sign in...</div>
        </div>
      </SignedOut>
    </>
  );
}
