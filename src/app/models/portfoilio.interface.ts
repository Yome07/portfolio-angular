// Interface principale pour le profil
export interface Profile {
  name: string;
  title: string;
  bio: string;
  cv: string;
}

// Interface pour les informations de contact
export interface Contact {
  email: string;
  phone: string;
}

// Interface pour les liens sociaux
export interface SocialLink {
  name: string;
  url: string;
  icon: string; // Nom de l'icône, par exemple 'github', 'linkedin', etc.
}

// Interface pour les compétences globales
export interface Skill {
  technic: string[];
  tool: string[];
  project_management: string[];
  soft_skill: string[];
}

// Interface pour les langues
export interface Language {
  name: string;
  level: string;
}

// Interface pour une expérience professionnelle
export interface Experience {
  role: string;
  company: string;
  location: string;
  start: string;
  end?: string;
  tasks: string[];
  skills?: string[]; // Liste de tags pour les compétences utilisées
}

// Interface pour une formation
export interface Education {
  year: number;
  title: string;
  institution: string;
  details: string[];
}

// Interface pour un projet
export interface Project {
  title: string;
  subtitle?: string;
  year: string | number;
  description: string;
  link: string;
  technologies: string[]; // Liste de tags pour le projet
  imagePath?: string; // URL de l'image du projet
}

// Interface pour les mentions légales
export interface TermsOfUse {
  title: string;
  content: string;
  hosting_title: string;
  hosting_content: string;
  editor_title: string;
  editor_content: string;
}

// Interface principale pour l'ensemble du CV
export interface CV {
  profile: Profile;
  contact: Contact;
  social: SocialLink[];
  skills: Skill;
  langues: Language[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  terms_of_use: TermsOfUse;
}

// Types utilitaires pour une meilleure typage
export type ExperienceRole = string;
export type CompanyName = string;
export type Location = string;
export type DateString = string;
export type LanguageLevel =
  | 'natif'
  | 'C2'
  | 'C1'
  | 'B2'
  | 'B1'
  | 'A2'
  | 'A1'
  | 'notions';
export type SkillLevel = 'débutant' | 'intermédiaire' | 'avancé' | 'expert';

// Interface optionnelle pour des métadonnées supplémentaires
export interface CVMetadata {
  lastUpdated: Date;
  version: string;
  language: string;
}
