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
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4 text-gradient">Get In Touch</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'm always open to 
            discussing new opportunities and interesting projects.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
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
                      className={`flex items-center space-x-4 p-4 rounded-lg bg-dark-800 border border-dark-600 hover:border-gray-500 transition-all duration-300 group ${contact.color}`}
                    >
                      <div className="flex-shrink-0">
                        <IconComponent size={24} className="text-gray-400 group-hover:text-current transition-colors duration-300" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{contact.label}</p>
                        <p className="text-white group-hover:text-current transition-colors duration-300">
                          {contact.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}

                <motion.div
                  variants={itemVariants}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-dark-800 border border-dark-600"
                >
                  <div className="flex-shrink-0">
                    <FiMapPin size={24} className="text-gray-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Bandung, Indonesia</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:pl-8"
            >
              <div className="card">
                <h3 className="text-xl font-bold text-white mb-6">Ready to Work Together?</h3>
                
                <div className="space-y-4 mb-8">
                  <p className="text-gray-300 leading-relaxed">
                    I'm currently available for freelance projects and full-time opportunities. 
                    Whether you need a complete web application or want to collaborate on an 
                    existing project, I'd love to hear from you.
                  </p>
                  
                  <div className="space-y-3">
                    {[
                      "📱 Web & Mobile Applications",
                      "🎨 UI/UX Design Implementation", 
                      "⚡ Performance Optimization",
                      "🔧 Technical Consulting"
                    ].map((service, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center text-gray-300"
                      >
                        <span className="mr-3">{service.split(' ')[0]}</span>
                        <span>{service.split(' ').slice(1).join(' ')}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.a
                  href="mailto:yosi.pratama@email.com"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="btn-primary w-full text-center block"
                >
                  Start a Conversation
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-8 border-t border-dark-600"
        >
          <p className="text-gray-500">
            © 2024 Yosi Arbilla.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 