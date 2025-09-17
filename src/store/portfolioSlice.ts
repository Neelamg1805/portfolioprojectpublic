import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PortfolioState, UserData, ProjectData, ExperienceData, EducationData, SkillData, DesignOptions } from "../types/portfolio.ts";

const initialState: PortfolioState = {
  selectedTemplate: "mobile",
  userData: {
    name: "Alex Chen",
    title: "Mobile App Developer",
    bio: "Passionate mobile app developer specializing in React Native and Flutter. I create cross-platform mobile applications that deliver native performance and exceptional user experiences. Eager to take on new challenges and use creative thinking to build fast, responsive, and user-friendly mobile solutions.",
    email: "alex.chen@example.com",
    phone: "+1 (555) 987-6543",
    location: "San Francisco, CA",
    website: "https://alexchen.dev",
    github: "https://github.com/alexchen",
    linkedin: "https://linkedin.com/in/alexchen",
  },
  projects: [
    {
      id: "1",
      title: "E-Commerce Mobile App",
      description: "Built a cross-platform e-commerce mobile app using React Native with Firebase backend. Features include user authentication, payment processing, push notifications, and offline support.",
      technologies: ["React Native", "Firebase", "Redux", "Stripe"],
      link: "https://play.google.com/store/apps/details?id=com.ecommerce.app",
      github: "https://github.com/alexchen/ecommerce-mobile",
      image: "",
      startDate: "2023-01-01",
    },
    {
      id: "2",
      title: "Task Management Mobile App",
      description: "Developed a cross-platform mobile application using React Native for task management with offline capabilities, cloud synchronization, and team collaboration features.",
      technologies: ["React Native", "Redux Toolkit", "Firebase", "AsyncStorage"],
      link: "https://apps.apple.com/app/taskmanager/id123456789",
      github: "https://github.com/alexchen/taskmanager-mobile",
      image: "",
      startDate: "2022-06-01",
    },
    {
      id: "3",
      title: "Fitness Tracking App",
      description: "Created a Flutter-based fitness tracking app with real-time workout monitoring, progress tracking, and social features. Available on both iOS and Android.",
      technologies: ["Flutter", "Dart", "Firebase", "HealthKit", "Google Fit"],
      link: "https://play.google.com/store/apps/details?id=com.fitness.tracker",
      github: "https://github.com/alexchen/fitness-tracker",
      image: "",
      startDate: "2023-03-01",
    },
  ],
  experience: [
    {
      id: "1",
      position: "Senior Mobile App Developer",
      company: "MobileTech Solutions",
      startDate: "2022-01-01",
      endDate: "",
      description: "Lead development of multiple cross-platform mobile applications using React Native and Flutter. Mentor junior developers and implement best practices for mobile app performance and user experience.",
      location: "San Francisco, CA",
    },
    {
      id: "2",
      position: "Mobile App Developer",
      company: "AppStart Inc",
      startDate: "2020-06-01",
      endDate: "2021-12-31",
      description: "Developed and maintained mobile applications using React Native and native iOS/Android development. Collaborated with design team to implement responsive mobile interfaces and optimized app performance.",
      location: "Remote",
    },
  ],
  education: [
    {
      id: "1",
      degree: "Bachelor of Science",
      institution: "University of California",
      field: "Computer Science",
      startDate: "2016-09-01",
      endDate: "2020-05-31",
      gpa: "3.8",
    },
  ],
  skills: [
    {
      id: "1",
      name: "React Native",
      level: "expert",
      category: "mobile",
    },
    {
      id: "2",
      name: "Flutter",
      level: "advanced",
      category: "mobile",
    },
    {
      id: "3",
      name: "Android Studio",
      level: "advanced",
      category: "mobile",
    },
    {
      id: "4",
      name: "iOS Development",
      level: "intermediate",
      category: "mobile",
    },
    {
      id: "5",
      name: "JavaScript",
      level: "expert",
      category: "frontend",
    },
    {
      id: "6",
      name: "React.js",
      level: "expert",
      category: "frontend",
    },
    {
      id: "7",
      name: "Next.js",
      level: "advanced",
      category: "frontend",
    },
    {
      id: "8",
      name: "Node.js",
      level: "advanced",
      category: "backend",
    },
    {
      id: "9",
      name: "Firebase",
      level: "expert",
      category: "backend",
    },
    {
      id: "10",
      name: "MongoDB",
      level: "advanced",
      category: "database",
    },
    {
      id: "11",
      name: "Git",
      level: "expert",
      category: "tools",
    },
    {
      id: "12",
      name: "GitHub",
      level: "expert",
      category: "tools",
    },
  ],
  designOptions: {
    primaryColor: "#3b82f6",
    secondaryColor: "#8b5cf6",
    fontFamily: "Inter, sans-serif",
    layout: "single-column",
    animations: true,
    darkMode: false,
    borderRadius: "medium",
  },
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    setSelectedTemplate: (state, action: PayloadAction<string>) => {
      state.selectedTemplate = action.payload;
    },
    updateUserData: (state, action: PayloadAction<Partial<UserData>>) => {
      state.userData = { ...state.userData, ...action.payload };
    },
    updateProjects: (state, action: PayloadAction<ProjectData[]>) => {
      state.projects = action.payload;
    },
    addProject: (state, action: PayloadAction<ProjectData>) => {
      state.projects.push(action.payload);
    },
    updateProject: (state, action: PayloadAction<{ id: string; project: Partial<ProjectData> }>) => {
      const index = state.projects.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.projects[index] = { ...state.projects[index], ...action.payload.project };
      }
    },
    removeProject: (state, action: PayloadAction<string>) => {
      state.projects = state.projects.filter(p => p.id !== action.payload);
    },
    updateExperience: (state, action: PayloadAction<ExperienceData[]>) => {
      state.experience = action.payload;
    },
    addExperience: (state, action: PayloadAction<ExperienceData>) => {
      state.experience.push(action.payload);
    },
    removeExperience: (state, action: PayloadAction<string>) => {
      state.experience = state.experience.filter(e => e.id !== action.payload);
    },
    updateEducation: (state, action: PayloadAction<EducationData[]>) => {
      state.education = action.payload;
    },
    updateSkills: (state, action: PayloadAction<SkillData[]>) => {
      state.skills = action.payload;
    },
    updateDesignOptions: (state, action: PayloadAction<Partial<DesignOptions>>) => {
      state.designOptions = { ...state.designOptions, ...action.payload };
    },
    resetPortfolio: () => initialState,
  },
});

export const {
  setSelectedTemplate,
  updateUserData,
  updateProjects,
  addProject,
  updateProject,
  removeProject,
  updateExperience,
  addExperience,
  removeExperience,
  updateEducation,
  updateSkills,
  updateDesignOptions,
  resetPortfolio,
} = portfolioSlice.actions;

export default portfolioSlice.reducer;
