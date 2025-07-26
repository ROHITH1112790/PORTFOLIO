import React from 'react';
import { User, MapPin, GraduationCap, Target } from 'lucide-react';

const personalInfo = {
  about: "Thriving professional with a passion for solving real-world challenges through data-driven insights and innovative technologies. A collaborative team player, adaptable to new tools, and committed to continuous learning in a rapidly evolving tech environment.",
  location: "Karaikudi, Tamil Nadu, India"
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Stats */}
          <div className="space-y-8">
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src="src/assets/profile.jpeg"
                    alt="About Rohithraj"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-900/50 p-6 rounded-xl text-center border border-gray-700 hover:border-cyan-400/50 transition-colors duration-300">
                <div className="text-3xl font-bold text-cyan-400 mb-2">6+</div>
                <div className="text-gray-300">Projects</div>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl text-center border border-gray-700 hover:border-cyan-400/50 transition-colors duration-300">
                <div className="text-3xl font-bold text-cyan-400 mb-2">2+</div>
                <div className="text-gray-300">Internships</div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <User className="mr-3 text-cyan-400" size={24} />
                Who I Am
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {personalInfo.about}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <MapPin className="mr-3 text-cyan-400" size={24} />
                Location
              </h3>
              <p className="text-gray-300 text-lg">{personalInfo.location}</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <GraduationCap className="mr-3 text-cyan-400" size={24} />
                Education
              </h3>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-2">Artificial Intelligence and Data Science</h4>
                <p className="text-cyan-400 mb-2">Bachelor's Degree</p>
                <p className="text-gray-400">Coimbatore Institute of Technology</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Target className="mr-3 text-cyan-400" size={24} />
                Goals
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  Build innovative AI solutions for real-world problems
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  Contribute to open-source projects
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  Mentor aspiring developers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;