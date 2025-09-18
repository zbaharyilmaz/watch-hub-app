import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Join Watch Hub</h1>
          <p className="text-gray-300">Create your account to get started</p>
        </div>
        <SignUp routing="hash" />
      </div>
    </div>
  );
}
