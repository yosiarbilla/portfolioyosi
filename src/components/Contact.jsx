import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiInstagram, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "yosiarbl16@gmail.com",
      href: "mailto:yosiarbl16@gmail.com",
      color: "hover:text-blue-400"
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      value: "/in/yosiarbilla",
      href: "https://linkedin.com/in/yosiarbilla",
      color: "hover:text-blue-500"
    },
    {
      icon: FiGithub,
      label: "GitHub",
      value: "@yosiarbilla",
      href: "https://github.com/yosiarbilla",
      color: "hover:text-gray-300"
    },
    {
      icon: FiInstagram,
      label: "Instagram",
      value: "@yosiarbb",
      href: "https://instagram.com/yosiarbb",
      color: "hover:text-pink-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="contact" className="py-20 section-padding bg-dark-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-secondary mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
          </motion.div>
          
          <motion.p 
            className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Have a project in mind or want to collaborate? I'm always open to 
            discussing new opportunities and interesting projects.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Background Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <motion.h3 
                  className="text-2xl font-bold text-white mb-10 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Let's Connect
                </motion.h3>
                
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {contactInfo.map((contact, index) => {
                    const IconComponent = contact.icon;
                    return (
                      <motion.a
                        key={index}
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={itemVariants}
                        className="group relative block"
                      >
                        {/* Modern Card with Gradient Border */}
                        <div className="relative bg-gradient-to-br from-dark-800 via-dark-700 to-dark-800 rounded-2xl p-1 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                          {/* Gradient Border */}
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                          
                          {/* Card Content */}
                          <div className="relative bg-dark-800 rounded-2xl p-6 flex items-center space-x-4">
                            {/* Icon with Glow Effect */}
                            <div className="flex-shrink-0 relative">
                              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm bg-gradient-to-r from-blue-500 to-purple-500"></div>
                              <IconComponent 
                                size={28} 
                                className="relative text-gray-400 group-hover:text-white transition-all duration-300 group-hover:scale-110" 
                              />
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1">
                              <p className="text-gray-400 text-sm font-medium mb-1">{contact.label}</p>
                              <p className="text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300 font-semibold">
                                {contact.value}
                              </p>
                            </div>
                            
                            {/* Hover Indicator */}
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
                            </div>
                          </div>
                        </div>
                      </motion.a>
                    );
                  })}

                  {/* Location Card */}
                  <motion.div
                    variants={itemVariants}
                    className="group relative block"
                  >
                    <div className="relative bg-gradient-to-br from-dark-800 via-dark-700 to-dark-800 rounded-2xl p-1 shadow-xl">
                      <div className="relative bg-dark-800 rounded-2xl p-6 flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <FiMapPin size={28} className="text-gray-400" />
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-400 text-sm font-medium mb-1">Location</p>
                          <p className="text-white font-semibold">Bandung, Indonesia</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:pl-8"
            >
              <div className="group relative">
                {/* Modern Card with Gradient Border */}
                <div className="relative bg-gradient-to-br from-dark-800 via-dark-700 to-dark-800 rounded-2xl p-1 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                  {/* Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                  
                  {/* Card Content */}
                  <div className="relative bg-dark-800 rounded-2xl p-8">
                    <motion.h3 
                      className="text-2xl font-bold text-white mb-8 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      Ready to Work Together?
                    </motion.h3>
                    
                    <div className="space-y-6 mb-10">
                      <motion.p 
                        className="text-gray-300 leading-relaxed text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                      >
                        I'm currently available for freelance projects and full-time opportunities. 
                        Whether you need a complete web application or want to collaborate on an 
                        existing project, I'd love to hear from you.
                      </motion.p>
                      
                      <div className="space-y-4">
                        {[
                          { icon: "📱", text: "Web & Mobile Applications" },
                          { icon: "🎨", text: "UI/UX Design Implementation" },
                          { icon: "⚡", text: "Performance Optimization" },
                          { icon: "🔧", text: "Technical Consulting" }
                        ].map((service, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            viewport={{ once: true }}
                            className="group/item flex items-center p-3 rounded-xl bg-gradient-to-r from-dark-700/50 to-dark-600/50 hover:from-blue-600/20 hover:to-purple-600/20 transition-all duration-300 border border-dark-600 hover:border-blue-400/50"
                          >
                            <span className="text-2xl mr-4 group-hover/item:scale-110 transition-transform duration-300">{service.icon}</span>
                            <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300 font-medium">{service.text}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
            
                    </motion.div>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-24 pt-12"
        >
          <div className="relative">
            {/* Gradient Line */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
            
            <motion.p 
              className="text-gray-500 text-lg font-medium mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              © 2024 Yosi Arbilla
            </motion.p>
            
            <motion.p 
              className="text-gray-600 text-sm mt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Let's create something amazing together!
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 