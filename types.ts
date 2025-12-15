export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

export enum MarketingType {
  BLOG_IDEAS = "Blog Ideas",
  PROJECT_DESC = "Project Description",
  SOCIAL_POST = "Social Media Post"
}

export interface AiResponse {
  content: string;
  error?: string;
}