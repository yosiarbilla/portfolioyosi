import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 section-padding bg-[#FFFFF0]">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Glow Effect */}
            <div className="absolute -inset-4 bg-[#EF7722]/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative">
              {/* Enhanced Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="heading-secondary mb-4 text-[#EF7722]">
                  About Me
                </h2>
                <div className="w-20 h-1 bg-[#EF7722] rounded-full"></div>
              </motion.div>

              {/* Enhanced Content */}
              <div className="space-y-6 text-[#A64F12] leading-relaxed">
                <motion.p 
                  className="text-lg font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  I am a fresh graduate with a deep passion for web development. 
                  With over a year of experience in the tech industry, I continuously 
                  sharpen my skills to build innovative and user-friendly digital solutions.
                </motion.p>
                
                <motion.p className="text-lg font-medium" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  My main focus is developing modern web applications using cutting-edge 
                  technologies such as React, Node.js, and Laravel. As an active learner, 
                  I strive to produce clean, scalable, and maintainable code.
                </motion.p>
                
                <motion.p className="text-lg font-medium" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Beyond technical expertise, I also have a strong sense of design, 
                  enabling me to create interfaces that are not only functional but also 
                  visually appealing and optimized for an excellent user experience.
                </motion.p>
              </div>

              {/* Enhanced Skills Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-10"
              >
                <h3 className="text-lg font-semibold text-[#EF7722] mb-4">Key Strengths</h3>
                <div className="flex flex-wrap gap-3">
                  {['Problem Solving', 'Team Collaboration', 'Continuous Learning', 'Innovation'].map((trait, index) => (
                    <motion.span 
                      key={index}
                      className="group relative px-4 py-2 bg-[#EF7722]/10 border border-[#EF7722] rounded-xl text-sm text-[#A64F12] hover:bg-[#EF7722]/20 transition-all duration-300 cursor-default"
                      whileHover={{ scale: 1.05, y: -2 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-[#EF7722]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm pointer-events-none"></div>
                      <span className="relative">{trait}</span>
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Main Image Container with Modern Effects */}
              <div className="relative">
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-[#EF7722] rounded-3xl p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                
                {/* Image Container */}
                <div className="relative w-80 h-80 bg-[#FFFFF0] rounded-3xl overflow-hidden border border-[#EF7722] shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                  <img 
                    src="/yosi.jpg" 
                    alt="Yosi Arbilla"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  
                  {/* Fallback Image */}
                  <div className="w-full h-full flex items-center justify-center text-[#A64F12]" style={{ display: 'none' }}>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-[#EF7722]/10 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium">Add your photo to public/yosi.jpg</p>
                    </div>
                  </div>
                  
                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Enhanced Decorative Elements */}
              <motion.div 
                className="absolute -top-6 -right-6 w-28 h-28 bg-[#EF7722]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              />
              
              <motion.div 
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-[#EF7722]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-lg"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [360, 180, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "linear",
                  delay: 1
                }}
              />

              {/* Floating Elements */}
              <motion.div 
                className="absolute top-8 -left-4 w-3 h-3 bg-[#EF7722] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              
              <motion.div 
                className="absolute bottom-12 -right-2 w-2 h-2 bg-[#EF7722] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                animate={{ 
                  y: [0, 8, 0],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1.5
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 