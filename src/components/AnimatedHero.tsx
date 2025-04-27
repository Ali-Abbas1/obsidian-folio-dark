
import { useEffect, useState } from 'react';

const AnimatedHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-32 left-32 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      
      <div className={`relative transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h1 className="text-5xl font-bold mb-6">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-neutral-400 mb-8">
          I create meaningful digital experiences through design and development
        </p>
        <div className="h-[2px] w-24 bg-white" />
      </div>
    </div>
  );
};

export default AnimatedHero;
