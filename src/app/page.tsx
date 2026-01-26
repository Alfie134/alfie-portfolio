"use client";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */ }
      <section className="min-h-screen px-6 pt-32">
          <div className="mx-auto max-w-6xl">

              

              {/* Portfolio Logo */}
              <div className="flex flex-col items-center space-y-2">
                <span className="w-px h-15 bg-[#41000B]"/>                  
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
                    PORTFOLIO
                  </h1>
                  <p className="text-lg tracking-[0.3em] uppercase font-bold">
                    Alberte Øgendahl
                  </p>
              <span className="w-px h-15 bg-[#41000B]"/>
            </div>

            {/* Top row: left + right */}
              <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-10 ">
                {/* Left */}
                <div className="text-left">
                  <p className="text-6xl"> Hi, I&apos;m Alberte</p>
                  <p className="text-4xl">But call me Alfie</p>
                </div>

                {/* Right */}
                <div className="text-right font-armies-display">
                  <p className="text-7xl font-barriecito font-semibold text-[#41000B] leading-none">15</p>
                  <p className="text-4xl text-[#41000B] -mt-2">jan</p>
                  <p className="text-2xl text-[#41000B] mt-2 leading-snug">
                    see what <br /> im doing
                  </p>
                </div>
              </div>

              {/* Lower text block */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-2">
                <div className="md:col-start-2 text-center md:text-left">
                  <p className="uppercase tracking-widest text-sm">
                    I am an aspiring developer, and UI/UX designer based in Denmark.
                  </p>
                  <p className="uppercase tracking-widest text-sm">
                    I love everything creative, and have a hunger for learning and developing new
                    skills. I love earthy and breathy designs, as well as bold colours and designs.
                  </p>
                </div>
              </div>
          </div>
      </section>
    </main>
  );
} 
