import React from "react";
import { motion } from "framer-motion";
import { formatDate } from "../../lib/utils.ts";
import { PortfolioState } from "../../types/portfolio.ts";

interface ModernTemplateProps {
  data: PortfolioState;
}

const ModernTemplate: React.FC<ModernTemplateProps> = ({ data }) => {
  const { userData, projects, experience, education, skills, designOptions } = data;

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

  const getBorderRadius = () => {
    switch (designOptions.borderRadius) {
      case "none": return "0";
      case "small": return "0.25rem";
      case "medium": return "0.5rem";
      case "large": return "1rem";
      default: return "0.5rem";
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: designOptions.fontFamily,
        backgroundColor: designOptions.darkMode ? "#1f2937" : "#f9fafb",
        color: designOptions.darkMode ? "#f3f4f6" : "#1f2937",
      }}
    >
      {/* Header */}
      <motion.header
        className="py-16 px-4"
        style={{ backgroundColor: designOptions.primaryColor }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#ffffff" }}
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {userData.name}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-6"
            style={{ color: "#e5e7eb" }}
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {userData.title}
          </motion.p>
          <motion.div
            className="flex justify-center space-x-4"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {userData.email && (
              <a href={`mailto:${userData.email}`} className="text-white hover:text-gray-200">
                Email
              </a>
            )}
            {userData.phone && (
              <a href={`tel:${userData.phone}`} className="text-white hover:text-gray-200">
                Phone
              </a>
            )}
            {userData.website && (
              <a href={userData.website} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
                Website
              </a>
            )}
          </motion.div>
        </div>
      </motion.header>

      <main className="container mx-auto px-4 py-12">
        {/* About Section */}
        {userData.bio && (
          <motion.section
            className="mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={designOptions.animations ? "visible" : undefined}
          >
            <motion.h2
              className="text-3xl font-bold mb-6"
              style={{ color: designOptions.primaryColor }}
              variants={itemVariants}
            >
              About Me
            </motion.h2>
            <motion.p
              className="text-lg max-w-3xl"
              style={{ color: designOptions.darkMode ? "#d1d5db" : "#4b5563" }}
              variants={itemVariants}
            >
              {userData.bio}
            </motion.p>
          </motion.section>
        )}

        {/* Skills Section */}
        {skills.length > 0 && (
          <motion.section
            className="mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={designOptions.animations ? "visible" : undefined}
          >
            <motion.h2
              className="text-3xl font-bold mb-6"
              style={{ color: designOptions.primaryColor }}
              variants={itemVariants}
            >
              Skills
            </motion.h2>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              variants={containerVariants}
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.id}
                  className="p-4 rounded-lg shadow-sm"
                  style={{
                    backgroundColor: designOptions.darkMode ? "#374151" : "#ffffff",
                    border: `1px solid ${designOptions.darkMode ? "#4b5563" : "#e5e7eb"}`,
                    borderRadius: getBorderRadius(),
                  }}
                  variants={itemVariants}
                  whileHover={designOptions.animations ? { y: -5 } : undefined}
                >
                  <h3 className="font-bold">{skill.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm" style={{ color: designOptions.darkMode ? "#9ca3af" : "#6b7280" }}>
                      {skill.category}
                    </span>
                    <span
                      className="text-xs px-2 py-1 rounded-full"
                      style={{
                        backgroundColor: designOptions.primaryColor + "20",
                        color: designOptions.primaryColor,
                      }}
                    >
                      {skill.level}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )}

        {/* Projects Section */}
        {projects.length > 0 && (
          <motion.section
            className="mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={designOptions.animations ? "visible" : undefined}
          >
            <motion.h2
              className="text-3xl font-bold mb-6"
              style={{ color: designOptions.primaryColor }}
              variants={itemVariants}
            >
              Projects
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={containerVariants}
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  className="overflow-hidden rounded-lg shadow-md"
                  style={{
                    backgroundColor: designOptions.darkMode ? "#374151" : "#ffffff",
                    border: `1px solid ${designOptions.darkMode ? "#4b5563" : "#e5e7eb"}`,
                    borderRadius: getBorderRadius(),
                  }}
                  variants={itemVariants}
                  whileHover={designOptions.animations ? { y: -5 } : undefined}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <div className="text-sm" style={{ color: designOptions.darkMode ? "#9ca3af" : "#6b7280" }}>
                        {formatDate(project.startDate)} - {project.endDate ? formatDate(project.endDate) : "Present"}
                      </div>
                    </div>
                    <p className="mb-4" style={{ color: designOptions.darkMode ? "#d1d5db" : "#4b5563" }}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 rounded-full"
                          style={{
                            backgroundColor: designOptions.primaryColor + "20",
                            color: designOptions.primaryColor,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium hover:underline"
                          style={{ color: designOptions.primaryColor }}
                        >
                          View Project
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium hover:underline"
                          style={{ color: designOptions.primaryColor }}
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )}

        {/* Experience Section */}
        {experience.length > 0 && (
          <motion.section
            className="mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={designOptions.animations ? "visible" : undefined}
          >
            <motion.h2
              className="text-3xl font-bold mb-6"
              style={{ color: designOptions.primaryColor }}
              variants={itemVariants}
            >
              Experience
            </motion.h2>
            <div className="space-y-8">
              {experience.map((exp) => (
                <motion.div
                  key={exp.id}
                  className="p-6 rounded-lg shadow-sm"
                  style={{
                    backgroundColor: designOptions.darkMode ? "#374151" : "#ffffff",
                    border: `1px solid ${designOptions.darkMode ? "#4b5563" : "#e5e7eb"}`,
                    borderRadius: getBorderRadius(),
                  }}
                  variants={itemVariants}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.position}</h3>
                      <p className="text-lg" style={{ color: designOptions.primaryColor }}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">
                        {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : "Present"}
                      </p>
                      <p style={{ color: designOptions.darkMode ? "#9ca3af" : "#6b7280" }}>
                        {exp.location}
                      </p>
                    </div>
                  </div>
                  <p style={{ color: designOptions.darkMode ? "#d1d5db" : "#4b5563" }}>
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Education Section */}
        {education.length > 0 && (
          <motion.section
            className="mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={designOptions.animations ? "visible" : undefined}
          >
            <motion.h2
              className="text-3xl font-bold mb-6"
              style={{ color: designOptions.primaryColor }}
              variants={itemVariants}
            >
              Education
            </motion.h2>
            <div className="space-y-8">
              {education.map((edu) => (
                <motion.div
                  key={edu.id}
                  className="p-6 rounded-lg shadow-sm"
                  style={{
                    backgroundColor: designOptions.darkMode ? "#374151" : "#ffffff",
                    border: `1px solid ${designOptions.darkMode ? "#4b5563" : "#e5e7eb"}`,
                    borderRadius: getBorderRadius(),
                  }}
                  variants={itemVariants}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{edu.degree}</h3>
                      <p className="text-lg" style={{ color: designOptions.primaryColor }}>
                        {edu.field}
                      </p>
                      <p className="text-lg">{edu.institution}</p>
                      {edu.gpa && <p className="font-medium">GPA: {edu.gpa}</p>}
                    </div>
                    <div className="text-right">
                      <p className="font-medium">
                        {formatDate(edu.startDate)} - {edu.endDate ? formatDate(edu.endDate) : "Present"}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </main>

      {/* Footer */}
      <footer
        className="py-8 px-4"
        style={{ backgroundColor: designOptions.darkMode ? "#111827" : "#f3f4f6" }}
      >
        <div className="container mx-auto text-center">
          <p style={{ color: designOptions.darkMode ? "#9ca3af" : "#6b7280" }}>
            © {new Date().getFullYear()} {userData.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ModernTemplate;