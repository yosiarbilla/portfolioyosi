import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { SiFigma } from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "The Room 19 Reservation",
      description: "Seat reservation web application for streamlined booking and admin management. Built with Laravel 12, ReactJS, Inertia.js, and MySQL, featuring interactive seat selection, real-time availability, and an admin dashboard for confirmation and monitoring.",
      tech: ["ReactJs", "Laravel 12", "MySQL", "Inertia.js"],
      image: "/theroom19rsvp.png",
      liveUrl: "https://theroom19rsvp.site",
      githubUrl: "https://github.com/yosiarbilla/laravelbooking12",
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
      title: "The Room 19 Reminder",
      description: "Full-stack WhatsApp reminder system built with Laravel and integrated with Wasender API. Features include automated daily scheduling, dynamic message templates, and real-time status logging via cron job. Perfect for sending personalized return-book reminders hassle-free! 📚📲⏰",
      tech: ["Bootstrap", "Laravel", "MySQL", "Whatsapp API"],
      image: "/tr19.png",
      liveUrl: "https://theroom19reminder.online/dashboard",
      githubUrl: "https://github.com/yosiarbilla/tr19whatsapp",
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
      liveUrl: "",
      githubUrl: "https://github.com/yosiarbilla/rentalcarprojectyosi",
      linkType: "github"
    },
   
    {
      id: 6,
      title: "HealthSafe",
      description: "HealthSafe is a web-based medical record system developed for a clinic in Setiabudi, Bandung. Built with Laravel and MySQL, it streamlines patient data management, visit history, and diagnosis records in one clean and secure interface. Features include multi-user access, dynamic form generation, and exportable reports. Helping healthcare staff stay organized, one click at a time.",
      tech: ["Bootstrap", "Laravel", "MySQL"],
      image: "/healthsafe.jpg",
      liveUrl: "",
      githubUrl: "https://github.com/yourusername/portfolio",
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
    <section id="projects" className="py-20 section-padding bg-[#FFFFF0]">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4 text-[#EF7722]">Featured Projects</h2>
          <p className="text-[#A64F12] text-lg max-w-2xl mx-auto">
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
              className="group relative"
            >
              {/* Modern Card with Gradient Border */}
              <div className="relative bg-[#FFFFF0] rounded-2xl p-1 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] border border-[#EF7722]">
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-[#EF7722] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none"></div>
                
                {/* Card Content */}
                <div className="relative bg-[#FFFFF0] rounded-2xl p-6 h-full flex flex-col">
                  {/* Image Container with Modern Effects */}
                  <div className="relative overflow-hidden rounded-xl mb-6 group/image">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    
                    {/* Fallback Image */}
                    <div className="w-full h-48 bg-[#FFFFF0] flex items-center justify-center" style={{ display: 'none' }}>
                      <div className="text-[#A64F12] text-center">
                        <div className="w-16 h-16 bg-[#EF7722]/10 rounded-xl mx-auto mb-2 flex items-center justify-center shadow-lg">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-sm font-medium">Add {project.image} to public folder</p>
                      </div>
                    </div>

                    {/* Interactive Overlay */}
                    <div className="absolute inset-0 z-20 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-4">
                      {project.liveUrl && (
                        <motion.a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 bg-[#EF7722] text-[#FFFFF0] rounded-full hover:opacity-90 hover:scale-110 transition-all duration-300 shadow-lg cursor-pointer"
                          title="View Live Demo"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiExternalLink size={20} />
                        </motion.a>
                      )}
                      <motion.a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 rounded-full hover:scale-110 transition-all duration-300 shadow-lg cursor-pointer ${
                          project.linkType === 'figma' 
                            ? 'bg-[#EF7722] text-[#FFFFF0]' 
                            : 'bg-[#EF7722] text-[#FFFFF0]'
                        }`}
                        title={project.linkType === 'figma' ? 'View Design' : 'View Source Code'}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {project.linkType === 'figma' ? (
                          <SiFigma size={20} />
                        ) : (
                          <FiGithub size={20} />
                        )}
                      </motion.a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-[#EF7722] mb-3">
                      {project.title}
                    </h3>
                    
                    <p className="text-[#A64F12] mb-6 leading-relaxed flex-1 text-sm">
                      {project.description}
                    </p>
                    
                    {/* Modern Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <motion.span 
                          key={index}
                          className="px-3 py-1.5 bg-[#EF7722]/10 text-[#A64F12] text-xs font-medium rounded-full border border-[#EF7722] transition-all duration-300 cursor-default"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-[#EF7722] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-[#EF7722] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
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