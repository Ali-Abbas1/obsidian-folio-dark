
import AnimatedHero from '../components/AnimatedHero';

const Home = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedHero />
        <div className="mt-12 grid gap-8">
          <div className="animate-fade-in">
            <h2 className="text-2xl font-semibold mb-4">Featured Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-neutral-900 p-6 rounded-lg hover:bg-neutral-800 transition-colors">
                <h3 className="text-xl font-medium mb-2">Project 1</h3>
                <p className="text-neutral-400">Description of the first featured project goes here.</p>
              </div>
              <div className="bg-neutral-900 p-6 rounded-lg hover:bg-neutral-800 transition-colors">
                <h3 className="text-xl font-medium mb-2">Project 2</h3>
                <p className="text-neutral-400">Description of the second featured project goes here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
