export const ecommerce = {
  id: "ecommerce-art",
  title: "E-commerce Full Stack",
  subtitle: "Plataforma de venta de arte digital",
  description:
    "Plataforma e-commerce full stack desarrollada desde cero, con backend orientado a APIs REST y frontend SPA en integración progresiva.",
  problem:
    "Diseñar una arquitectura capaz de gestionar un catálogo complejo de productos digitales, con múltiples relaciones, filtros avanzados y preparación para escalar a una tienda completa.",
  backend: {
    stack: ["Node.js", "Express", "Sequelize", "MySQL"],
    highlights: [
      "API REST modular y escalable con separación por responsabilidades (routes, controllers, middlewares, validators)",
      "Sistema de respuestas estandarizado para éxito, errores y validaciones",
      "Filtros dinámicos y búsqueda avanzada de productos",
      "Relaciones many-to-many (categorías, series, keywords, estilos, colores y temas)",
      "Soft delete y control de estados de producto",
      "Upload y gestión de imágenes",
      "Middlewares de seguridad (CORS, Helmet, sanitización XSS, rate limiting)"
    ]
  },
  frontend: {
    stack: ["React", "Vite", "React Router", "Tailwind CSS"],
    highlights: [
      "Aplicación SPA con arquitectura modular por dominios (Shop, Cart, Account, Pages)",
      "Sistema de rutas completo para un e-commerce real",
      "Flujos de usuario definidos: autenticación, perfil, favoritos y recuperación de contraseña",
      "Carrito y checkout definidos",
      "Estructura preparada para consumir el backend propio mediante APIs REST"
    ]
  },
  status: "Proyecto activo en desarrollo",
  links: {
    backend: "https://github.com/magagradient/magaLab-ecommerce/tree/main/backend",
    frontend: "https://github.com/magagradient/magaLab-ecommerce/tree/main/frontend"
  },
  featured: true
};
