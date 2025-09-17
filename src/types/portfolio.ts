export interface UserData {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  website?: string;
  github?: string;
  linkedin?: string;
}

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
  startDate: string;
  endDate?: string;
}

export interface ExperienceData {
  id: string;
  company: string;
  position: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
}

export interface EducationData {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  gpa?: string;
}

export interface SkillData {
  id: string;
  name: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
  category: string;
}

export interface DesignOptions {
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  layout: "single-column" | "two-column" | "grid";
  animations: boolean;
  darkMode: boolean;
  borderRadius: "none" | "small" | "medium" | "large";
}

export interface PortfolioState {
  selectedTemplate: string;
  userData: UserData;
  projects: ProjectData[];
  experience: ExperienceData[];
  education: EducationData[];
  skills: SkillData[];
  designOptions: DesignOptions;
}

export interface Template {
  id: string;
  name: string;
  description: string;
  difficulty: "simple" | "intermediate" | "advanced";
  preview: string;
}
