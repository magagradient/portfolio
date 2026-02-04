import { projects } from "../data/projectsData";

export default function Projects() {
  return (
    <section className="space-y-16">
<h2 className="text-3xl font-bold tracking-tight text-sky-400">
  Proyectos
</h2>


      {projects.map((project) => (
        <article
          key={project.id}
          className="relative border border-white/10 rounded-2xl p-8 space-y-8 bg-neutral-900"
        >
          {/* Accent line */}
          <div className="absolute left-0 top-8 h-12 w-1 bg-orange-400 rounded-full" />

          {/* Header */}
          <header className="space-y-1">
            <h3 className="text-2xl font-extrabold">{project.title}</h3>
            <p className="text-sm text-orange-400">{project.subtitle}</p>
          </header>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            {project.description}
          </p>

          {/* Problem */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-white">Qué problema resuelve</h4>
            <p className="text-gray-400 leading-relaxed max-w-3xl">
              {project.problem}
            </p>
          </div>

          {/* Backend / Frontend */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Backend */}
            {project.backend && (
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-white">Backend</h4>
                <p className="text-sm text-gray-400">
                  Stack: {project.backend.stack.join(" · ")}
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {project.backend.highlights.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Frontend */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">Frontend</h4>
              {project.frontend ? (
                <>
                  <p className="text-sm text-gray-400">
                    Stack: {project.frontend.stack.join(" · ")}
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {project.frontend.highlights.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              ) : (
                <p className="text-sm text-gray-400 italic">No aplica / Backend only</p>
              )}
            </div>
          </div>

          {/* Status */}
          <div className="text-sm text-orange-400 font-medium">
            {project.status || "En desarrollo"}
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm">
            {project.links?.backend && (
              <a
                href={project.links.backend}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-orange-400 transition-colors"
              >
                Repositorio Backend
              </a>
            )}
            {project.links?.frontend && (
              <a
                href={project.links.frontend}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-orange-400 transition-colors"
              >
                Repositorio Frontend
              </a>
            )}
          </div>
        </article>
      ))}
    </section>
  );
}
