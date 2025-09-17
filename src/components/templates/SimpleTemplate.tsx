import React from "react";
import { formatDate } from "../../lib/utils";
import { PortfolioState } from "../../types/portfolio";

interface SimpleTemplateProps {
  data: PortfolioState;
}

const SimpleTemplate: React.FC<SimpleTemplateProps> = ({ data }) => {
  const { userData, projects, experience, skills, designOptions } = data;

  return (
    <div
      className="min-h-screen bg-white text-gray-800"
      style={{
        fontFamily: designOptions.fontFamily,
      }}
    >
      {/* Header */}
      <header className="bg-gray-50 py-16 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{userData.name}</h1>
          <h2 className="text-2xl text-gray-600 mb-8">{userData.title}</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            {userData.bio}
          </p>
          <div className="flex justify-center space-x-6 mt-8">
            {userData.email && (
              <a href={`mailto:${userData.email}`} className="text-blue-600 hover:text-blue-800">
                Email
              </a>
            )}
            {userData.phone && (
              <a href={`tel:${userData.phone}`} className="text-blue-600 hover:text-blue-800">
                Phone
              </a>
            )}
            {userData.website && (
              <a href={userData.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                Website
              </a>
            )}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Skills Section */}
        {skills.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill) => (
                <div key={skill.id} className="bg-gray-50 p-6 rounded-lg text-center">
                  <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                  <p className="text-gray-600 mb-3">{skill.category}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ 
                        width: `${skill.level === 'beginner' ? 25 : skill.level === 'intermediate' ? 50 : skill.level === 'advanced' ? 75 : 90}%` 
                      }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2 capitalize">{skill.level}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Experience Section */}
        {experience.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
            <div className="space-y-8">
              {experience.map((exp) => (
                <div key={exp.id} className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900">{exp.position}</h3>
                  <p className="text-xl text-blue-600 font-semibold">{exp.company}</p>
                  <p className="text-gray-600 mb-2">
                    {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : "Present"}
                  </p>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects Section */}
        {projects.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
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
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        View Project
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-medium"
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

        {/* Contact Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <p className="text-lg text-gray-700 mb-6">
              Ready to work together? Let's get in touch!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {userData.email && (
                <a
                  href={`mailto:${userData.email}`}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Email
                </a>
              )}
              {userData.phone && (
                <a
                  href={`tel:${userData.phone}`}
                  className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Call Now
                </a>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <p className="text-gray-600">
            © {new Date().getFullYear()} {userData.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SimpleTemplate;
