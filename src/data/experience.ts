export interface DataExperienceItem {
  date?: string,
  title?: string,
  company?: string,
  description?: string,
  link?: string,
}

export type DataExperienceList = DataExperienceItem[];

const EXPERIENCIE:DataExperienceList = [
  {
    date: "05/2021 - 07/2023",
    title: "Software Engineer - Frontend",
    company: "Hitch",
    description:
      `
        Responsable de dar soluciones aplicadas en la creación, desarrollo  y mantenimiento de todas las funcionalidades frontend de la aplicación de la empresa. Incluyendo el trabajo en equipo con otras áreas de IT, Marketing, e Inteligencia de datos. Además, debía participar en la toma de decisiones en contacto directo con el CEO. Logrando que la aplicación cumpliera su objetivo inicial de llegar a 18 países como una de las aplicaciones más innovadoras en el contexto de ayuda en la toma de decisiones inteligentes para el usuario. La aplicación ofrece información comparativa entre productos de diversas categorías.
      `,
    link: "https://apps.apple.com/co/app/hitch/id1591257825",
  },
  {
    date: "07/2019 - 07/2020",
    title: "Multimedia Engineer - Full Stack",
    company: "Nomen nescio",
    description:
      `
        Responsable de la creación, desarrollo, y mantenimiento  frontend y backend de una web app para móvil que consistía en crear un chat seguro para uso interno de la empresa. Aquí hice investigación y uso de técnicas de encriptación para cumplir con el objetivo principal de la empresa para esta app.
      `,
  },
  {
    date: "06/2018-06/2019",
    title: "Multimedia Engineer - Full Stack",
    company: "USB Cali",
    description:
      `
        Responsable del desarrollo frontend y backend
        de una plataforma web. Existía una necesidad de analizar
        las inclinaciones académicas de los estudiantes,
        para lo cual presenté una solución atractiva y de fácil entendimiento,
        aplicando el concepto de visualización de datos.
      `,
    link: 'https://github.com/kaelwebdev/Oharasis'
  },
  
]

export default EXPERIENCIE;