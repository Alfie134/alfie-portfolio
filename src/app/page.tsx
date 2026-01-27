"use client";

export default function HomePage() {
  return (
    <main className=" min-h-screen">
      <section>
          <div className="mx-auto max-w-[1320px] px-7">
            {/* Top row: left + right */}
              <div className="grid grid-cols-12 items-start gap-x-[14px] gap-y-10 text-[var(--text-main)]">
                {/* Left */}
                <div className="col-span-12 md:col-start-2 md:col-end-7 text-left">
                  <p className="text-8xl font-fira-code tracking-widest">ALBERTE</p>
                  <p className="text-8xl font-monsieur">Øgendahl</p>
                </div>

                {/* Right */}
                <div className="col-span-12 md:col-start-10 md:col-span-2 font-armies-display">
                  <p className="text-8xl font-barriecito font-semibold leading-none">15jan</p>
                  <p className="text-4xl mt-0 leading-snug text-right">
                    what <br/> im <br/> working <br/> on
                  </p>
                </div>
              </div>

              {/* Lower text block */}
              <div className="mt-16">
                <div className=" text-center font-fira-code">
                  <p className="tracking-widest text-[64px]">
                    DEVELOPER
                  </p>
                  <p className="tracking-widest text-[64px] col-span-12 md:col-start-2 md:col-end-5">
                    FRONTEND ENTHUSIAST
                  </p>
                </div>
              </div>
          </div>
      </section>
    </main>
  );
} 
