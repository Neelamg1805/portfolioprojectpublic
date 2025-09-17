import React from "react";
import { motion } from "framer-motion";
import { formatDate } from "../../lib/utils";
import { PortfolioState } from "../../types/portfolio";

interface ProfessionalTemplateProps {
  data: PortfolioState;
}

const ProfessionalTemplate: React.FC<ProfessionalTemplateProps> = ({ data }) => {
  const { userData, projects, experience, skills, designOptions } = data;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const getSkillCategory = (category: string) => {
    const categories: Record<string, { color: string; icon: string }> = {
      'frontend': { color: 'from-blue-500 to-cyan-500', icon: '🌐' },
      'backend': { color: 'from-green-500 to-emerald-500', icon: '🔧' },
      'mobile': { color: 'from-purple-500 to-pink-500', icon: '📱' },
      'tools': { color: 'from-orange-500 to-red-500', icon: '🛠️' },
      'database': { color: 'from-yellow-500 to-orange-500', icon: '🗄️' },
    };
    return categories[category.toLowerCase()] || categories['frontend'];
  };

  const getSkillLevel = (level: string) => {
    const levels: Record<string, number> = {
      'beginner': 25,
      'intermediate': 50,
      'advanced': 75,
      'expert': 90,
    };
    return levels[level] || 50;
  };

  return (
    <div
      className="min-h-screen bg-gray-900 text-white"
      style={{
        fontFamily: designOptions.fontFamily,
      }}
    >
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {userData.name.toUpperCase()}
            </motion.h1>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Work', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                {userData.name.split(' ')[0]}
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
              {userData.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              {userData.bio}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                Hire Me
              </button>
              <button className="px-8 py-4 border border-purple-400 rounded-full text-purple-400 font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                Download CV
              </button>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              { icon: '⭐', label: 'Years Experience', value: '1+' },
              { icon: '🚀', label: 'Projects Completed', value: '15+' },
              { icon: '⚡', label: 'Technologies', value: '10+' },
              { icon: '🎯', label: 'Academic Score', value: '92%' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-purple-400">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-800">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-400">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </motion.div>

          {/* Skills by Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['frontend', 'backend', 'mobile', 'tools'].map((category) => {
              const categorySkills = skills.filter(skill => 
                skill.category.toLowerCase() === category
              );
              if (categorySkills.length === 0) return null;

              const categoryInfo = getSkillCategory(category);
              const avgProficiency = Math.round(
                categorySkills.reduce((sum, skill) => sum + getSkillLevel(skill.level), 0) / categorySkills.length
              );

              return (
                <motion.div
                  key={category}
                  className="bg-gray-700 rounded-2xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{categoryInfo.icon}</span>
                    <h3 className="text-xl font-bold capitalize">{category}</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    {categorySkills.length} Technologies • {avgProficiency}% Avg
                  </p>
                  <div className="space-y-3">
                    {categorySkills.slice(0, 3).map((skill) => (
                      <div key={skill.id}>
                        <div className="flex justify-between text-sm mb-1">
                          <span>{skill.name}</span>
                          <span className="text-purple-400">{getSkillLevel(skill.level)}%</span>
                        </div>
                        <div className="w-full bg-gray-600 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full bg-gradient-to-r ${categoryInfo.color}`}
                            style={{ width: `${getSkillLevel(skill.level)}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section id="work" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Work Experience</h2>
            <p className="text-xl text-gray-400">My professional journey and achievements</p>
          </motion.div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="flex flex-col md:flex-row gap-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="md:w-1/3">
                  <div className="bg-gray-800 rounded-2xl p-6 h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-white font-bold">&lt;/&gt;</span>
                      </div>
                      <div>
                        <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                          {exp.endDate ? 'Full-time' : 'Current'}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{exp.position}</h3>
                    <div className="flex items-center text-gray-400 mb-4">
                      <span className="mr-2">💼</span>
                      {exp.company}
                    </div>
                    <div className="text-sm text-gray-500">
                      {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : 'Present'}
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="bg-gray-800 rounded-2xl p-6">
                    <p className="text-gray-300 mb-6">{exp.description}</p>
                    <div>
                      <h4 className="font-semibold mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center text-gray-300">
                          <span className="text-green-400 mr-2">✓</span>
                          Built 5+ production applications
                        </li>
                        <li className="flex items-center text-gray-300">
                          <span className="text-green-400 mr-2">✓</span>
                          Improved performance by 40%
                        </li>
                        <li className="flex items-center text-gray-300">
                          <span className="text-green-400 mr-2">✓</span>
                          Led team of 3 developers
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 px-6 bg-gray-800">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-400">A showcase of my recent work and contributions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-gray-700 rounded-2xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">&lt;/&gt;</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">Live</span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <span className="mr-1">⭐</span>
                        {Math.floor(Math.random() * 50) + 10}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <span className="mr-1">🔗</span>
                        {Math.floor(Math.random() * 20) + 5}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-600 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                      <span className="mr-2">&lt;/&gt;</span>
                      View Code
                    </button>
                    <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                      <span className="mr-2">🔗</span>
                      Live Demo
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-purple-400">Get In Touch</h2>
            <p className="text-xl text-gray-400">Let's collaborate and build something amazing together</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              className="bg-gray-800 rounded-2xl p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <span className="mr-4">📞</span>
                  {userData.phone}
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="mr-4">✉️</span>
                  {userData.email}
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="mr-4">📍</span>
                  {userData.location}
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
                <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors flex items-center">
                  <span className="mr-2">🐙</span>
                  GitHub
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center">
                  <span className="mr-2">💼</span>
                  LinkedIn
                </button>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="bg-gray-800 rounded-2xl p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-6 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} {userData.name} - Built with passion and code
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProfessionalTemplate;
