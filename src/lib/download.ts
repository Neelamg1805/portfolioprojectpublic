import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { PortfolioState } from '../types/portfolio';

export const generatePortfolioHTML = (data: PortfolioState): string => {
  const { userData, projects, experience, skills, selectedTemplate } = data;
  
  const getSkillLevel = (level: string) => {
    const levels: Record<string, number> = {
      'beginner': 25,
      'intermediate': 50,
      'advanced': 75,
      'expert': 90,
    };
    return levels[level] || 50;
  };

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long' 
      });
    } catch {
      return dateString;
    }
  };

  const getTemplateHTML = () => {
    switch (selectedTemplate) {
      case 'simple':
        return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${userData.name} - Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { font-family: 'Inter', sans-serif; }
    </style>
</head>
<body class="bg-white text-gray-800">
    <!-- Header -->
    <header class="bg-gray-50 py-16 px-6">
        <div class="container mx-auto text-center max-w-4xl">
            <h1 class="text-5xl font-bold text-gray-900 mb-4">${userData.name}</h1>
            <h2 class="text-2xl text-gray-600 mb-8">${userData.title}</h2>
            <p class="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                ${userData.bio}
            </p>
            <div class="flex justify-center space-x-6 mt-8">
                ${userData.email ? `<a href="mailto:${userData.email}" class="text-blue-600 hover:text-blue-800">Email</a>` : ''}
                ${userData.phone ? `<a href="tel:${userData.phone}" class="text-blue-600 hover:text-blue-800">Phone</a>` : ''}
                ${userData.website ? `<a href="${userData.website}" target="_blank" class="text-blue-600 hover:text-blue-800">Website</a>` : ''}
            </div>
        </div>
    </header>

    <main class="container mx-auto px-6 py-16 max-w-4xl">
        ${skills.length > 0 ? `
        <!-- Skills Section -->
        <section class="mb-16">
            <h2 class="text-3xl font-bold mb-8 text-center">Skills</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${skills.map(skill => `
                <div class="bg-gray-50 p-6 rounded-lg text-center">
                    <h3 class="text-xl font-semibold mb-2">${skill.name}</h3>
                    <p class="text-gray-600 mb-3">${skill.category}</p>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                        <div class="bg-blue-500 h-2 rounded-full" style="width: ${getSkillLevel(skill.level)}%"></div>
                    </div>
                    <p class="text-sm text-gray-500 mt-2 capitalize">${skill.level}</p>
                </div>
                `).join('')}
            </div>
        </section>
        ` : ''}

        ${experience.length > 0 ? `
        <!-- Experience Section -->
        <section class="mb-16">
            <h2 class="text-3xl font-bold mb-8 text-center">Experience</h2>
            <div class="space-y-8">
                ${experience.map(exp => `
                <div class="border-l-4 border-blue-500 pl-6">
                    <h3 class="text-2xl font-bold text-gray-900">${exp.position}</h3>
                    <p class="text-xl text-blue-600 font-semibold">${exp.company}</p>
                    <p class="text-gray-600 mb-2">
                        ${formatDate(exp.startDate)} - ${exp.endDate ? formatDate(exp.endDate) : "Present"}
                    </p>
                    <p class="text-gray-700">${exp.description}</p>
                </div>
                `).join('')}
            </div>
        </section>
        ` : ''}

        ${projects.length > 0 ? `
        <!-- Projects Section -->
        <section class="mb-16">
            <h2 class="text-3xl font-bold mb-8 text-center">Projects</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                ${projects.map(project => `
                <div class="bg-gray-50 p-6 rounded-lg">
                    <h3 class="text-2xl font-bold mb-3">${project.title}</h3>
                    <p class="text-gray-700 mb-4">${project.description}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${project.technologies.map(tech => `
                        <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">${tech}</span>
                        `).join('')}
                    </div>
                    <div class="flex space-x-4">
                        ${project.link ? `<a href="${project.link}" target="_blank" class="text-blue-600 hover:text-blue-800 font-medium">View Project</a>` : ''}
                        ${project.github ? `<a href="${project.github}" target="_blank" class="text-blue-600 hover:text-blue-800 font-medium">GitHub</a>` : ''}
                    </div>
                </div>
                `).join('')}
            </div>
        </section>
        ` : ''}

        <!-- Contact Section -->
        <section class="mb-16">
            <h2 class="text-3xl font-bold mb-8 text-center">Contact</h2>
            <div class="bg-gray-50 p-8 rounded-lg text-center">
                <p class="text-lg text-gray-700 mb-6">
                    Ready to work together? Let's get in touch!
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    ${userData.email ? `<a href="mailto:${userData.email}" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">Send Email</a>` : ''}
                    ${userData.phone ? `<a href="tel:${userData.phone}" class="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">Call Now</a>` : ''}
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-100 py-8 px-6">
        <div class="container mx-auto text-center max-w-4xl">
            <p class="text-gray-600">
                © ${new Date().getFullYear()} ${userData.name}. All rights reserved.
            </p>
        </div>
    </footer>
</body>
</html>`;
      
      case 'professional':
        return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${userData.name} - Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { font-family: 'Inter', sans-serif; }
        .gradient-text { background: linear-gradient(135deg, #8b5cf6, #ec4899, #3b82f6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    </style>
</head>
<body class="min-h-screen bg-gray-900 text-white">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div class="container mx-auto px-6 py-4">
            <div class="flex justify-between items-center">
                <h1 class="text-2xl font-bold gradient-text">${userData.name.toUpperCase()}</h1>
                <div class="hidden md:flex space-x-8">
                    <a href="#home" class="text-gray-300 hover:text-white transition-colors duration-300">Home</a>
                    <a href="#about" class="text-gray-300 hover:text-white transition-colors duration-300">About</a>
                    <a href="#skills" class="text-gray-300 hover:text-white transition-colors duration-300">Skills</a>
                    <a href="#work" class="text-gray-300 hover:text-white transition-colors duration-300">Work</a>
                    <a href="#projects" class="text-gray-300 hover:text-white transition-colors duration-300">Projects</a>
                    <a href="#contact" class="text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="pt-24 pb-16 px-6">
        <div class="container mx-auto text-center">
            <h1 class="text-6xl md:text-8xl font-bold mb-6">
                <span class="gradient-text">${userData.name.split(' ')[0]}</span>
            </h1>
            <h2 class="text-2xl md:text-3xl text-gray-300 mb-8">${userData.title}</h2>
            <p class="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                ${userData.bio}
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button class="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                    Hire Me
                </button>
                <button class="px-8 py-4 border border-purple-400 rounded-full text-purple-400 font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                    Download CV
                </button>
            </div>
        </div>
    </section>

    ${skills.length > 0 ? `
    <!-- Skills Section -->
    <section id="skills" class="py-20 px-6 bg-gray-800">
        <div class="container mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold mb-4 text-purple-400">Skills & Technologies</h2>
                <p class="text-xl text-gray-400">A comprehensive overview of my technical expertise</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                ${skills.map(skill => `
                <div class="bg-gray-700 rounded-2xl p-6">
                    <div class="flex items-center mb-4">
                        <span class="text-2xl mr-3">🎨</span>
                        <h3 class="text-xl font-bold">${skill.name}</h3>
                    </div>
                    <p class="text-gray-400 text-sm mb-4">${skill.category}</p>
                    <div class="w-full bg-gray-600 rounded-full h-2 mb-2">
                        <div class="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" style="width: ${getSkillLevel(skill.level)}%"></div>
                    </div>
                    <p class="text-purple-400 text-sm">${getSkillLevel(skill.level)}%</p>
                </div>
                `).join('')}
            </div>
        </div>
    </section>
    ` : ''}

    ${projects.length > 0 ? `
    <!-- Projects Section -->
    <section id="projects" class="py-20 px-6 bg-gray-800">
        <div class="container mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold mb-4 text-purple-400">Featured Projects</h2>
                <p class="text-xl text-gray-400">A showcase of my recent work and contributions</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${projects.map(project => `
                <div class="bg-gray-700 rounded-2xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
                    <div class="p-6">
                        <div class="flex items-center justify-between mb-4">
                            <div class="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                                <span class="text-white font-bold">&lt;/&gt;</span>
                            </div>
                            <span class="bg-green-600 text-white px-2 py-1 rounded text-sm">Live</span>
                        </div>
                        <h3 class="text-xl font-bold mb-3">${project.title}</h3>
                        <p class="text-gray-400 mb-4">${project.description}</p>
                        <div class="flex flex-wrap gap-2 mb-6">
                            ${project.technologies.map(tech => `
                            <span class="bg-gray-600 text-gray-300 px-3 py-1 rounded-full text-sm">${tech}</span>
                            `).join('')}
                        </div>
                        <div class="flex space-x-4">
                            <button class="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                                <span class="mr-2">&lt;/&gt;</span>
                                View Code
                            </button>
                            <button class="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                                <span class="mr-2">🔗</span>
                                Live Demo
                            </button>
                        </div>
                    </div>
                </div>
                `).join('')}
            </div>
        </div>
    </section>
    ` : ''}

    <!-- Contact Section -->
    <section id="contact" class="py-20 px-6">
        <div class="container mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold mb-4 text-purple-400">Get In Touch</h2>
                <p class="text-xl text-gray-400">Let's collaborate and build something amazing together</p>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div class="bg-gray-800 rounded-2xl p-8">
                    <h3 class="text-2xl font-bold mb-6">Contact Information</h3>
                    <div class="space-y-4">
                        ${userData.email ? `<div class="flex items-center text-gray-300"><span class="mr-4">📞</span>${userData.email}</div>` : ''}
                        ${userData.phone ? `<div class="flex items-center text-gray-300"><span class="mr-4">✉️</span>${userData.phone}</div>` : ''}
                        ${userData.location ? `<div class="flex items-center text-gray-300"><span class="mr-4">📍</span>${userData.location}</div>` : ''}
                    </div>
                </div>
                <div class="bg-gray-800 rounded-2xl p-8">
                    <h3 class="text-2xl font-bold mb-6">Send a Message</h3>
                    <form class="space-y-6">
                        <input type="text" placeholder="Your Name" class="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500" />
                        <input type="email" placeholder="Your Email" class="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500" />
                        <textarea placeholder="Your Message" rows="4" class="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"></textarea>
                        <button type="submit" class="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 py-8 px-6 border-t border-gray-800">
        <div class="container mx-auto text-center">
            <p class="text-gray-400">© ${new Date().getFullYear()} ${userData.name} - Built with passion and code</p>
        </div>
    </footer>
</body>
</html>`;
      
      default:
        return generatePortfolioHTML({ ...data, selectedTemplate: 'simple' });
    }
  };

  return getTemplateHTML();
};

