import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiJavascript, 
  SiTypescript, 
  SiNodedotjs, 
  SiLaravel, 
  SiPhp, 
  SiMysql, 
  SiMongodb, 
  SiTailwindcss, 
  SiBootstrap,
  SiGit, 
  SiDocker, 
  SiFigma 
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
        { name: "PHP", icon: SiPhp, color: "#777BB4" },
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
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "Figma", icon: SiFigma, color: "#F24E1E" },
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
    <section id="skills" className="py-20 section-padding bg-dark-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4 text-gradient">Skills & Technologies</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
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
              className="card"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">{category.title}</h3>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={skillIndex}
                      variants={itemVariants}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-dark-700 transition-colors duration-300 group"
                    >
                      <div className="flex-shrink-0">
                        <IconComponent 
                          size={24} 
                          className="transition-colors duration-300 group-hover:text-white"
                          style={{ color: skill.color }}
                        />
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-6">What I Bring to the Table</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Clean Code",
                  description: "Writing maintainable, scalable, and well-documented code that follows best practices."
                },
                {
                  title: "User Experience",
                  description: "Focusing on creating intuitive and engaging user interfaces that users love to interact with."
                },
                {
                  title: "Performance",
                  description: "Optimizing applications for speed, efficiency, and excellent performance across all devices."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-dark-700 rounded-lg border border-dark-600"
                >
                  <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
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