
import { Award, FileText, FileCode, Cpu, Briefcase } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const AchievementsSection = () => {
  const achievements = [
    {
      icon: <Briefcase className="text-purple-500" />,
      title: "Fortune 500 Experience",
      description: "Developed websites for Fortune 500 companies at Alpha Squad, enhancing their digital presence."
    },
    {
      icon: <FileText className="text-purple-500" />,
      title: "IEEE Access Publication",
      description: "First author of a research paper published in IEEE Access, focusing on advancements in AI and machine learning."
    },
    {
      icon: <FileCode className="text-purple-500" />,
      title: "Full-Stack Development",
      description: "End-to-end web development experience, from project requirements to final product delivery."
    },
    {
      icon: <Cpu className="text-purple-500" />,
      title: "AI Integration",
      description: "Developed a web application for WSI image analysis, integrating ML models with Redis and Celery optimization."
    }
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-semibold mb-6">Notable Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <Card key={index} className="bg-neutral-900 border-none hover:bg-neutral-800 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-4">
                {achievement.icon}
                <div>
                  <CardTitle className="text-xl mb-2 text-white">{achievement.title}</CardTitle>
                  <CardDescription className="text-neutral-400">
                    {achievement.description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
