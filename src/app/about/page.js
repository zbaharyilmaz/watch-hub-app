"use client";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            About Watch Hub
          </h1>
          <p className="text-xl text-gray-300">
            Your ultimate destination for discovering and managing entertainment
            content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-4">
              🎬 Our Mission
            </h3>
            <p className="text-gray-300">
              We believe that finding great movies and TV shows shouldn't be a
              challenge. Watch Hub provides you with personalized
              recommendations, easy-to-manage watchlists, and a seamless viewing
              experience across all your devices.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-4">
              ✨ Features
            </h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Personalized recommendations</li>
              <li>• Custom watchlists</li>
              <li>• Cross-platform sync</li>
              <li>• Dark/Light mode</li>
              <li>• User-friendly interface</li>
            </ul>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">
            🚀 Get Started
          </h3>
          <p className="text-gray-300 mb-6">
            Join thousands of users who have already discovered their next
            favorite show or movie with Watch Hub.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg transition-colors font-medium">
              Sign Up Now
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg transition-colors font-medium">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
