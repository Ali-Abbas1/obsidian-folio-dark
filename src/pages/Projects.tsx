
const Projects = () => {
  const projects = [
    {
      title: "Alpha Squad Website",
      description: "An inhouse project for the company i was working for",
      link: "https://as-desktop.vercel.app/",
      tags: ["React", "Next js", "Tailwind"],
    },
    {
      title: "LearnForce",
      description: "A Learning platform  providing learning solutions",
      link: "https://learnforce.org/",
      tags: ["Node.js", "Express", "MongoDB", "NextJs"],
    },
    {
      title: "LiteCure",
      description: "LiteCure is a platform that provides 'A MEDICAL LightForce Deep Tissue Laser Therapy'",
      link: "https://www.litecure.com/",
      tags: ["Next.js", "GraphQL", "Express Js"],
    },
    {
      title: "Premier OrthoPaedics",
      description: "Premier Orthopaedics provides the full spectrum of orthopaedic services",
      link: "https://premierortho.com/",
      tags: ["Next.js", "GraphQL", "PostgreSQL"],
    },
    {
      title: "SiriusXM",
      description: "Sirius XM is an American broadcasting corporation in New York City, that provides satellite radio and online radio services operating in the United States",
      link: "https://www.siriusxm.com/",
      tags: ["Next.js", "Node.js"],
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
            <a 
              key={index}
              className="bg-neutral-900 p-8 rounded-lg hover:bg-neutral-800 transition-colors"
              href={project.link}
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
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
