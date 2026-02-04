import { FaGraduationCap } from "react-icons/fa";

export default function Formation() {
  const studies = [
    {
      title: "Diplomatura en Desarrollo Web Frontend - Universidad Nacional de Tres de Febrero (UNTREF) 2023",
      status: "Finalizada",
    },
    {
      title: "Diplomatura en Desarrollo Web Backend - Universidad Nacional de Tres de Febrero (UNTREF) 2024",
      status: "Finalizada",
    },
    {
      title: "Ingeniería en Sistemas - Universidad de la Marina Mercante (UdeMM) 2026",
      status: "Próximo inicio",
    },
  ];

  return (
    <section className="mt-16 px-8 md:px-0 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-3">
        <FaGraduationCap className="text-orange-500" /> Formación
      </h2>

      <ul className="space-y-6">
        {studies.map(({ title, status }) => (
          <li
            key={title}
            className="flex justify-between items-center border-l-4 border-orange-400 pl-4 py-2 bg-white/5 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="font-semibold text-gray-200">{title}</span>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                status === "Finalizada"
                  ? "bg-green-600 text-white"
                  : status === "Próximo inicio"
                  ? "bg-yellow-500 text-black"
                  : "bg-gray-500 text-white"
              }`}
            >
              {status}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
