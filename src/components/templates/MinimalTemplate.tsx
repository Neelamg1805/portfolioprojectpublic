import React from "react";
import { PortfolioState } from "../../types/portfolio.ts";

interface MinimalTemplateProps {
  data: PortfolioState;
}

const MinimalTemplate: React.FC<MinimalTemplateProps> = ({ data }) => {
  const { userData, projects, experience, education, skills, designOptions } = data;

  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: designOptions.fontFamily,
        backgroundColor: "#ffffff",
        color: "#000000",
      }}
    >
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">{userData.name}</h1>
          <h2 className="text-xl text-gray-600 mb-8">{userData.title}</h2>
          <div className="flex justify-center space-x-6">
            {userData.email && (
              <a href={`mailto:${userData.email}`} className="text-gray-600 hover:text-black">
                Email
              </a>
            )}
            {userData.phone && (
              <a href={`tel:${userData.phone}`} className="text-gray-600 hover:text-black">
                Phone
              </a>
            )}
            {userData.website && (
              <a href={userData.website} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
                Website
              </a>
            )}
          </div>
        </header>

        {/* About Section */}
        {userData.bio && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b">About</h2>
            <p className="text-gray-700 leading-relaxed">{userData.bio}</p>
          </section>
        )}

        {/* Skills Section */}
        {skills.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div key={skill.id} className="p-4 border rounded">
                  <h3 className="font-bold">{skill.name}</h3>
                  <p className="text-sm text-gray-600">{skill.category}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects Section */}
        {projects.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Projects</h2>
            <div className="space-y-8">
              {projects.map((project) => (
                <div key={project.id} className="border-b pb-8">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="text-sm text-gray-500">
                      {project.startDate} - {project.endDate || "Present"}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">
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
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Experience Section */}
        {experience.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Experience</h2>
            <div className="space-y-8">
              {experience.map((exp) => (
                <div key={exp.id} className="border-b pb-8">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold">{exp.position}</h3>
                      <p className="text-lg">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">
                        {exp.startDate} - {exp.endDate || "Present"}
                      </p>
                      <p className="text-gray-600">{exp.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education Section */}
        {education.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Education</h2>
            <div className="space-y-8">
              {education.map((edu) => (
                <div key={edu.id} className="border-b pb-8">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold">{edu.degree}</h3>
                      <p className="text-lg">{edu.field}</p>
                      <p>{edu.institution}</p>
                      {edu.gpa && <p className="font-medium">GPA: {edu.gpa}</p>}
                    </div>
                    <div className="text-right">
                      <p className="font-medium">
                        {edu.startDate} - {edu.endDate || "Present"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center max-w-4xl">
          <p className="text-gray-600">
            © {new Date().getFullYear()} {userData.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MinimalTemplate;