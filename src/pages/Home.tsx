
import AnimatedHero from '../components/AnimatedHero';
import AchievementsSection from '../components/AchievementsSection';
import { Code, Cpu } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedHero />
        
        <div className="mt-8 animate-fade-in">
          <div className="flex flex-wrap gap-2 items-center justify-center text-sm text-neutral-400">
            <span className="flex items-center gap-1">
              <Code size={16} className="text-purple-500" />
              Software Engineer
            </span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1">
              <FileCode size={16} className="text-purple-500" />
              Web Developer
            </span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1">
              <Cpu size={16} className="text-purple-500" />
              AI/ML Enthusiast
            </span>
          </div>
        </div>

        <div className="mt-16">
          <AchievementsSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
