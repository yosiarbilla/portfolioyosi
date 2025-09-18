import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiNextdotjs,
  SiJavascript, 
  SiNodedotjs, 
  SiLaravel, 
  SiPhp, 
  SiMysql, 
  SiMongodb, 
  SiTailwindcss, 
  SiBootstrap,
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
        { name: "PHP", icon: SiPhp, color: "#777BB4" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      ]
    },
    {
      title: "Frameworks",
      skills: [
        { name: "NextJS", icon: SiNextdotjs, color: "#000000" },
        { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      ]
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20 section-padding bg-[#FFFFF0]">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4 text-[#EF7722]">Skills & Technologies</h2>
          <p className="text-[#A64F12] text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life. Always learning and 
            exploring new technologies to stay current with industry trends.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Modern Card with Gradient Border */}
              <div className="relative bg-[#FFFFF0] rounded-2xl p-1 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] border border-[#EF7722]">
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-[#EF7722] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                
                {/* Card Content */}
                <div className="relative bg-[#FFFFF0] rounded-2xl p-6 h-full">
                  {/* Category Header */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-[#EF7722] transition-all duration-300">
                      {category.title}
                    </h3>
                    <div className="w-12 h-1 bg-[#EF7722] mx-auto mt-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-3"
                  >
                    {category.skills.map((skill, skillIndex) => {
                      const IconComponent = skill.icon;
                      return (
                        <motion.div
                          key={skillIndex}
                          variants={itemVariants}
                          className="group/skill relative"
                        >
                          <div className="flex items-center space-x-3 p-4 rounded-xl bg-[#EF7722]/5 hover:bg-[#EF7722]/10 transition-all duration-300 border border-[#EF7722]/40 hover:border-[#EF7722] hover:shadow-lg cursor-pointer">
                            {/* Icon with Glow Effect */}
                            <div className="flex-shrink-0 relative">
                              <div className="absolute inset-0 rounded-full opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 blur-sm"
                                   style={{ backgroundColor: skill.color, filter: 'blur(8px)' }}></div>
                              <IconComponent 
                                size={24} 
                                className="relative transition-all duration-300 group-hover/skill:scale-110"
                                style={{ color: skill.color }}
                              />
                            </div>
                            
                            {/* Skill Name */}
                            <span className="text-[#A64F12] transition-colors duration-300 font-medium">
                              {skill.name}
                            </span>
                            
                            {/* Hover Indicator */}
                            <div className="ml-auto opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300">
                              <div className="w-2 h-2 rounded-full bg-[#EF7722]"></div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-[#EF7722] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-[#EF7722] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold text-[#EF7722] mb-4">
                What I Bring to the Table
              </h3>
              <div className="w-24 h-1 bg-[#EF7722] mx-auto rounded-full"></div>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Clean Code",
                  description: "Writing maintainable, scalable, and well-documented code that follows best practices.",
                  icon: "💻",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  title: "User Experience",
                  description: "Focusing on creating intuitive and engaging user interfaces that users love to interact with.",
                  icon: "🎨",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  title: "Performance",
                  description: "Optimizing applications for speed, efficiency, and excellent performance across all devices.",
                  icon: "⚡",
                  gradient: "from-green-500 to-emerald-500"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  {/* Modern Card with Gradient Border */}
                  <div className="relative bg-[#FFFFF0] rounded-2xl p-1 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] border border-[#EF7722]">
                    {/* Gradient Border */}
                    <div className={`absolute inset-0 bg-[#EF7722] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}></div>
                    
                    {/* Card Content */}
                    <div className="relative bg-[#FFFFF0] rounded-2xl p-8 h-full text-center">
                      {/* Icon */}
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      
                      {/* Title */}
                      <h4 className="font-bold text-[#EF7722] mb-4 text-lg transition-all duration-300">
                        {item.title}
                      </h4>
                      
                      {/* Description */}
                      <p className="text-[#A64F12] text-sm leading-relaxed transition-colors duration-300">
                        {item.description}
                      </p>
                      
                      {/* Decorative Elements */}
                      <div className="absolute top-4 right-4 w-2 h-2 bg-[#EF7722] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute bottom-4 left-4 w-1 h-1 bg-[#EF7722] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 