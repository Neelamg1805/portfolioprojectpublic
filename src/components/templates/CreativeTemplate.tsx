import React from "react";
import { motion } from "framer-motion";
import { PortfolioState } from "../../types/portfolio";

interface CreativeTemplateProps {
  data: PortfolioState;
}

const CreativeTemplate: React.FC<CreativeTemplateProps> = ({ data }) => {
  const { userData, projects, skills, designOptions } = data;

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-orange-100 via-red-50 to-pink-100"
      style={{
        fontFamily: designOptions.fontFamily,
      }}
    >
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-orange-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1
              className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent"
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
                  className="text-orange-600 hover:text-pink-600 transition-colors duration-300 font-medium"
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
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full blur-3xl opacity-30"></div>
              <div className="relative">
                <h1 className="text-6xl md:text-8xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                    {userData.name.split(' ')[0]}
                  </span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-orange-700 mb-8">
                  {userData.title}
                </h2>
                <p className="text-lg md:text-xl text-orange-600 max-w-3xl mx-auto mb-12 leading-relaxed">
                  {userData.bio}
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full text-white font-semibold hover:from-orange-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Let's Work Together
              </button>
              <button className="px-8 py-4 border-2 border-orange-400 rounded-full text-orange-600 font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300">
                View My Work
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-orange-600">
              Creative Skills
            </h2>
            <p className="text-xl text-orange-500">
              A colorful showcase of my creative abilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🎨</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-orange-700">{skill.name}</h3>
                    <p className="text-orange-500 text-sm">{skill.category}</p>
                  </div>
                </div>
                <div className="w-full bg-orange-100 rounded-full h-3 mb-2">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-orange-400 to-pink-400"
                    style={{ width: `${skill.level === 'beginner' ? 25 : skill.level === 'intermediate' ? 50 : skill.level === 'advanced' ? 75 : 90}%` }}
                  ></div>
                </div>
                <p className="text-orange-600 text-sm font-medium capitalize">{skill.level}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white/50">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-orange-600">
              Creative Projects
            </h2>
            <p className="text-xl text-orange-500">
              Bold and innovative projects that showcase creativity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-48 bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">🚀</div>
                    <div className="text-xl font-bold">{project.title}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-orange-700 mb-3">{project.title}</h3>
                  <p className="text-orange-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <button className="flex items-center text-orange-600 hover:text-orange-700 transition-colors font-medium">
                      <span className="mr-2">👁️</span>
                      View Project
                    </button>
                    <button className="flex items-center text-orange-600 hover:text-orange-700 transition-colors font-medium">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-orange-600">
              Let's Create Together
            </h2>
            <p className="text-xl text-orange-500">
              Ready to bring your ideas to life?
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-orange-700 mb-6">Get In Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center text-orange-600">
                      <span className="mr-4 text-2xl">📧</span>
                      {userData.email}
                    </div>
                    <div className="flex items-center text-orange-600">
                      <span className="mr-4 text-2xl">📱</span>
                      {userData.phone}
                    </div>
                    <div className="flex items-center text-orange-600">
                      <span className="mr-4 text-2xl">📍</span>
                      {userData.location}
                    </div>
                  </div>
                </div>
                <div>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-orange-50 border border-orange-200 rounded-lg px-4 py-3 text-orange-700 placeholder-orange-400 focus:outline-none focus:border-orange-400"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full bg-orange-50 border border-orange-200 rounded-lg px-4 py-3 text-orange-700 placeholder-orange-400 focus:outline-none focus:border-orange-400"
                    />
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full bg-orange-50 border border-orange-200 rounded-lg px-4 py-3 text-orange-700 placeholder-orange-400 focus:outline-none focus:border-orange-400"
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-pink-600 transition-all duration-300"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-600 py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-white">
            © {new Date().getFullYear()} {userData.name} - Creative Portfolio
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CreativeTemplate;