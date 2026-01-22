import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

function Projects() {
  return (
    <section className="w-full p-6">
      <div className="max-w-7xl mx-auto">
      <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
          <p className="text-sm opacity-70 mt-2">
            List of projects I have done with live demo.
          </p>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tech={project.tech}
            live={project.live}
            github={project.github}
          />
        ))}
      </div>
    </div>
    </section>
  );
}

export default Projects;
