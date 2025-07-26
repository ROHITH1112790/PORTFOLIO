import React from 'react';
import { Briefcase, Award, Trophy, Calendar } from 'lucide-react';

const experience = [
  {
    id: 1,
    company: "iCliniq",
    role: "AI/ML Intern",
    duration: "2024",
    description: "Worked on medical AI solutions and machine learning models for healthcare applications."
  },
  {
    id: 2,
    company: "USIM",
    role: "Software Development Intern",
    duration: "2024",
    description: "Developed web applications and contributed to full-stack development projects."
  }
];

const positions = [
  {
    id: 1,
    organization: "Matrix",
    role: "Technical Lead",
    description: "Led technical initiatives and mentored junior developers in various projects."
  },
  {
    id: 2,
    organization: "Intellina",
    role: "AI Research Coordinator",
    description: "Coordinated AI research projects and collaborated with cross-functional teams."
  },
  {
    id: 3,
    organization: "Code O' Clock",
    role: "Event Organizer",
    description: "Organized coding competitions and technical workshops for students."
  }
];

const certifications = [
  {
    id: 1,
    name: "Business Intelligence and Analytics",
    issuer: "NPTEL",
    year: "2024"
  }
];

const achievements = [
  {
    id: 1,
    title: "HealthHack'24",
    description: "Winner in healthcare innovation hackathon for AI-powered medical solutions."
  },
  {
    id: 2,
    title: "Hack with GDG S2",
    description: "Top performer in Google Developer Groups hackathon season 2."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & <span className="text-cyan-400">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Experience & Positions */}
          <div className="space-y-12">
            {/* Work Experience */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Briefcase className="mr-3 text-cyan-400" size={24} />
                Work Experience
              </h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={exp.id} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-white">{exp.role}</h4>
                        <p className="text-cyan-400 font-medium">{exp.company}</p>
                      </div>
                      <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Positions of Responsibility */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Award className="mr-3 text-cyan-400" size={24} />
                Leadership Roles
              </h3>
              <div className="space-y-6">
                {positions.map((position, index) => (
                  <div key={position.id} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                    <h4 className="text-xl font-semibold text-white mb-2">{position.role}</h4>
                    <p className="text-cyan-400 font-medium mb-3">{position.organization}</p>
                    <p className="text-gray-300 leading-relaxed">{position.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Certifications & Achievements */}
          <div className="space-y-12">
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Calendar className="mr-3 text-cyan-400" size={24} />
                Certifications
              </h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={cert.id} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                    <h4 className="text-xl font-semibold text-white mb-2">{cert.name}</h4>
                    <div className="flex items-center justify-between">
                      <p className="text-cyan-400 font-medium">{cert.issuer}</p>
                      <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements & Hackathons */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Trophy className="mr-3 text-cyan-400" size={24} />
                Achievements & Hackathons
              </h3>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div key={achievement.id} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                    <h4 className="text-xl font-semibold text-white mb-3">{achievement.title}</h4>
                    <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                    <div className="mt-4 flex items-center">
                      <Trophy className="text-yellow-400 mr-2" size={16} />
                      <span className="text-yellow-400 font-medium">Winner</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Stats */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-8 rounded-2xl border border-cyan-400/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">2+</div>
                  <div className="text-gray-300">Hackathons Won</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">3+</div>
                  <div className="text-gray-300">Leadership Roles</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">2+</div>
                  <div className="text-gray-300">Internships</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">1+</div>
                  <div className="text-gray-300">Certifications</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;