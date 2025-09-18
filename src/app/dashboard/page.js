"use client";

import React from "react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { Card, Button } from "@/components/ui";

export default function Dashboard() {
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
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
          <div className="max-w-md mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <div className="text-6xl mb-6">🔒</div>
              <h1 className="text-3xl font-bold text-white mb-4">
                Access Required
              </h1>
              <p className="text-gray-300 mb-6">
                You need to be signed in to access your dashboard. Create an
                account or sign in to continue.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/signup"
                  className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                >
                  Create Account
                </Link>
                <Link
                  href="/signin"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg transition-colors font-medium"
                >
                  Sign In
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-gray-400 text-sm">
                  New to Watch Hub?
                  <Link
                    href="/about"
                    className="text-amber-400 hover:text-amber-300 ml-1"
                  >
                    Learn more about our features
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </SignedOut>
    </>
  );
}
