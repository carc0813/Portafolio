import proyecto1 from "../assets/imag/proyecto1.png";
import cancha1 from "../assets/imag/cancha1.jpg";
import peru from "../assets/imag/peru.jpg";

const projects = [
    {
        id: 1,
        titulo: "E-commerce",
        descripcion:
            "Aplicación Full Stack para gestión de productos, carrito de compras, pedidos y pagos.",

        imag: proyecto1,

        tecnologias: [
            "React",
            "Node.js",
            "Express",
            "Sequelize",
            "PostgreSQL",
            "Stripe"
        ],

        url: "http://localhost:3000",

        github: "https://github.com/carc0813/Ecommerce"
    },

    {
        id: 2,
        titulo: "Cancheros",
        descripcion:
            "Aplicación web para consultar y reservar canchas sintéticas de manera sencilla.",

        imag: cancha1,

        tecnologias: [
            "HTML5",
            "CSS3",
            "Bootstrap",
            "JavaScript",
            "PostgreSQL",
            "Git / GitHub",
            "Java"
        ],

        url: "https://cancheros-proyecto.vercel.app/index.html",

        github: "https://github.com/Dylanfelipe01/Cancheros_Proyecto.git"
    },

{
    id: 3,
    titulo: "Hackatón 1 - Generation",
    descripcion:
        "Proyecto colaborativo desarrollado durante la Hackatón de Generation, enfocado en la creación de una aplicación web funcional. de turismo",

    imag:peru,

    tecnologias: [
        "HTML5",
        "CSS3",
        "Bootstrap",
        "JavaScript"
    ],

    url: "https://juanva092002.github.io/Hackaton_1_Generation/",

    github: "https://github.com/JuanVa092002/Hackaton_1_Generation"
}


];

export default projects;