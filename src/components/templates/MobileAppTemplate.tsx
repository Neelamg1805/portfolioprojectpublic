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
  Smartphone,
  Code,
  Database,
  Palette,
  Globe
} from 'lucide-react';

interface MobileAppTemplateProps {
  data: PortfolioState;
}

export default function MobileAppTemplate({ data }: MobileAppTemplateProps) {
  const { userData, projects, experience, skills } = data;

  const getSkillIcon = (skillName: string) => {
    const name = skillName.toLowerCase();
    if (name.includes('react native') || name.includes('react-native')) return <Smartphone className="w-5 h-5" />;
    if (name.includes('flutter')) return <Palette className="w-5 h-5" />;
    if (name.includes('android') || name.includes('kotlin')) return <Code className="w-5 h-5" />;
    if (name.includes('ios') || name.includes('swift')) return <Smartphone className="w-5 h-5" />;
    if (name.includes('firebase') || name.includes('database')) return <Database className="w-5 h-5" />;
    if (name.includes('javascript') || name.includes('typescript')) return <Code className="w-5 h-5" />;
    return <Code className="w-5 h-5" />;
  };

  const getSkillColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'expert': return 'from-red-500 to-pink-500';
      case 'advanced': return 'from-orange-500 to-red-500';
      case 'intermediate': return 'from-yellow-500 to-orange-500';
      case 'beginner': return 'from-green-500 to-yellow-500';
      default: return 'from-blue-500 to-purple-500';
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

  const mobileSkills = skills.filter((skill: any) => 
    skill.category === 'mobile' || 
    skill.name.toLowerCase().includes('react native') ||
    skill.name.toLowerCase().includes('flutter') ||
    skill.name.toLowerCase().includes('android') ||
    skill.name.toLowerCase().includes('ios')
  );

  const frontendSkills = skills.filter((skill: any) => 
    skill.category === 'frontend' || 
    skill.name.toLowerCase().includes('react') ||
    skill.name.toLowerCase().includes('javascript') ||
    skill.name.toLowerCase().includes('html') ||
    skill.name.toLowerCase().includes('css')
  );

  const backendSkills = skills.filter((skill: any) => 
    skill.category === 'backend' || 
    skill.name.toLowerCase().includes('node') ||
    skill.name.toLowerCase().includes('firebase') ||
    skill.name.toLowerCase().includes('database')
  );

  const toolSkills = skills.filter((skill: any) => 
    skill.category === 'tools' || 
    skill.name.toLowerCase().includes('git') ||
    skill.name.toLowerCase().includes('github') ||
    skill.name.toLowerCase().includes('figma')
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              {userData.name.toUpperCase()}
            </h1>
            <h2 className="text-2xl md:text-3xl text-purple-300 mb-6">
              {userData.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              {userData.bio}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105">
                Hire Me
              </button>
              <button className="border-2 border-purple-400 hover:bg-purple-400 hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all">
                <Download className="inline w-5 h-5 mr-2" />
                Download CV
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Stats */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-2">⭐</div>
              <div className="text-2xl font-bold text-purple-300">2+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🚀</div>
              <div className="text-2xl font-bold text-purple-300">15+</div>
              <div className="text-gray-400">Apps Published</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">⚡</div>
              <div className="text-2xl font-bold text-purple-300">10+</div>
              <div className="text-gray-400">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🎯</div>
              <div className="text-2xl font-bold text-purple-300">95%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-center text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            A comprehensive overview of my mobile development expertise and proficiency levels
          </p>

          {/* Mobile Development Technologies */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-purple-300">Mobile Development Technologies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mobileSkills.slice(0, 4).map((skill: any) => (
                <div key={skill.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {getSkillIcon(skill.name)}
                      <h4 className="text-xl font-semibold">{skill.name}</h4>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-300">{getSkillPercentage(skill.level)}%</div>
                      <div className="text-sm text-gray-400">Proficiency</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${getSkillColor(skill.level)}`}
                      style={{ width: `${getSkillPercentage(skill.level)}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-300">
                    <div className="flex justify-between mb-2">
                      <span>Experience: 2+ Years</span>
                      <span>Projects: 8+ Apps</span>
                    </div>
                    <p className="text-xs text-gray-400">
                      {skill.name === 'React Native' && 'Cross-platform mobile apps with native performance and hot reload capabilities.'}
                      {skill.name === 'Flutter' && 'Google\'s UI toolkit for building natively compiled applications with beautiful interfaces.'}
                      {skill.name === 'Android Studio' && 'Official IDE for Android development with powerful tools and full control.'}
                      {skill.name === 'iOS Development' && 'Native iOS app development using Swift with full access to Apple\'s ecosystem.'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills by Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Mobile */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <Smartphone className="w-6 h-6 text-purple-400 mr-2" />
                <h3 className="text-xl font-bold">Mobile</h3>
              </div>
              <div className="text-sm text-gray-300 mb-4">
                Cross-platform apps
                <br />
                <span className="text-purple-300 font-semibold">React Native Specialist</span>
              </div>
              <div className="text-xs text-gray-400 mb-2">
                {mobileSkills.length} Technologies • 85% Avg
              </div>
              <div className="space-y-2">
                {mobileSkills.slice(0, 3).map((skill: any) => (
                  <div key={skill.id} className="flex justify-between items-center">
                    <span className="text-sm">{skill.name}</span>
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-700 rounded-full h-1 mr-2">
                        <div 
                          className={`h-1 rounded-full bg-gradient-to-r ${getSkillColor(skill.level)}`}
                          style={{ width: `${getSkillPercentage(skill.level)}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-400">{getSkillPercentage(skill.level)}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-blue-400 mr-2" />
                <h3 className="text-xl font-bold">Frontend</h3>
              </div>
              <div className="text-sm text-gray-300 mb-4">
                Modern web interfaces
                <br />
                <span className="text-blue-300 font-semibold">React.js Expert</span>
              </div>
              <div className="text-xs text-gray-400 mb-2">
                {frontendSkills.length} Technologies • 85% Avg
              </div>
              <div className="space-y-2">
                {frontendSkills.slice(0, 3).map((skill: any) => (
                  <div key={skill.id} className="flex justify-between items-center">
                    <span className="text-sm">{skill.name}</span>
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-700 rounded-full h-1 mr-2">
                        <div 
                          className={`h-1 rounded-full bg-gradient-to-r ${getSkillColor(skill.level)}`}
                          style={{ width: `${getSkillPercentage(skill.level)}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-400">{getSkillPercentage(skill.level)}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <Database className="w-6 h-6 text-green-400 mr-2" />
                <h3 className="text-xl font-bold">Backend</h3>
              </div>
              <div className="text-sm text-gray-300 mb-4">
                Server & APIs
                <br />
                <span className="text-green-300 font-semibold">Full-Stack Pro</span>
              </div>
              <div className="text-xs text-gray-400 mb-2">
                {backendSkills.length} Technologies • 81% Avg
              </div>
              <div className="space-y-2">
                {backendSkills.slice(0, 3).map((skill: any) => (
                  <div key={skill.id} className="flex justify-between items-center">
                    <span className="text-sm">{skill.name}</span>
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-700 rounded-full h-1 mr-2">
                        <div 
                          className={`h-1 rounded-full bg-gradient-to-r ${getSkillColor(skill.level)}`}
                          style={{ width: `${getSkillPercentage(skill.level)}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-400">{getSkillPercentage(skill.level)}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-yellow-400 mr-2" />
                <h3 className="text-xl font-bold">Tools</h3>
              </div>
              <div className="text-sm text-gray-300 mb-4">
                Development workflow
                <br />
                <span className="text-yellow-300 font-semibold">Git Master</span>
              </div>
              <div className="text-xs text-gray-400 mb-2">
                {toolSkills.length} Technologies • 88% Avg
              </div>
              <div className="space-y-2">
                {toolSkills.slice(0, 3).map((skill: any) => (
                  <div key={skill.id} className="flex justify-between items-center">
                    <span className="text-sm">{skill.name}</span>
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-700 rounded-full h-1 mr-2">
                        <div 
                          className={`h-1 rounded-full bg-gradient-to-r ${getSkillColor(skill.level)}`}
                          style={{ width: `${getSkillPercentage(skill.level)}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-400">{getSkillPercentage(skill.level)}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-center text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            My professional journey and achievements in mobile app development
          </p>
          <div className="space-y-8">
            {experience.map((exp: any) => (
              <div key={exp.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-purple-400/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full mr-3">
                        {exp.endDate ? 'Full-time' : 'Current'}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : 'Present'}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.position}</h3>
                    <h4 className="text-xl text-purple-300 mb-2">{exp.company}</h4>
                    <p className="text-gray-400">{exp.location}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-500/20 text-green-300 text-xs px-3 py-1 rounded-full">
                    ✓ Built 5+ production apps
                  </span>
                  <span className="bg-blue-500/20 text-blue-300 text-xs px-3 py-1 rounded-full">
                    ✓ Improved performance by 40%
                  </span>
                  <span className="bg-purple-500/20 text-purple-300 text-xs px-3 py-1 rounded-full">
                    ✓ Led team of 3 developers
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-center text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            A showcase of my recent mobile app development work and contributions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project: any) => (
              <div key={project.id} className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all group">
                <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="text-center z-10">
                    <div className="text-4xl mb-2">📱</div>
                    <div className="text-white font-bold text-lg">{project.title}</div>
                    <div className="text-purple-200 text-sm">Mobile App</div>
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">Live</span>
                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">{Math.floor(Math.random() * 20) + 10}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech: any, techIndex: number) => (
                      <span key={techIndex} className="bg-purple-600/20 text-purple-300 text-xs px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {project.github && (
                      <a 
                        href={project.github} 
                        className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center"
                      >
                        <Github className="w-4 h-4 mr-1" />
                        View Code
                      </a>
                    )}
                    {project.link && (
                      <a 
                        href={project.link} 
                        className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center"
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
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-center text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            Let's collaborate and build amazing mobile applications together
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-purple-300">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-purple-400" />
                  <span className="text-gray-300">{userData.phone}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-purple-400" />
                  <span className="text-gray-300">{userData.email}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-purple-400" />
                  <span className="text-gray-300">{userData.location}</span>
                </div>
                <div className="flex space-x-4 mt-8">
                  {userData.github && (
                    <a 
                      href={userData.github} 
                      className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  )}
                  {userData.linkedin && (
                    <a 
                      href={userData.linkedin} 
                      className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-8 text-purple-300">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message" 
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 {userData.name} - Built with passion and code for mobile excellence
          </p>
        </div>
      </footer>
    </div>
  );
}
