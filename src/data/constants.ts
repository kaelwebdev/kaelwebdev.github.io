/**
 * Constantes globales del portafolio
 */

// Información personal
export const PERSONAL_NAME = "Carlos Daniel Cortez";
export const PERSONAL_ALIAS = "kael";
export const PERSONAL_TITLE = "Ingeniero Multimedia & Desarrollador de Software";
export const PERSONAL_IMAGE_ALT = "Carlos Daniel Cortez (kael)";
export const PERSONAL_IMAGE_URL = "/yo.webp";
export const PERSONAL_IMAGE_SIZE = 16; // Tailwind size-16

// Ubicación
export const LOCATION = "Cali, Colombia";

// URLs
export const LINKEDIN_URL = "https://linkedin.com/in/kaelwebdev";
export const GITHUB_URL = "https://github.com/kaelwebdev";
export const PORTFOLIO_URL = "https://kaelwebdev.github.io";
export const ORIGINAL_PORTFOLIO_URL = "https://github.com/midudev/porfolio.dev";

// Información de educación y especialización (estimada)
export const EDUCATION_YEARS = 4.5; // 9 semestres
export const EMPHASIS_YEARS = 1.5; // 3 semestres de énfasis en desarrollo web
export const SPECIALIZATION_YEARS = 1;
export const EMPHASIS_SPECIALIZATION_YEARS = 1;
export const HOLBERTON_SPECIALIZATION_YEARS = SPECIALIZATION_YEARS + EMPHASIS_SPECIALIZATION_YEARS; // 2 años de especialización en Holberton School

// Años de experiencia en proyectos/trabajo (estimada)
export const HITCH_COMPANY_YEARS = 2;
export const THESIS_YEARS = 1;
export const FREELANCE = 0.5; // 6 meses de experiencia freelance

// Años de experiencia (calculados automáticamente)
export const START_YEAR = 2014; // en julio de 2014 empecé a estudiar ingeniería multimedia
export const FIRST_WORK_YEAR = 2019;
export const workExperience = HITCH_COMPANY_YEARS + FREELANCE;
export const TEAMWORK= EMPHASIS_YEARS + HOLBERTON_SPECIALIZATION_YEARS + HITCH_COMPANY_YEARS;
export const overallExperience = EDUCATION_YEARS + THESIS_YEARS + HOLBERTON_SPECIALIZATION_YEARS + workExperience;

// experiencia en determinadas tecnologías (estimada)
export const TECH_JAVASCRIPT_YEARS = EMPHASIS_YEARS + EMPHASIS_SPECIALIZATION_YEARS + FREELANCE + HITCH_COMPANY_YEARS;
export const TECH_TYPESCRIPT_YEARS = EMPHASIS_YEARS + EMPHASIS_SPECIALIZATION_YEARS + FREELANCE + HITCH_COMPANY_YEARS;
export const TECH_REACT_YEARS = HITCH_COMPANY_YEARS + EMPHASIS_SPECIALIZATION_YEARS;
export const TECH_ANGULAR_YEARS = THESIS_YEARS + EMPHASIS_SPECIALIZATION_YEARS + FREELANCE;

// Meta tags
export const SEO_TITLE = "Portafolio de kaelwebdev - Ingeniero, Desarrollador y Programador Web";
export const SEO_DESCRIPTION = "Contrata a kaelwebdev (Carlos Daniel Cortez) para crear tu aplicación web/apps. Experiencia en desarrollo web.";
export const SEO_KEYWORDS = "desarrollador web, ingeniero multimedia, react, angular, typescript, javascript, fullstack";

// Redes sociales
export const SOCIAL_LINKS = {
  linkedin: LINKEDIN_URL,
  github: GITHUB_URL,
};

// Disponibilidad
export const IS_AVAILABLE_FOR_WORK = true;
export const AVAILABILITY_TEXT = "Disponible para trabajar";

// Última actualización
export const LAST_UPDATE = "12/08/2024";
