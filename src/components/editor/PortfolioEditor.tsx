import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/index.ts";
import { useAuth } from "../../contexts/AuthContext";
import {
  updateUserData,
  updateSkills,
  setSelectedTemplate,
  addProject,
  removeProject,
  addExperience,
  removeExperience,
} from "../../store/portfolioSlice.ts";
import { Button } from "../ui/button.tsx";
import { Input } from "../ui/input.tsx";
import { Textarea } from "../ui/textarea.tsx";
import { Label } from "../ui/label.tsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select.tsx";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card.tsx";
import { Download, Eye } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import AIBioGenerator from "./AIBioGenerator.tsx";
import { downloadPortfolioSource } from "../../lib/download.ts";

export default function PortfolioEditor() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser } = useAuth();
  const portfolioState = useSelector((state: RootState) => state.portfolio);
  const { userData, skills, selectedTemplate, projects, experience } = portfolioState;


  const [newSkill, setNewSkill] = useState({
    name: "",
    level: "intermediate",
    category: "",
  });

  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    technologies: "",
    link: "",
    github: "",
  });

  const [newExperience, setNewExperience] = useState({
    position: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    location: "",
  });


  const handleAddSkill = () => {
    if (newSkill.name && newSkill.category) {
      const skill = {
        id: Math.random().toString(36).substr(2, 9),
        name: newSkill.name,
        level: newSkill.level as "beginner" | "intermediate" | "advanced" | "expert",
        category: newSkill.category,
      };
      dispatch(updateSkills([...skills, skill]));
      setNewSkill({
        name: "",
        level: "intermediate",
        category: "",
      });
    }
  };

  const handleAddProject = () => {
    if (newProject.title && newProject.description) {
      const project = {
        id: Math.random().toString(36).substr(2, 9),
        title: newProject.title,
        description: newProject.description,
        technologies: newProject.technologies.split(',').map(tech => tech.trim()).filter(tech => tech),
        link: newProject.link,
        github: newProject.github,
        image: "",
        startDate: new Date().toISOString().split('T')[0],
      };
      dispatch(addProject(project));
      setNewProject({
        title: "",
        description: "",
        technologies: "",
        link: "",
        github: "",
      });
    }
  };

  const handleAddExperience = () => {
    if (newExperience.position && newExperience.company) {
      const exp = {
        id: Math.random().toString(36).substr(2, 9),
        position: newExperience.position,
        company: newExperience.company,
        startDate: newExperience.startDate,
        endDate: newExperience.endDate || "",
        description: newExperience.description,
        location: newExperience.location,
      };
      dispatch(addExperience(exp));
      setNewExperience({
        position: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
        location: "",
      });
    }
  };

  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (!currentUser) {
      // Redirect to login if user is not authenticated
      navigate('/login', { state: { from: { pathname: location.pathname } } });
      return;
    }

    try {
      setIsDownloading(true);
      await downloadPortfolioSource(portfolioState);
      // Show success message
      alert('Portfolio downloaded successfully! Check your downloads folder.');
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  const handlePreview = () => {
    navigate("/preview");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <div className="grid w-full grid-cols-5 mb-6">
          <button className="col-span-1 py-2 px-4 text-center font-medium rounded-l-lg bg-blue-600 text-white">
            Personal
          </button>
          <button className="col-span-1 py-2 px-4 text-center font-medium bg-gray-100 hover:bg-gray-200">
            Projects
          </button>
          <button className="col-span-1 py-2 px-4 text-center font-medium bg-gray-100 hover:bg-gray-200">
            Experience
          </button>
          <button className="col-span-1 py-2 px-4 text-center font-medium bg-gray-100 hover:bg-gray-200">
            Education
          </button>
          <button className="col-span-1 py-2 px-4 text-center font-medium rounded-r-lg bg-gray-100 hover:bg-gray-200">
            Design
          </button>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>
                Add your personal details to your portfolio
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={userData.name}
                    onChange={(e) => dispatch(updateUserData({ ...userData, name: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="title">Professional Title</Label>
                  <Input
                    id="title"
                    value={userData.title}
                    onChange={(e) => dispatch(updateUserData({ ...userData, title: e.target.value }))}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  value={userData.bio}
                  onChange={(e) => dispatch(updateUserData({ ...userData, bio: e.target.value }))}
                  rows={4}
                />
                <AIBioGenerator />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={userData.email}
                    onChange={(e) => dispatch(updateUserData({ ...userData, email: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={userData.phone}
                    onChange={(e) => dispatch(updateUserData({ ...userData, phone: e.target.value }))}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={userData.location}
                    onChange={(e) => dispatch(updateUserData({ ...userData, location: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    value={userData.website || ""}
                    onChange={(e) => dispatch(updateUserData({ ...userData, website: e.target.value }))}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Template & Actions</CardTitle>
            <CardDescription>
              Change template or download your portfolio
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="template-select">Current Template</Label>
              <Select
                value={selectedTemplate}
                onValueChange={(value) => dispatch(setSelectedTemplate(value))}
              >
                <SelectTrigger id="template-select">
                  <SelectValue />
                </SelectTrigger>
                       <SelectContent>
                         <SelectItem value="simple">Simple & Clean</SelectItem>
                         <SelectItem value="minimal">Minimalist</SelectItem>
                         <SelectItem value="professional">Professional Dark</SelectItem>
                         <SelectItem value="frontend">Frontend Developer</SelectItem>
                         <SelectItem value="backend">Backend Developer</SelectItem>
                         <SelectItem value="devops">DevOps Engineer</SelectItem>
                         <SelectItem value="aiml">AI/ML Developer</SelectItem>
                         <SelectItem value="mobile">Mobile App Developer</SelectItem>
                         <SelectItem value="creative">Creative Portfolio</SelectItem>
                       </SelectContent>
              </Select>
            </div>
            
            <Button onClick={handlePreview} variant="outline" className="w-full">
              <Eye className="mr-2 h-4 w-4" />
              Live Preview
            </Button>
            <Button 
              onClick={handleDownload} 
              disabled={isDownloading}
              className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 disabled:opacity-50"
            >
              <Download className="mr-2 h-4 w-4" />
              {isDownloading ? 'Generating ZIP...' : 'Download Source Code (ZIP)'}
            </Button>
            <div className="text-xs text-gray-500 text-center">
              Download includes HTML, CSS, and deployment instructions
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
            <CardDescription>
              Add your skills
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <Label htmlFor="skill-name">Skill Name</Label>
                <Input
                  id="skill-name"
                  value={newSkill.name}
                  onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="skill-level">Proficiency Level</Label>
                <Select
                  value={newSkill.level}
                  onValueChange={(value) => setNewSkill({ ...newSkill, level: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                    <SelectItem value="expert">Expert</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="skill-category">Category</Label>
                <Input
                  id="skill-category"
                  value={newSkill.category}
                  onChange={(e) => setNewSkill({ ...newSkill, category: e.target.value })}
                />
              </div>
              <Button onClick={handleAddSkill}>Add Skill</Button>
            </div>

            <div>
              <h4 className="font-medium mb-2">Your Skills</h4>
              {skills.length === 0 ? (
                <p className="text-gray-500">No skills added yet</p>
              ) : (
                <div className="space-y-2">
                  {skills.map((skill) => (
                    <div key={skill.id} className="flex justify-between items-center border rounded-lg p-2">
                      <div>
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm ml-2">({skill.category})</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">{skill.level}</span>
                        <Button variant="outline" size="sm">Edit</Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Projects Section */}
        <Card>
          <CardHeader>
            <CardTitle>Projects</CardTitle>
            <CardDescription>
              Add your projects and work
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <Label htmlFor="project-title">Project Title</Label>
                <Input
                  id="project-title"
                  value={newProject.title}
                  onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                  placeholder="e.g., E-Commerce Platform"
                />
              </div>
              <div>
                <Label htmlFor="project-description">Description</Label>
                <Textarea
                  id="project-description"
                  value={newProject.description}
                  onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                  placeholder="Describe your project..."
                />
              </div>
              <div>
                <Label htmlFor="project-technologies">Technologies (comma-separated)</Label>
                <Input
                  id="project-technologies"
                  value={newProject.technologies}
                  onChange={(e) => setNewProject({ ...newProject, technologies: e.target.value })}
                  placeholder="e.g., React, Node.js, MongoDB"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="project-link">Live Link</Label>
                  <Input
                    id="project-link"
                    value={newProject.link}
                    onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
                    placeholder="https://..."
                  />
                </div>
                <div>
                  <Label htmlFor="project-github">GitHub Link</Label>
                  <Input
                    id="project-github"
                    value={newProject.github}
                    onChange={(e) => setNewProject({ ...newProject, github: e.target.value })}
                    placeholder="https://github.com/..."
                  />
                </div>
              </div>
              <Button onClick={handleAddProject} className="w-full">
                Add Project
              </Button>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium mb-2">Your Projects</h4>
              {projects.length === 0 ? (
                <p className="text-gray-500">No projects added yet</p>
              ) : (
                <div className="space-y-2">
                  {projects.map((project) => (
                    <div key={project.id} className="border rounded-lg p-3">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h5 className="font-medium">{project.title}</h5>
                          <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {project.technologies.map((tech, idx) => (
                              <span key={idx} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <Button variant="outline" size="sm" onClick={() => dispatch(removeProject(project.id))}>
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Experience Section */}
        <Card>
          <CardHeader>
            <CardTitle>Work Experience</CardTitle>
            <CardDescription>
              Add your professional experience
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="exp-position">Position</Label>
                  <Input
                    id="exp-position"
                    value={newExperience.position}
                    onChange={(e) => setNewExperience({ ...newExperience, position: e.target.value })}
                    placeholder="e.g., Senior Developer"
                  />
                </div>
                <div>
                  <Label htmlFor="exp-company">Company</Label>
                  <Input
                    id="exp-company"
                    value={newExperience.company}
                    onChange={(e) => setNewExperience({ ...newExperience, company: e.target.value })}
                    placeholder="e.g., Tech Corp"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="exp-start">Start Date</Label>
                  <Input
                    id="exp-start"
                    type="date"
                    value={newExperience.startDate}
                    onChange={(e) => setNewExperience({ ...newExperience, startDate: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="exp-end">End Date (leave empty if current)</Label>
                  <Input
                    id="exp-end"
                    type="date"
                    value={newExperience.endDate}
                    onChange={(e) => setNewExperience({ ...newExperience, endDate: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="exp-location">Location</Label>
                <Input
                  id="exp-location"
                  value={newExperience.location}
                  onChange={(e) => setNewExperience({ ...newExperience, location: e.target.value })}
                  placeholder="e.g., San Francisco, CA"
                />
              </div>
              <div>
                <Label htmlFor="exp-description">Description</Label>
                <Textarea
                  id="exp-description"
                  value={newExperience.description}
                  onChange={(e) => setNewExperience({ ...newExperience, description: e.target.value })}
                  placeholder="Describe your role and achievements..."
                />
              </div>
              <Button onClick={handleAddExperience} className="w-full">
                Add Experience
              </Button>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium mb-2">Your Experience</h4>
              {experience.length === 0 ? (
                <p className="text-gray-500">No experience added yet</p>
              ) : (
                <div className="space-y-2">
                  {experience.map((exp) => (
                    <div key={exp.id} className="border rounded-lg p-3">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h5 className="font-medium">{exp.position}</h5>
                          <p className="text-sm text-gray-600">{exp.company}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            {exp.startDate} - {exp.endDate || "Present"} • {exp.location}
                          </p>
                          <p className="text-sm mt-2">{exp.description}</p>
                        </div>
                        <Button variant="outline" size="sm" onClick={() => dispatch(removeExperience(exp.id))}>
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}