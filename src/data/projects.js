import urLearning from "../assets/imag/urlearning.png";
import cancha1 from "../assets/imag/cancha1.jpg";

const projects = [
    {
        id: 1,
        titulo: "Cancheros",
        categoria: "Aplicación web de reservas",
        descripcion:
            "Plataforma web para consultar canchas sintéticas y gestionar reservas, con una interfaz enfocada en facilitar la experiencia del usuario.",
        imag: cancha1,
        tecnologias: [
            "Java",
            "Spring Boot",
            "JavaScript",
            "PostgreSQL"
        ],
        url: "https://cancheros-proyecto.vercel.app/index.html",
        github: "https://github.com/Dylanfelipe01/Cancheros_Proyecto.git"
    },
    {
        id: 2,
        titulo: "urLearning",
        categoria: "Plataforma de aprendizaje",
        descripcion:
            "Aplicación Full Stack orientada a la gestión de cursos, carrito de compras, pedidos y procesos de pago.",
        imag: urLearning,
        tecnologias: [
            "React",
            "Node.js",
            "Express",
            "PostgreSQL"
        ],
        url: "https://pf-ur-learning.vercel.app/",
        github: "https://github.com/JuanSBass/PF-urLearning"
    }
];

export default projects;