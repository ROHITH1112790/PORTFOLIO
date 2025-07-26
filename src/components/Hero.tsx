import React from 'react';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';

const personalInfo = {
  name: "ROHITHRAJ N M",
  tagline: "AI Enthusiast | Full-Stack Developer | Problem Solver"
};

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-cyan-400/30 shadow-2xl animate-float">
                <img 
                  src="src/assets/profile.jpeg" 
                  alt="Rohithraj N M"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/20 to-blue-500/20 animate-pulse"></div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in-up">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              ROHITHRAJ N M
            </span>
            <br />
            
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up delay-200">
            {personalInfo.tagline}
          </p>

          {/* Description */}
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-300">
            Passionate about transforming ideas into reality through code and innovation. 
            Specializing in AI/ML solutions and full-stack development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-400">
            <button 
              onClick={scrollToAbout}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Explore My Work
              <ExternalLink className="inline ml-2" size={18} />
            </button>
            <a
              href="https://drive.google.com/file/d/1Fbwywk1ND2lN_1SbpdJQvZlaExHA0G99/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
            >
            <button className="border-2 border-gray-600 text-gray-300 px-8 py-3 rounded-full font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-105">
              Download Resume
              <Download className="inline ml-2" size={18} />
            </button></a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button 
              onClick={scrollToAbout}
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;