import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { SiFigma } from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "The Room 19 Reminder",
      description: "Full-stack WhatsApp reminder system built with Laravel and integrated with Wasender API. Features include automated daily scheduling, dynamic message templates, and real-time status logging via cron job. Perfect for sending personalized return-book reminders hassle-free! 📚📲⏰",
      tech: ["Bootstrap", "Laravel", "MySQL", "Whatsapp API"],
      image: "/tr19.png",
      liveUrl: "https://theroom19reminder.online/dashboard",
      githubUrl: "https://github.com/yosiarbilla/tr19whatsapp",
      linkType: "github"
    },
    {
      id: 2,
      title: "Aduan Konten",
      description: "Web-based content reporting platform built with Laravel. Designed to collect and manage public reports related to TNI-related content across social media. Features include secure authentication, detailed form submission, dynamic report filtering, and admin-side verification dashboard. Built to support digital vigilance with efficiency and clarity.",
      tech: ["Bootstrap", "Laravel", "MySQL", "KOMDIGI API"],
      image: "/aduankonten.png",
      liveUrl: "https://aduankonten.teluapp.org/",
      githubUrl: "https://github.com/yosiarbilla/aduankonten",
      linkType: "github"
    },
    {
      id: 3,
      title: "HealthSafe",
      description: "HealthSafe is a web-based medical record system developed for a clinic in Setiabudi, Bandung. Built with Laravel and MySQL, it streamlines patient data management, visit history, and diagnosis records in one clean and secure interface. Features include multi-user access, dynamic form generation, and exportable reports. Helping healthcare staff stay organized, one click at a time.",
      tech: ["Bootstrap", "Laravel", "MySQL"],
      image: "/healthsafe.jpg",
      liveUrl: "https://your-portfolio.com",
      githubUrl: "https://github.com/yourusername/portfolio",
      linkType: "github"
    },
    {
      id: 4,
      title: "PPID JABAR",
      description: "PPID Jabar is a public information disclosure portal for the West Java Provincial Government. As a front-end developer, I was responsible for building responsive and accessible UI components using modern JavaScript and CSS frameworks. The platform features dynamic information requests, document search, and interactive dashboards  all designed to improve public transparency and digital service delivery.",
      tech: ["Bootstrap", "Laravel", "MySQL"],
      image: "/ppidjabar.png",
      liveUrl: "https://ppid.jabarprov.go.id/home",
      githubUrl: "https://www.figma.com/proto/IjUxT5cE5luwjKI2ZK7Xto/Untitled?page-id=0%3A1&node-id=5-4&starting-point-node-id=5%3A4&scaling=scale-down-width&content-scaling=fixed&t=85AAnR64Tsobjou0-1",
      linkType: "figma"
    },
    {
      id: 5,
      title: "Rental Car",
      description: "Simple car rental application designed for efficient vehicle booking and management. Built with React and Node.js, it features user authentication, car availability tracking, and booking history — providing a smooth experience for both users and admins.",
      tech: ["React", "Node.js", "MongoDB"],
      image: "/rentalcar.jpg",
      liveUrl: "https://your-project2-demo.com",
      githubUrl: "https://github.com/yosiarbilla/rentalcarprojectyosi",
      linkType: "github"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-20 section-padding bg-dark-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4 text-gradient">Featured Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and side projects. Each project represents 
            my commitment to quality code and user experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="card group"
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                
                <div className="w-full h-48 bg-gradient-to-br from-dark-700 to-dark-600 flex items-center justify-center" style={{ display: 'none' }}>
                  <div className="text-gray-500 text-center">
                    <div className="w-16 h-16 bg-dark-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm">Add {project.image} to public folder</p>
                  </div>
                </div>

                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform duration-300"
                    title="View Live Demo"
                  >
                    <FiExternalLink size={20} />
                  </a>
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full hover:scale-110 transition-transform duration-300 ${
                      project.linkType === 'figma' 
                        ? 'bg-purple-600 text-white hover:bg-purple-700' 
                        : 'bg-dark-800 text-white hover:bg-gray-700'
                    }`}
                    title={project.linkType === 'figma' ? 'View Design' : 'View Source Code'}
                  >
                    {project.linkType === 'figma' ? (
                      <SiFigma size={20} />
                    ) : (
                      <FiGithub size={20} />
                    )}
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-dark-700 text-gray-300 text-sm rounded-full border border-dark-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-secondary">
            Want to see more? Let's talk →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;