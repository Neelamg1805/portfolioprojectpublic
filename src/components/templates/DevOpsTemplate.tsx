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
  Server,
  Cloud,
  Code,
  Shield,
  Zap,
  Layers,
  Settings
} from 'lucide-react';

interface DevOpsTemplateProps {
  data: PortfolioState;
}

export default function DevOpsTemplate({ data }: DevOpsTemplateProps) {
  const { userData, projects, experience, skills } = data;

  const getSkillIcon = (skillName: string) => {
    const name = skillName.toLowerCase();
    if (name.includes('docker') || name.includes('kubernetes')) return <Layers className="w-5 h-5" />;
    if (name.includes('aws') || name.includes('azure') || name.includes('gcp')) return <Cloud className="w-5 h-5" />;
    if (name.includes('jenkins') || name.includes('ci/cd') || name.includes('gitlab')) return <Zap className="w-5 h-5" />;
    if (name.includes('terraform') || name.includes('ansible')) return <Settings className="w-5 h-5" />;
    return <Server className="w-5 h-5" />;
  };

  const getSkillColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'expert': return 'from-orange-500 to-red-500';
      case 'advanced': return 'from-blue-500 to-purple-500';
      case 'intermediate': return 'from-green-500 to-blue-500';
      case 'beginner': return 'from-yellow-500 to-green-500';
      default: return 'from-gray-500 to-orange-500';
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

  const cloudSkills = skills.filter((skill: any) => 
    skill.category === 'cloud' || 
    skill.name.toLowerCase().includes('aws') ||
    skill.name.toLowerCase().includes('azure') ||
    skill.name.toLowerCase().includes('gcp') ||
    skill.name.toLowerCase().includes('docker')
  );

  const cicdSkills = skills.filter((skill: any) => 
    skill.category === 'cicd' || 
    skill.name.toLowerCase().includes('jenkins') ||
    skill.name.toLowerCase().includes('gitlab') ||
    skill.name.toLowerCase().includes('github') ||
    skill.name.toLowerCase().includes('ci/cd')
  );

  const infrastructureSkills = skills.filter((skill: any) => 
    skill.category === 'infrastructure' || 
    skill.name.toLowerCase().includes('terraform') ||
    skill.name.toLowerCase().includes('ansible') ||
    skill.name.toLowerCase().includes('kubernetes') ||
    skill.name.toLowerCase().includes('monitoring')
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900 text-white">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
              {userData.name.toUpperCase()}
            </h1>
            <h2 className="text-2xl md:text-3xl text-orange-300 mb-6">
              {userData.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              {userData.bio}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105">
                View My Work
              </button>
              <button className="border-2 border-orange-400 hover:bg-orange-400 hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all">
                <Download className="inline w-5 h-5 mr-2" />
                Download Resume
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
              <div className="text-4xl mb-2">🚀</div>
              <div className="text-2xl font-bold text-orange-300">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">⚡</div>
              <div className="text-2xl font-bold text-orange-300">50+</div>
              <div className="text-gray-400">Deployments/Day</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🔧</div>
              <div className="text-2xl font-bold text-orange-300">100+</div>
              <div className="text-gray-400">Infrastructure</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">📊</div>
              <div className="text-2xl font-bold text-orange-300">24/7</div>
              <div className="text-gray-400">Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
            DevOps Expertise
          </h2>
          <p className="text-center text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            Specialized in automation, infrastructure as code, and continuous integration/deployment
          </p>

          {/* DevOps Technologies */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-orange-300">Core Technologies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...cloudSkills, ...cicdSkills, ...infrastructureSkills].slice(0, 6).map((skill: any) => (
                <div key={skill.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-orange-400/50 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {getSkillIcon(skill.name)}
                      <h4 className="text-xl font-semibold text-white">{skill.name}</h4>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-orange-300">{getSkillPercentage(skill.level)}%</div>
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
                      <span>Experience: 3+ Years</span>
                      <span>Projects: 40+ Systems</span>
                    </div>
                    <p className="text-xs text-gray-400">
                      {skill.name === 'Docker' && 'Containerization platform for consistent deployments.'}
                      {skill.name === 'Kubernetes' && 'Container orchestration for scalable applications.'}
                      {skill.name === 'AWS' && 'Cloud computing platform with comprehensive services.'}
                      {skill.name === 'Jenkins' && 'Open-source automation server for CI/CD pipelines.'}
                      {skill.name === 'Terraform' && 'Infrastructure as code for cloud resource management.'}
                      {skill.name === 'Ansible' && 'Configuration management and automation tool.'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills by Category */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cloud Platforms */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <Cloud className="w-6 h-6 text-orange-400 mr-2" />
                <h3 className="text-xl font-bold text-white">Cloud Platforms</h3>
              </div>
              <div className="text-sm text-gray-300 mb-4">
                Cloud infrastructure & services
                <br />
                <span className="text-orange-300 font-semibold">AWS Expert</span>
              </div>
              <div className="text-xs text-gray-400 mb-2">
                {cloudSkills.length} Platforms • 90% Avg
              </div>
              <div className="space-y-2">
                {cloudSkills.slice(0, 4).map((skill: any) => (
                  <div key={skill.id} className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">{skill.name}</span>
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

            {/* CI/CD & Automation */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <Zap className="w-6 h-6 text-blue-400 mr-2" />
                <h3 className="text-xl font-bold text-white">CI/CD & Automation</h3>
              </div>
              <div className="text-sm text-gray-300 mb-4">
                Continuous integration & deployment
                <br />
                <span className="text-blue-300 font-semibold">Automation Pro</span>
              </div>
              <div className="text-xs text-gray-400 mb-2">
                {cicdSkills.length} Tools • 85% Avg
              </div>
              <div className="space-y-2">
                {cicdSkills.slice(0, 4).map((skill: any) => (
                  <div key={skill.id} className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">{skill.name}</span>
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

            {/* Infrastructure as Code */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <Settings className="w-6 h-6 text-green-400 mr-2" />
                <h3 className="text-xl font-bold text-white">Infrastructure</h3>
              </div>
              <div className="text-sm text-gray-300 mb-4">
                Infrastructure as code
                <br />
                <span className="text-green-300 font-semibold">IaC Specialist</span>
              </div>
              <div className="text-xs text-gray-400 mb-2">
                {infrastructureSkills.length} Tools • 80% Avg
              </div>
              <div className="space-y-2">
                {infrastructureSkills.slice(0, 4).map((skill: any) => (
                  <div key={skill.id} className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">{skill.name}</span>
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
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-center text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            My journey in DevOps engineering and infrastructure automation
          </p>
          <div className="space-y-8">
            {experience.map((exp: any) => (
              <div key={exp.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-orange-400/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="bg-orange-600 text-white text-xs px-3 py-1 rounded-full mr-3">
                        {exp.endDate ? 'Full-time' : 'Current'}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : 'Present'}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.position}</h3>
                    <h4 className="text-xl text-orange-300 mb-2">{exp.company}</h4>
                    <p className="text-gray-400">{exp.location}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-500/20 text-orange-300 text-xs px-3 py-1 rounded-full">
                    ✓ Automated 100+ deployments
                  </span>
                  <span className="bg-blue-500/20 text-blue-300 text-xs px-3 py-1 rounded-full">
                    ✓ Reduced deployment time by 80%
                  </span>
                  <span className="bg-green-500/20 text-green-300 text-xs px-3 py-1 rounded-full">
                    ✓ Achieved 99.9% uptime
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
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-center text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            A showcase of my DevOps engineering work and infrastructure solutions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project: any) => (
              <div key={project.id} className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-orange-400/50 transition-all group">
                <div className="h-48 bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="text-center z-10">
                    <div className="text-4xl mb-2">⚙️</div>
                    <div className="text-white font-bold text-lg">DevOps Solution</div>
                    <div className="text-orange-200 text-sm">Infrastructure & Automation</div>
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
                      <span key={techIndex} className="bg-orange-600/20 text-orange-300 text-xs px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {project.github && (
                      <a 
                        href={project.github} 
                        className="text-orange-400 hover:text-orange-300 text-sm font-medium flex items-center"
                      >
                        <Github className="w-4 h-4 mr-1" />
                        View Code
                      </a>
                    )}
                    {project.link && (
                      <a 
                        href={project.link} 
                        className="text-orange-400 hover:text-orange-300 text-sm font-medium flex items-center"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        View Docs
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
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
            Let's Automate Together
          </h2>
          <p className="text-center text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            Ready to streamline your infrastructure? Let's discuss your DevOps needs
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-orange-300">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-orange-400" />
                  <span className="text-gray-300">{userData.phone}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-orange-400" />
                  <span className="text-gray-300">{userData.email}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-orange-400" />
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
              <h3 className="text-2xl font-bold mb-8 text-orange-300">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message" 
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
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
            © 2025 {userData.name} - Automating infrastructure with precision and reliability
          </p>
        </div>
      </footer>
    </div>
  );
}
