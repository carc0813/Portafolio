const projects = [
    {
        id: 1,
        titulo: "E-commerce",
        descripcion:
            "Aplicación Full Stack para gestión de productos, carrito de compras, pedidos y pagos.",

        imagen: "/proyecto1.png",

        tecnologias: [
            "React",
            "Node.js",
            "Express",
            "Sequelize",
            "PostgreSQL",
            "Stripe"
        ],

        url: " http://localhost:3000",

        github: "https://github.com/carc0813/Ecommerce.git"
    },

    {
        id: 2,
        titulo: "Cancheros",
        descripcion:
            "Aplicación web para consultar y reservar canchas sintéticas de manera sencilla.",

        imagen: "/proyecto2.png",

        tecnologias: [
            "React",
            "JavaScript",
            "CSS",
            "Node.js"
        ],

        url: "https://tu-proyecto-cancheros.com",

        github: "https://github.com/tu-usuario/cancheros"
    },

    {
        id: 3,
        titulo: "NASA APOD",
        descripcion:
            "Aplicación que consume la API de NASA para mostrar la imagen astronómica del día.",

        imagen: "/proyecto3.png",

        tecnologias: [
            "React",
            "Axios",
            "API REST",
            "CSS"
        ],

        url: "https://tu-nasa-apod.com",

        github: "https://github.com/tu-usuario/nasa-apod"
    }
];

export default projects;