"use client";

import React, { useEffect } from "react";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MovieCard, StatsCard } from "@/components/common";
import { Card } from "@/components/ui";
import { favoriteMovies } from "@/constants/movies";

export default function FavoritesPage() {
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
                Your Favorites
              </h1>
              <p className="text-xl text-gray-300">
                All the movies and shows you love, in one place
              </p>
            </div>

            {/* Favorites Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {favoriteMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onWatch={(movie) => console.log("Watching:", movie.title)}
                  onRemove={(movie) => console.log("Removing:", movie.title)}
                />
              ))}
            </div>

            {/* Stats Section */}
            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <StatsCard
                  value={favoriteMovies.length}
                  label="Total Favorites"
                />
                <StatsCard
                  value={(
                    favoriteMovies.reduce(
                      (sum, movie) => sum + movie.rating,
                      0
                    ) / favoriteMovies.length
                  ).toFixed(1)}
                  label="Average Rating"
                />
                <StatsCard
                  value={
                    new Set(
                      favoriteMovies.map((movie) =>
                        movie.genre.split(",")[0].trim()
                      )
                    ).size
                  }
                  label="Genres"
                />
              </div>
            </Card>
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
