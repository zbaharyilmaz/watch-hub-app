"use client";

import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import Link from "next/link";

// Sample movie data
const favoriteMovies = [
  {
    id: 1,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action, Crime, Drama",
    rating: 9.0,
    image:
      "https://images.unsplash.com/photo-1531259683007-016a9b62c44d?w=300&h=450&fit=crop&crop=center",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
  },
  {
    id: 2,
    title: "Inception",
    year: 2010,
    genre: "Action, Sci-Fi, Thriller",
    rating: 8.8,
    image:
      "https://images.unsplash.com/photo-1489599808581-8e0b6a2a8f3b?w=300&h=450&fit=crop&crop=center",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    genre: "Adventure, Drama, Sci-Fi",
    rating: 8.6,
    image:
      "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=300&h=450&fit=crop&crop=center",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  },
  {
    id: 4,
    title: "The Matrix",
    year: 1999,
    genre: "Action, Sci-Fi",
    rating: 8.7,
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=450&fit=crop&crop=center",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
  },
  {
    id: 5,
    title: "Pulp Fiction",
    year: 1994,
    genre: "Crime, Drama",
    rating: 8.9,
    image:
      "https://images.unsplash.com/photo-1489599808581-8e0b6a2a8f3b?w=300&h=450&fit=crop&crop=center",
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
  },
  {
    id: 6,
    title: "The Shawshank Redemption",
    year: 1994,
    genre: "Drama",
    rating: 9.3,
    image:
      "https://images.unsplash.com/photo-1531259683007-016a9b62c44d?w=300&h=450&fit=crop&crop=center",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  },
];

export default function FavoritesPage() {
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
                <div
                  key={movie.id}
                  className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="relative">
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-amber-500 text-white px-2 py-1 rounded-lg text-sm font-semibold">
                      ⭐ {movie.rating}
                    </div>
                    <div className="absolute bottom-4 left-4 bg-black/70 text-white px-2 py-1 rounded-lg text-sm">
                      {movie.year}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {movie.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">{movie.genre}</p>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {movie.description}
                    </p>

                    <div className="flex gap-2">
                      <button className="flex-1 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition-colors font-medium">
                        Watch Now
                      </button>
                      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors">
                        ❤️
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-amber-500 mb-2">
                    {favoriteMovies.length}
                  </div>
                  <div className="text-white">Total Favorites</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-500 mb-2">
                    {(
                      favoriteMovies.reduce(
                        (sum, movie) => sum + movie.rating,
                        0
                      ) / favoriteMovies.length
                    ).toFixed(1)}
                  </div>
                  <div className="text-white">Average Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-500 mb-2">
                    {
                      new Set(
                        favoriteMovies.map((movie) =>
                          movie.genre.split(",")[0].trim()
                        )
                      ).size
                    }
                  </div>
                  <div className="text-white">Genres</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
