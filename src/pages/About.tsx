
const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 animate-fade-in">About Me</h1>
        <div className="space-y-8 animate-fade-in">
          <p className="text-xl text-neutral-400">
            My name is Ali Abbas and I'm a passionate developer focused on creating beautiful and functional web experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-neutral-900 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Skills</h2>
              <ul className="space-y-2 text-neutral-400">
                <li>Web Development</li>
                <li>UI/UX Design</li>
                <li>React/Next.js & TypeScript</li>
                <li>Node.js & Express</li>
              </ul>
            </div>
            <div className="bg-neutral-900 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Experience</h2>
              <ul className="space-y-2 text-neutral-400">
                <li>5+ Years Development</li>
                <li>20+ projects</li>
                <li>Multiple Industries</li>
                <li>Remote Collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
