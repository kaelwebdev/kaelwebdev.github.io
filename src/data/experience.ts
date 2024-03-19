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
        Fui responsable del desarrollo frontend.
        Mantuve conexión directa con el CEO y participación
        importante en la toma de decisiones de la web app móvil principal
        de la empresa. Tengo un buen recuerdo de mi exjefe
        y del equipo de trabajo.
      `,
    link: "https://apps.apple.com/co/app/hitch/id1591257825",
  },
  {
    date: "7/2019 - 9/2019",
    title: "Multimedia Engineer - Full Stack",
    company: "Nomen nescio",
    description:
      `
        Responsable del desarrollo frontend y backend
        de una web app para móvil.
        Fue interesante haber investigado los temas referentes a seguridad.
      `,
  },
  {
    date: "2018-2019",
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