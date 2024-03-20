import {TAGS, type DataTagItem} from "./tags"

export interface DataProjectItem {
    image?: string
    title?: string,
    description?: string,
    github?: string,
    link?: string,
    tags?: Array<DataTagItem>
}
  
export type DataEducationList = DataProjectItem[];

export const PROJECTS:DataEducationList = [
    {
        title: "Animeflv without redirections - Plugin Google Chrome",
        description:
          `
            Extensión para Google Chrome que bloquea las redirecciones
            que no pertenecen al dominio.
          `,
        //link: "",
        github: "https://github.com/kaelwebdev/animeflv-without-redirections",
        //image: "",
        tags: [TAGS.JAVASCRIPT],
      },
    {
        title: "Online Directory",
        description:
          `
            Proyecto formativo - La aplicación permite
            agregar contactos a un directorio digital haciendo
            uso de websockets.
          `,
        //link: "",
        github: "https://github.com/kaelwebdev/online-directory",
        //image: "",
        tags: [TAGS.REACT, TAGS.GRAPHQL, TAGS.APOLLOSERVER, TAGS.APOLLOCLIENT, TAGS.MONGODB],
      },
      {
        title: "HITCH - International product comparator",
        description:
          `
            Web App Móvil para 18 países. Permite al consumidor tomar una decisión inteligente de compra.
            Al comparar precios en los diferentes puntos de venta de cada producto, en tiempo real.
            (Tecnología, Mercado, Farmacia)
          `,
        link: "https://play.google.com/store/apps/details?id=com.hitch.app.android&pcampaignid=web_share",
        github: "https://apps.apple.com/co/app/hitch/id1591257825",
        //image: "",
        tags: [TAGS.REACT, TAGS.REACT_NATIVE, TAGS.EXPO, TAGS.JAVASCRIPT, TAGS.CSS],
      },
      {
        title: "Agora Events",
        description:
          `
            Web App para crear invitaciones a eventos sociales.
          `,
        //link: "",
        github: "https://github.com/felipesv/agora-events",
        //image: "",
        tags: [TAGS.REACT, TAGS.REDUX, TAGS.ExpressJS, TAGS.TYPESCRIPT, TAGS.JAVASCRIPT, TAGS.BULMA ],
      },
      {
        title: "Segurity Chat - Chat encriptado",
        description:
          `
            Web App Móvil para uso interno de una empresa.
            Todos los mensajes debían estar especialmente encriptados.
            Además se utilizó encriptación asimétrica. Y otras
            especificaciones de seguridad.
          `,
        link: "",
        //image: "ee",
        tags: [TAGS.IONIC, TAGS.FIREBASE],
      },
      {
        title: "Oharasis - Visualizador de datos",
        description:
          `
            Plataforma web para visualización y seguimiento, de las
            competencias y habilidades de los estudiantes universitarios
          `,
        github: "https://github.com/kaelwebdev/Oharasis",
        //image: "",
        tags: [TAGS.ANGULAR, TAGS.THREE, TAGS.TYPESCRIPT, TAGS.FIREBASE, TAGS.BOOSTRAP],
      },
      {
        title: "My Coach App",
        description:
          `
            Web App para preparadores físicos y sus clientes. Gestiona y vigila las rutinas.
            Pensado para ejercitarse desde la comodidad del hogar.
          `,
        github: "https://github.com/JamesPagani/MyCoachApp",
        //image: "",
        tags: [TAGS.ANGULAR, TAGS.TYPESCRIPT, TAGS.MONGODB, TAGS.CSS],
      },
      {
        title: "Holberton Projects",
        description:
          `
            15 proyectos formativos con más de 132 problemas resueltos.
          `,
        github: "https://github.com/kaelwebdev/HolbertonProjects",
        //image: "",
        tags: [TAGS.C, TAGS.Python, TAGS.BASH, TAGS.Flask, TAGS.MONGODB],
      },
      {
        title: "3D Web Object Grapher",
        description:
          `
            Manipulación y renderizado de objetos 3D en una interfaz gráfica
            conformada por un viewport y un panel de control.
          `,
        github: "https://github.com/kaelwebdev/3D-web-object-grapher",
        //image: "",
        tags: [TAGS.THREE, TAGS.JAVASCRIPT, TAGS.HTML, TAGS.CSS],
      },
      {
        title: "Digital Image Processing Program",
        description:
          `
            El programa permitía modificar la matriz de píxeles,
            para lograr filtros de colores e iluminación.
            La interfaz estaba conformada por una vista previa
            de la imagen y un panel de control.
          `,
        //image: "",
        tags: [TAGS.MATLAB],
      },
      {
        title: "Numeric Methods Web Grapher",
        description:
          `
            Web App que permitía realizar soluciones
            a ecuaciones matemáticas usando métodos numéricos
            y además representarlo en un plano cartesiano.
          `,
        //image: "",
        tags: [TAGS.DJANGO,TAGS.Python, TAGS.HTML, TAGS.CSS],
      },
      
      {
        title: "Image Filtering Program For Oracle Databases",
        description:
          `
            El programa encontraba la imagen mayormente similar
            a otra. La interfaz permitía controlar una serie
            de parámetros de búsqueda.
          `,
        //image: "",
        tags: [TAGS.ORACLE, TAGS.Java, TAGS.SQL],
      },
      {
        title: "Trigonometric Functions Grapher",
        description:
          `
            El programa dibujaba las funciones trigonométricas
            pasadas por el usuario en un plano cartesiano.
          `,
        //image: "",
        tags: [TAGS.Java],
      },
      {
        title: "Caja Registradora desde CLI",
        description:
          `
            Proyecto Formativo - Emulaba algunas funcionalidades del sistema de compras
            de una caja registrada offline de una tienda usando una terminal de comandos.
          `,
        //image: "",
        tags: [TAGS.C_PLUS_PLUS],
      },
]