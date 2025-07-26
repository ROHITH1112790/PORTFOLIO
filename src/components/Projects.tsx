import React, { useState } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "AI-Powered Medical Image Analysis System",
    techStack: ["Python", "Deep Learning", "Flask", "AI"],
    description: "Advanced medical imaging system using AI to analyze and diagnose medical conditions from X-rays and MRI scans with high accuracy.",
    github: "https://github.com/ROHITH1112790",
    demo: "#",
    image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=500"
  },
  {
    id: 2,
    title: "Hindo – Hindi E-learning Platform",
    techStack: ["Flask", "Python", "HTML", "CSS"],
    description: "Interactive e-learning platform for Hindi language learning with gamified lessons and progress tracking.",
    github: "https://github.com/ROHITH1112790",
    demo: "#",
    image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=500"
  },
  {
    id: 3,
    title: "Fake Review Detection",
    techStack: ["Python", "ML", "NLP", "Flask"],
    description: "Machine learning model to detect fake reviews using natural language processing and sentiment analysis techniques.",
    github: "https://github.com/ROHITH1112790",
    demo: "#",
    image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=500"
  },
  {
    id: 4,
    title: "Hover – OTT Platform",
    techStack: ["Flask", "Python", "HTML", "CSS"],
    description: "Streaming platform with user authentication, content management, and personalized recommendations.",
    github: "https://github.com/ROHITH1112790",
    demo: "#",
    image: "https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=500"
  },
  {
    id: 5,
    title: "IoT Smart Automated Store",
    techStack: ["Python", "IoT", "Flask", "Hardware"],
    description: "Automated retail solution using IoT sensors for inventory management and contactless shopping experience.",
    github: "https://github.com/ROHITH1112790",
    demo: "#",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=500"
  },
  {
    id: 6,
    title: "AIO Ticket Booking System",
    techStack: ["Python", "Flask", "Database", "Web Dev"],
    description: "All-in-one ticket booking system for movies, events, and transportation with payment integration.",
    github: "https://github.com/ROHITH1112790",
    demo: "#",
    image: "https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg?auto=compress&cs=tinysrgb&w=500"
  }
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <div className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 group">
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-900/80 rounded-full text-white hover:bg-cyan-500 transition-colors duration-200"
          >
            <Github size={18} />
          </a>
          <a 
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-900/80 rounded-full text-white hover:bg-cyan-500 transition-colors duration-200"
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, techIndex) => (
            <span 
              key={techIndex}
              className="px-3 py-1 bg-gray-700 text-cyan-400 rounded-full text-sm font-medium border border-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-200"
          >
            <Github size={16} className="mr-2" />
            Code
          </a>
          <a 
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-200"
          >
            <ExternalLink size={16} className="mr-2" />
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const getCurrentProjects = () => {
    const start = currentPage * projectsPerPage;
    return projects.slice(start, start + projectsPerPage);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A showcase of my recent work in AI, web development, and innovative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {getCurrentProjects().map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={prevPage}
              className="p-2 bg-gray-700 text-white rounded-full hover:bg-cyan-500 transition-colors duration-200"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    i === currentPage ? 'bg-cyan-400' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextPage}
              className="p-2 bg-gray-700 text-white rounded-full hover:bg-cyan-500 transition-colors duration-200"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/ROHITH1112790"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            View All Projects
            <Github className="ml-2" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;