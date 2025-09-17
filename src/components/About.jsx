import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 section-padding bg-dark-800">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-secondary mb-6 text-gradient">About Me</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg">
                I am a recent graduate with a deep passion for web development. 
                With over a year of experience in the tech industry, I continuously 
                sharpen my skills to build innovative and user-friendly digital solutions.
              </p>
              <p>
                My main focus is developing modern web applications using cutting-edge 
                technologies such as React, Node.js, and Laravel. As an active learner, 
                I strive to produce clean, scalable, and maintainable code.
              </p>
              <p>
                Beyond technical expertise, I also have a strong sense of design, 
                enabling me to create interfaces that are not only functional but also 
                visually appealing and optimized for an excellent user experience.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <div className="flex flex-wrap gap-3">
                {['Problem Solving', 'Team Collaboration', 'Continuous Learning', 'Innovation'].map((trait, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-sm text-gray-300 hover:border-gray-500 transition-colors duration-300"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-dark-700 to-dark-600 rounded-2xl overflow-hidden border border-dark-600 shadow-2xl">
                <img 
                  src="/yosi.jpg" 
                  alt="Yosi Pratama"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center text-gray-500" style={{ display: 'none' }}>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-dark-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm">Add your photo to public/profile.jpg</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white opacity-5 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white opacity-5 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 