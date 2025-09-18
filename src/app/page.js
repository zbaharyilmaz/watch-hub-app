"use client";

import React from "react";
import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Button, Card } from "@/components/ui";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full bg-[url('/images/bg-cover.png')] bg-no-repeat bg-cover bg-center">
        <div className="w-full h-full bg-black/60">
          <div className="relative top-1/3 m-auto text-center px-4">
            <h1 className="font-[900] text-6xl md:text-8xl mb-5 text-amber-500">
              Watch, Discover, Enjoy!
            </h1>
            <h2 className="text-3xl md:text-5xl mb-5 text-white">
              Entertainment at Your Fingertips
            </h2>
            <p className="text-xl md:text-2xl font-[400] mb-10 text-gray-300">
              Watch Anywhere. Cancel Anytime.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <SignedOut>
                <Link href="/signup">
                  <Button
                    variant="primary"
                    size="lg"
                    className="transform hover:scale-105"
                  >
                    Get Started Free
                  </Button>
                </Link>
                <Link href="/signin">
                  <Button variant="secondary" size="lg">
                    Sign In
                  </Button>
                </Link>
              </SignedOut>
              <SignedIn>
                <Link href="/dashboard">
                  <Button
                    variant="primary"
                    size="lg"
                    className="transform hover:scale-105"
                  >
                    Go to Dashboard
                  </Button>
                </Link>
              </SignedIn>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Watch Hub?
            </h2>
            <p className="text-xl text-gray-300">
              Discover the best entertainment experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center" hover>
              <div className="text-5xl mb-4">🎬</div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Unlimited Content
              </h3>
              <p className="text-gray-300">
                Access thousands of movies and TV shows from various genres and
                streaming platforms.
              </p>
            </Card>

            <Card className="p-8 text-center" hover>
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Watch Anywhere
              </h3>
              <p className="text-gray-300">
                Stream on any device - phone, tablet, laptop, or TV. Your
                entertainment follows you.
              </p>
            </Card>

            <Card className="p-8 text-center" hover>
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Personalized Recommendations
              </h3>
              <p className="text-gray-300">
                Get smart recommendations based on your viewing history and
                preferences.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-amber-500 mb-2">10K+</div>
              <div className="text-white">Movies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-500 mb-2">5K+</div>
              <div className="text-white">TV Shows</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-500 mb-2">1M+</div>
              <div className="text-white">Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-500 mb-2">24/7</div>
              <div className="text-white">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Watching?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of users who have already discovered their next
            favorite show or movie.
          </p>

          <SignedOut>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button
                  variant="primary"
                  size="lg"
                  className="transform hover:scale-105"
                >
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="secondary" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </SignedOut>

          <SignedIn>
            <Link href="/dashboard">
              <Button
                variant="primary"
                size="lg"
                className="transform hover:scale-105 inline-block"
              >
                Explore Dashboard
              </Button>
            </Link>
          </SignedIn>
        </div>
      </section>
    </div>
  );
}
