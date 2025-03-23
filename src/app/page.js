import Link from "next/link";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Page() {
  const { userId } = auth(); // Kullanıcı oturumunu al
  
  if (userId) {
    redirect("/dashboard"); // Kullanıcı giriş yaptıysa yönlendir
  }

  return(
    <div className="relative h-screen w-full bg-[url('/images/bg-cover.png')] bg-fuchsia-600xed bg-norepeat bg-cover bg-center opacity-90">
    <div className="w-full h-full bg-black/60 ">
      <div className="relative top-2/6 m-auto text-amber-500 text-center">
        <h1 className="font-[900] text-8xl mb-5">Watch, Discover, Enjoy!</h1>
        <h5 className="text-5xl mb-5">Entertainment at Your Fingertips</h5>
        <p className="text-2xl font-[400] mb-10">
          Watch Anywhere. Cancel Anytime.
        </p>
        {/* <Link href="/signin">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg">
            Get Started
          </button>
        </Link> */}
      </div>
    </div>
  </div>
  )
}