export const downloadPortfolioSource = async (data: PortfolioState) => {
  const zip = new JSZip();
  
  // Generate HTML file
  const htmlContent = generatePortfolioHTML(data);
  zip.file("index.html", htmlContent);
  
  // Generate README
  const readmeContent = `# ${data.userData.name} - Portfolio

This is a generated portfolio website using the Portfolio Builder.

## Template: ${data.selectedTemplate}

## Features
- Responsive design
- Modern UI/UX
- Mobile-friendly
- Clean code structure

## Setup
1. Open index.html in your web browser
2. Or deploy to any static hosting service

## Customization
You can customize this portfolio by editing the HTML file directly.

Generated on: ${new Date().toLocaleDateString()}
`;
  
  zip.file("README.md", readmeContent);
  
  // Generate package.json for easy deployment
  const packageJson = {
    name: `${data.userData.name.toLowerCase().replace(/\s+/g, '-')}-portfolio`,
    version: "1.0.0",
    description: `Portfolio website for ${data.userData.name}`,
    main: "index.html",
    scripts: {
      "start": "npx serve .",
      "build": "echo 'No build step required'"
    },
    keywords: ["portfolio", "website", "personal"],
    author: data.userData.name,
    license: "MIT"
  };
  
  zip.file("package.json", JSON.stringify(packageJson, null, 2));
  
  // Generate deployment instructions
  const deployInstructions = `# Deployment Instructions

## Option 1: GitHub Pages
1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select source as "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Your site will be available at: https://yourusername.github.io/repository-name

## Option 2: Netlify
1. Go to https://netlify.com
2. Drag and drop the folder containing these files
3. Your site will be deployed instantly

## Option 3: Vercel
1. Go to https://vercel.com
2. Import your GitHub repository
3. Deploy with zero configuration

## Option 4: Local Development
1. Install a local server: npm install -g serve
2. Run: serve .
3. Open http://localhost:3000
`;
  
  zip.file("DEPLOYMENT.md", deployInstructions);
  
  // Generate the zip file
  const content = await zip.generateAsync({ type: "blob" });
  
  // Download the file
  saveAs(content, `${data.userData.name.replace(/\s+/g, '-')}-portfolio-source.zip`);
};
