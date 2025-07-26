import React from 'react';
import { Code, Globe, Cloud, Brain, BarChart } from 'lucide-react';

const skills = {
  languages: ["Python", "C", "Java (OOPs)"],
  webDev: ["HTML", "CSS", "Flask", "Gradio"],
  hosting: ["Render", "Vercel", "Hugging Face"],
  ai: ["Deep Learning", "ML", "Prompt Engineering", "GenAI"],
  visualization: ["Tableau", "Power BI"]
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="text-cyan-400" size={24} />,
      skills: skills.languages,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Web Development',
      icon: <Globe className="text-green-400" size={24} />,
      skills: skills.webDev,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Cloud & Hosting',
      icon: <Cloud className="text-purple-400" size={24} />,
      skills: skills.hosting,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI & Machine Learning',
      icon: <Brain className="text-orange-400" size={24} />,
      skills: skills.ai,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Data Visualization',
      icon: <BarChart className="text-yellow-400" size={24} />,
      skills: skills.visualization,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-gray-700/50 mr-4 group-hover:bg-gray-600/50 transition-colors duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} animate-skill-bar`}
                        style={{
                          width: `${85 + Math.random() * 15}%`,
                          animationDelay: `${index * 0.2 + skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Also Familiar With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Git', 'Docker', 'MongoDB', 'PostgreSQL', 'React', 'Node.js', 'TensorFlow', 'Pandas', 'NumPy', 'Scikit-learn'].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full border border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        */}

      </div>
    </section>
  );
};

export default Skills;
