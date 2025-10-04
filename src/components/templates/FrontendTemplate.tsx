import { PortfolioState } from '../../types/portfolio';
import { formatDate } from '../../lib/utils';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink,
  Download,
  Palette,
  Code,
  Globe,
  Monitor,
  Smartphone,
  Zap} from 'lucide-react';

interface FrontendTemplateProps {
  data: PortfolioState;
}

export default function FrontendTemplate({ data }: FrontendTemplateProps) {
  const { userData, projects, experience, skills } = data;

  const getSkillIcon = (skillName: string) => {
    const name = skillName.toLowerCase();
    if (name.includes('react') || name.includes('vue') || name.includes('angular')) return <Code className="w-5 h-5" />;
    if (name.includes('html') || name.includes('css') || name.includes('javascript')) return <Globe className="w-5 h-5" />;
    if (name.includes('ui') || name.includes('ux') || name.includes('figma')) return <Palette className="w-5 h-5" />;
    if (name.includes('responsive') || name.includes('mobile')) return <Smartphone className="w-5 h-5" />;
    return <Monitor className="w-5 h-5" />;
  };

  const getSkillColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'expert': return 'from-blue-500 to-purple-500';
      case 'advanced': return 'from-green-500 to-blue-500';
      case 'intermediate': return 'from-yellow-500 to-green-500';
      case 'beginner': return 'from-orange-500 to-yellow-500';
      default: return 'from-gray-500 to-blue-500';
    }
  };

  const getSkillPercentage = (level: string) => {
    switch (level.toLowerCase()) {
      case 'expert': return 95;
      case 'advanced': return 85;
      case 'intermediate': return 70;
      case 'beginner': return 50;
      default: return 60;
    }
  };

  const frontendSkills = skills.filter((skill: any) => 
    skill.category === 'frontend' || 
    skill.name.toLowerCase().includes('react') ||
    skill.name.toLowerCase().includes('vue') ||
    skill.name.toLowerCase().includes('angular') ||
    skill.name.toLowerCase().includes('html') ||
    skill.name.toLowerCase().includes('css') ||
    skill.name.toLowerCase().includes('javascript')
  );

  const uiUxSkills = skills.filter((skill: any) => 
    skill.category === 'ui' || 
    skill.name.toLowerCase().includes('figma') ||
    skill.name.toLowerCase().includes('adobe') ||
    skill.name.toLowerCase().includes('sketch') ||
    skill.name.toLowerCase().includes('ui') ||
    skill.name.toLowerCase().includes('ux')
  );

  const toolsSkills = skills.filter((skill: any) => 
    skill.category === 'tools' || 
    skill.name.toLowerCase().includes('git') ||
    skill.name.toLowerCase().includes('webpack') ||
    skill.name.toLowerCase().includes('vite') ||
    skill.name.toLowerCase().includes('npm')
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-900">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              {userData.name.toUpperCase()}
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-100 mb-6">
              {userData.title}
            </h2>
            <p className="text-lg md:text-xl text-blue-50 max-w-3xl mx-auto mb-8 leading-relaxed">
              {userData.bio}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105">
                View My Work
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-semibold transition-all">
                <Download className="inline w-5 h-5 mr-2" />
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-2">🎨</div>
              <div className="text-2xl font-bold text-blue-600">50+</div>
              <div className="text-gray-600">UI Designs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">⚡</div>
              <div className="text-2xl font-bold text-blue-600">30+</div>
              <div className="text-gray-600">Web Apps</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">📱</div>
              <div className="text-2xl font-bold text-blue-600">100%</div>
              <div className="text-gray-600">Responsive</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🚀</div>
              <div className="text-2xl font-bold text-blue-600">95%</div>
              <div className="text-gray-600">Performance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Frontend Expertise
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
            Specialized in creating beautiful, responsive, and performant user interfaces
          </p>

          {/* Frontend Technologies */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-blue-600">Core Technologies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {frontendSkills.slice(0, 6).map((skill: any) => (
                <div key={skill.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {getSkillIcon(skill.name)}
                      <h4 className="text-xl font-semibold text-gray-900">{skill.name}</h4>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{getSkillPercentage(skill.level)}%</div>
                      <div className="text-sm text-gray-500">Proficiency</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${getSkillColor(skill.level)}`}
                      style={{ width: `${getSkillPercentage(skill.level)}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <div className="flex justify-between mb-2">
                      <span>Experience: 3+ Years</span>
                      <span>Projects: 20+ Apps</span>
                    </div>
                    <p className="text-xs text-gray-500">
                      {skill.name === 'React' && 'Modern UI development with hooks and context management.'}
                      {skill.name === 'Vue.js' && 'Progressive framework for building user interfaces.'}
                      {skill.name === 'Angular' && 'Platform for building mobile and desktop web applications.'}
                      {skill.name === 'JavaScript' && 'ES6+, async/await, modern JavaScript features.'}
                      {skill.name === 'HTML5' && 'Semantic markup and modern web standards.'}
                      {skill.name === 'CSS3' && 'Advanced styling with Flexbox, Grid, and animations.'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills by Category */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend Frameworks */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-blue-500 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">Frameworks</h3>
              </div>
              <div className="text-sm text-gray-600 mb-4">
                Modern JavaScript frameworks
                <br />
                <span className="text-blue-600 font-semibold">React Specialist</span>
              </div>
              <div className="text-xs text-gray-500 mb-2">
                {frontendSkills.length} Technologies • 90% Avg
              </div>
              <div className="space-y-2">
                {frontendSkills.slice(0, 4).map((skill: any) => (
                  <div key={skill.id} className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">{skill.name}</span>
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-1 mr-2">
                        <div 
                          className={`h-1 rounded-full bg-gradient-to-r ${getSkillColor(skill.level)}`}
                          style={{ width: `${getSkillPercentage(skill.level)}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500">{getSkillPercentage(skill.level)}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* UI/UX Design */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Palette className="w-6 h-6 text-purple-500 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">UI/UX Design</h3>
              </div>
              <div className="text-sm text-gray-600 mb-4">
                User interface design
                <br />
                <span className="text-purple-600 font-semibold">Design Expert</span>
              </div>
              <div className="text-xs text-gray-500 mb-2">
                {uiUxSkills.length} Tools • 85% Avg
              </div>
              <div className="space-y-2">
                {uiUxSkills.slice(0, 4).map((skill: any) => (
                  <div key={skill.id} className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">{skill.name}</span>
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-1 mr-2">
                        <div 
                          className={`h-1 rounded-full bg-gradient-to-r ${getSkillColor(skill.level)}`}
                          style={{ width: `${getSkillPercentage(skill.level)}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500">{getSkillPercentage(skill.level)}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Development Tools */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Zap className="w-6 h-6 text-green-500 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">Tools</h3>
              </div>
              <div className="text-sm text-gray-600 mb-4">
                Development workflow
                <br />
                <span className="text-green-600 font-semibold">Tool Master</span>
              </div>
              <div className="text-xs text-gray-500 mb-2">
                {toolsSkills.length} Tools • 88% Avg
              </div>
              <div className="space-y-2">
                {toolsSkills.slice(0, 4).map((skill: any) => (
                  <div key={skill.id} className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">{skill.name}</span>
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-1 mr-2">
                        <div 
                          className={`h-1 rounded-full bg-gradient-to-r ${getSkillColor(skill.level)}`}
                          style={{ width: `${getSkillPercentage(skill.level)}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500">{getSkillPercentage(skill.level)}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Professional Experience
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
            My journey in frontend development and UI/UX design
          </p>
          <div className="space-y-8">
            {experience.map((exp: any) => (
              <div key={exp.id} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all border border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full mr-3">
                        {exp.endDate ? 'Full-time' : 'Current'}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : 'Present'}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.position}</h3>
                    <h4 className="text-xl text-blue-600 mb-2">{exp.company}</h4>
                    <p className="text-gray-600">{exp.location}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                    ✓ Built 20+ responsive websites
                  </span>
                  <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                    ✓ Improved UX by 40%
                  </span>
                  <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">
                    ✓ Led design system implementation
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Featured Projects
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
            A showcase of my frontend development work and UI/UX designs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project: any) => (
              <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="text-center z-10">
                    <div className="text-4xl mb-2">💻</div>
                    <div className="text-white font-bold text-lg">Web App</div>
                    <div className="text-blue-100 text-sm">Frontend Development</div>
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">Live</span>
                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">{Math.floor(Math.random() * 20) + 10}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech: any, techIndex: number) => (
                      <span key={techIndex} className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {project.github && (
                      <a 
                        href={project.github} 
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                      >
                        <Github className="w-4 h-4 mr-1" />
                        View Code
                      </a>
                    )}
                    {project.link && (
                      <a 
                        href={project.link} 
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Let's Work Together
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
            Ready to create amazing user experiences? Let's discuss your next project
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-blue-600">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-500" />
                  <span className="text-gray-700">{userData.phone}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-500" />
                  <span className="text-gray-700">{userData.email}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-blue-500" />
                  <span className="text-gray-700">{userData.location}</span>
                </div>
                <div className="flex space-x-4 mt-8">
                  {userData.github && (
                    <a 
                      href={userData.github} 
                      className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-all"
                    >
                      <Github className="w-6 h-6 text-gray-700" />
                    </a>
                  )}
                  {userData.linkedin && (
                    <a 
                      href={userData.linkedin} 
                      className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-all"
                    >
                      <Linkedin className="w-6 h-6 text-gray-700" />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-8 text-blue-600">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message" 
                    rows={4}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 {userData.name} - Crafting beautiful user experiences with code
          </p>
        </div>
      </footer>
    </div>
  );
}
