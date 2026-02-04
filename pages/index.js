import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Technologies from "../components/Technologies";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Formation from "../components/Formation";

/**
 * Home Page 
 * @returns {JSX.Element}
 */

const serviceCard = [
  {
    title: "DESARROLLO BACKEND",
    description: "Desarrollo de APIs, manejo de bases de datos y reglas de negocio del sistema.",
    gradient: "from-sky-400 to-indigo-500",
    textColor: "text-white",
    hoverShadow: "hover:shadow-[0_25px_50px_rgba(255,87,34,0.4)]",
  },
  {
    title: "APLICACIONES WEB FULL STACK",
    description: "Construcción de aplicaciones web que consumen APIs y funcionan como sistemas completos.",
    gradient: "from-sky-400 to-indigo-500",
    textColor: "text-white",
    hoverShadow: "hover:shadow-[0_25px_50px_rgba(255,87,34,0.4)]",
  },
  {
    title: "CÓDIGO LIMPIO Y ORGANIZACIÓN",
    description: "Buenas prácticas, estructura clara y código mantenible.",
    gradient: "from-sky-400 to-indigo-500",
    textColor: "text-white",
    hoverShadow: "hover:shadow-[0_25px_50px_rgba(255,87,34,0.4)]",
  },
];

const technologies = {
  frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  backend: ["Node.js", "Express", "Sequelize", "REST APIs"],
  database: ["MySQL", "MongoDB"],
  tools: [
    "Git",
    "GitHub",
    "Postman",
    "npm",
    "VS Code",
    "MySQL Workbench",
    "Vercel",
    "Markdown"
  ],  
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-poppins">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Magalí Guerzoni | Desarrolladora de Software Junior</title>

        <meta
          name="description"
          content="Portfolio de Magalí Guerzoni, desarrolladora de software junior enfocada en aplicaciones web, lógica backend y buenas prácticas de código."
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Magalí Guerzoni | Desarrolladora de Software Junior" />
        <meta
          property="og:description"
          content="Desarrolladora de software junior especializada en aplicaciones web, APIs y backend."
        />
        {/* <meta property="og:url" content="https://TU-DOMINIO-O-VERCEL.vercel.app" />
        <meta property="og:image" content="/og-image.png" /> */}

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon/m-favicon1.png" sizes="96x96" />

        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="flex flex-col md:flex-row">
        {/* Sidebar with Profile */}
        <Sidebar />

        {/* Main Content */}
        <section className="w-full md:w-3/5 lg:w-2/3 overflow-y-auto p-8 space-y-16">

        {/* Hero Section */}
        <Hero />

        {/* Services Cards */}
        <Services serviceCard={serviceCard} />

        {/* Tecnologias */}
        <Technologies technologies={technologies} />

        {/* Proyectos */}
        <Projects />

        {/* Formacion */}
        <Formation />

        {/* Footer */}
        <Footer />

        </section>
      </main>
    </div>
  );
}

