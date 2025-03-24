'use client'; 

export default function HomePage() {

  return (
    <div className="relative h-screen w-full bg-[url('/images/bg-cover.png')] bg-fuchsia-600xed bg-norepeat bg-cover bg-center opacity-90">
      <div className="w-full h-full bg-black/60">
        <div className="relative top-2/6 m-auto text-amber-500 text-center">
          <h1 className="font-[900] text-8xl mb-5">Watch, Discover, Enjoy!</h1>
          <h5 className="text-5xl mb-5">Entertainment at Your Fingertips</h5>
          <p className="text-2xl font-[400] mb-10">Watch Anywhere. Cancel Anytime.</p>
        </div>
      </div>
    </div>
  );
}
