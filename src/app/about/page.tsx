export default function AboutPage() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center 
            text-center pt-20">
            <h1 className="text-4xl font-bold text-[#c4b6ab] mb-4">
                About Me
            </h1>
            <p className="text-2xl font-bold text-[#d5ccab] max-w-xl">
                Here&apos;s a little bit about me.
            </p>
            <p className="text">
                Hi! My name is Alberte - but most people call me Alfie 
                because apparently I give off chaotic sidekick energy. 
                I&apos;m a computer science student, currently powering through my 4th semester, 
                while enjoying building things that look good, but also actually work (a rare combo, I know). 
            </p>
            <p className="">
                Me in a nutshell:
            </p>
            <ul className="list-disc list-inside mt-2">
                <li>Equal parts gym rat & art goblin.</li>
                <li>Lover of tattoos, gaming, and <em>too much</em> caffeine.</li>
                <li>Brown eyes, red-blonde hair, big imagination.</li>
            </ul>
        </section>
    );
}
