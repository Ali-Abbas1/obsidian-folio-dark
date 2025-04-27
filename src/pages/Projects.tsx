
const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of project 1 and its key features.",
      tags: ["React", "TypeScript", "Tailwind"],
    },
    {
      title: "Project 2",
      description: "A brief description of project 2 and its key features.",
      tags: ["Node.js", "Express", "MongoDB"],
    },
    {
      title: "Project 3",
      description: "A brief description of project 3 and its key features.",
      tags: ["Next.js", "GraphQL", "PostgreSQL"],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 animate-fade-in">Projects</h1>
        <p className="text-xl text-neutral-400 mb-12 animate-fade-in">
          A selection of my recent work and personal projects.
        </p>
        <div className="grid gap-8 animate-fade-in">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-neutral-900 p-8 rounded-lg hover:bg-neutral-800 transition-colors"
            >
              <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
              <p className="text-neutral-400 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-3 py-1 bg-neutral-800 text-neutral-400 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
