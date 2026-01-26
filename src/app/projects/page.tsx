import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center 
                            text-center pt-20 space-y-4">
            <h1 className="text-4xl font-bold mb-4">My Projects</h1>

            <p className="text-xl font-bold max-w-xl space-y-2">
                This is an overview of the projects that I have worked on in the past, as well as what I&apos;m currently working on.
            </p>
            <ProjectCard
                title="Horse Event - A Competition Management Platform"
                description="4th semester project: Event management system built with React and .NET."
                image="/dressage1.png"
                link="/projects/horseevent">
            </ProjectCard>

            <ProjectCard
                title="Stardew Valley Modding"
                description=""
                image="/stardew.png"
                link="/projects/modding">
            </ProjectCard>
        </section>
    );
}
