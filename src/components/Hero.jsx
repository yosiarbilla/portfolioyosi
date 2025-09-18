import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  // Hofner Bass SVG Component
  const HofnerBass = ({ className }) => (
    <svg 
      viewBox="0 0 100 40" 
      className={className}
      fill="currentColor"
    >
      {/* Bass body */}
      <ellipse cx="25" cy="20" rx="15" ry="12" opacity="0.6"/>
      {/* Neck */}
      <rect x="40" y="18" width="35" height="4" opacity="0.6"/>
      {/* Headstock */}
      <rect x="75" y="16" width="8" height="8" opacity="0.6"/>
      {/* Strings */}
      <line x1="40" y1="19" x2="75" y2="19" stroke="currentColor" strokeWidth="0.3" opacity="0.4"/>
      <line x1="40" y1="20" x2="75" y2="20" stroke="currentColor" strokeWidth="0.3" opacity="0.4"/>
      <line x1="40" y1="21" x2="75" y2="21" stroke="currentColor" strokeWidth="0.3" opacity="0.4"/>
      <line x1="40" y1="22" x2="75" y2="22" stroke="currentColor" strokeWidth="0.3" opacity="0.4"/>
      {/* F-holes */}
      <path d="M20 16 Q22 18 20 20 Q18 18 20 16" opacity="0.3"/>
      <path d="M30 16 Q32 18 30 20 Q28 18 30 16" opacity="0.3"/>
    </svg>
  );

  // Floating bass animations
  const floatingBassVariants = {
    animate: {
      x: ['0vw', '100vw'],
      y: [0, -10, 5, -15, 0],
      rotate: [0, 5, -3, 8, 0],
      transition: {
        x: {
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        },
        y: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        },
        rotate: {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    }
  };

  const floatingBassVariants2 = {
    animate: {
      x: ['0vw', '100vw'],
      y: [0, 15, -8, 12, 0],
      rotate: [0, -8, 5, -3, 0],
      transition: {
        x: {
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          delay: 5
        },
        y: {
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        },
        rotate: {
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }
      }
    }
  };

  const floatingBassVariants3 = {
    animate: {
      x: ['0vw', '100vw'],
      y: [0, -20, 8, -5, 0],
      rotate: [0, 10, -5, 12, 0],
      transition: {
        x: {
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          delay: 10
        },
        y: {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        },
        rotate: {
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
      
      {/* Floating Hofner Bass Animations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Bass 1 - Large, slow */}
        <motion.div
          className="absolute top-20 -left-20"
          variants={floatingBassVariants}
          animate="animate"
        >
          <HofnerBass className="w-24 h-10 text-gray-700" />
        </motion.div>

        {/* Bass 2 - Medium, medium speed */}
        <motion.div
          className="absolute top-40 -left-16"
          variants={floatingBassVariants2}
          animate="animate"
        >
          <HofnerBass className="w-16 h-7 text-gray-600" />
        </motion.div>

        {/* Bass 3 - Small, fast */}
        <motion.div
          className="absolute top-64 -left-12"
          variants={floatingBassVariants3}
          animate="animate"
        >
          <HofnerBass className="w-12 h-5 text-gray-800" />
        </motion.div>

        {/* Bass 4 - Large, very slow */}
        <motion.div
          className="absolute top-96 -left-24"
          variants={{
            animate: {
              x: ['0vw', '100vw'],
              y: [0, -25, 10, -15, 0],
              rotate: [0, -12, 8, -5, 0],
              transition: {
                x: {
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 15
                },
                y: {
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 6
                },
                rotate: {
                  duration: 14,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 5
                }
              }
            }
          }}
          animate="animate"
        >
          <HofnerBass className="w-20 h-8 text-gray-700" />
        </motion.div>

        {/* Bass 5 - Tiny, medium speed */}
        <motion.div
          className="absolute top-32 -left-8"
          variants={{
            animate: {
              x: ['0vw', '100vw'],
              y: [0, 18, -12, 20, 0],
              rotate: [0, 15, -8, 10, 0],
              transition: {
                x: {
                  duration: 22,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 8
                },
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 3
                },
                rotate: {
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }
              }
            }
          }}
          animate="animate"
        >
          <HofnerBass className="w-8 h-3 text-gray-600" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container-max text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Profile Photo with Modern Effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12 relative inline-block"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-[#EF7722] opacity-0 animate-pulse blur-xl scale-110"></div>
            
            {/* Profile Container */}
            <div className="relative">
              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-full bg-[#EF7722] p-1">
                <div className="w-full h-full rounded-full bg-dark-900"></div>
              </div>
              
              {/* Profile Image */}
              <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden shadow-2xl">
                <img 
                  src="/yosi.jpg" 
                  alt="Yosi Arbilla"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-dark-700 to-dark-600 flex items-center justify-center" style={{ display: 'none' }}>
                  <svg className="w-20 h-20 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Name with Enhanced Typography */}
          <motion.h1 
            className="heading-primary mb-6 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-[#EF7722]">
              Yosi Arbilla
            </span>
            {/* Decorative Line */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#EF7722] rounded-full"></div>
          </motion.h1>
          
          {/* Enhanced Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 mb-6 font-bold"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-[#EF7722]">
                Web Developer
              </span>
            </motion.h2>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-[#A64F12] text-lg leading-relaxed mb-4">
                Crafting modern digital experiences with clean code and innovative design. 
                Specialized in React, Laravel, and full-stack development.
              </p>
              <p className="text-[#A64F12] text-base leading-relaxed">
                Also a part-time guitar hero and full-time Beatles enthusiast — 
                <span className="text-[#EF7722] font-medium"> let it code, let it be!</span> 🎸
              </p>
            </div>
          </motion.div>

          {/* Enhanced Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button 
              onClick={scrollToProjects}
              className="group relative px-8 py-4 bg-[#EF7722] text-[#FFFFF0] font-semibold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button Glow Effect */}
              <div className="absolute inset-0 bg-[#d96516] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              
              {/* Button Content */}
              <div className="relative flex items-center">
                <span className="mr-3">View Work</span>
                <motion.span 
                  className="inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </div>
            </motion.button>
            
            <motion.button 
              onClick={scrollToContact}
              className="group relative px-8 py-4 border-2 border-[#EF7722] text-[#EF7722] font-semibold rounded-xl hover:bg-[#EF7722] hover:text-[#FFFFF0] transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Hover Background */}
              <div className="absolute inset-0 bg-[#EF7722] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Button Content */}
              <span className="relative">Contact Me</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Mouse Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div 
          className="cursor-pointer group"
          onClick={scrollToProjects}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-[#EF7722] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm scale-110"></div>
          
          {/* Scroll Indicator */}
          <div className="relative w-8 h-12 border-2 border-[#EF7722] rounded-full flex justify-center items-start pt-2 transition-colors duration-300">
            <motion.div 
              className="w-1 h-4 bg-gradient-to-b from-[#EF7722] to-[#d96516] rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          
          {/* Scroll Text */}
          <motion.p 
            className="text-[#EF7722] text-xs mt-2 text-center"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Scroll
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 