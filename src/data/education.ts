export interface DataEducationItem {
  date?: string,
  title?: string,
  company?: string,
  description?: string,
  link?: string,
}

export type DataEducationList = DataEducationItem[];

const EDUCATION = [
    {
      date: "... - Siempre",
      title: "(Autodidacta)",
      //company: "(Autodidacta)",
      description:
        `
        En un mundo acelerado y tecnológico es fundamental saber aprender por ti mismo.
        La gran cantidad de frameworks, librerías, entornos de ejecución, y lenguajes demandan
        esta condición. También es impórtente un pensamiento crítico y agnóstico 
        en este contexto.
        `
    },
    {
      date: "2020 - 2021",
      title: "Full Stack Web Developer",
      company: "Holberton",
      description:
        `Especialización en Desarrollo de Software Web.
        `
    },
    {
      date: "2019 - 2020",
      title: "Software Developer",
      company: "Holberton",
      description:
        `
         Especialización en Desarrollo de Software. Trabajo en equipo, pensamiento algorítmico, y arquitecura de software.
         Metodologia basada en proyectos.
        `,
    },
    {
      date: "2013-2019",
      title: "Ingeniero Multimedia",
      company: "Universidad de San Buenaventura Cali",
      description:
        `Con acreditación de Alta Calidad. Acreditación Internacional ABET.
         Profesional capacitado para resolver problemas
         haciendo uso de software que integre las mejores prácticas
         UX/UI para diferentes dispositivos interactivos.
        `,
      link: 'https://usbcali.edu.co/programa/ingenieria/pregrado/ingenieria-multimedia/'
    },
  ]

  export default EDUCATION;