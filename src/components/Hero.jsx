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
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-600 shadow-2xl">
              <img 
                src="/yosi.jpg" 
                alt="Yosi Arbilla"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full h-full bg-dark-700 flex items-center justify-center" style={{ display: 'none' }}>
                <svg className="w-16 h-16 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.h1 
            className="heading-primary text-gradient mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Yosi Arbilla
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4 font-medium">
              Web Developer
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Crafting modern digital experiences with clean code and innovative design. Specialized in React, Laravel, and full-stack development. Also a part-time guitar hero and full-time Beatles enthusiast — let it code, let it be! 🎸💻✨
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button 
              onClick={scrollToProjects}
              className="btn-primary group"
            >
              <span className="mr-2">View Work</span>
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </button>
            
            <button 
              onClick={scrollToContact}
              className="btn-secondary"
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Mouse Scroll Indicator - Fixed Position */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="animate-bounce cursor-pointer" onClick={scrollToProjects}>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center hover:border-white transition-colors duration-300">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 