export default function Technologies({ technologies }) {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold tracking-tight text-sky-400"> Tecnologías
        
      </h2>
      
      {Object.entries(technologies).map(([category, techs]) => (
        <div key={category}>
          <h3 className="text-xl font-semibold mb-3 capitalize">
            {category.replace("_", " ")}
          </h3>

          <div className="flex flex-wrap gap-3">
            {techs.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-neutral-800 text-sm text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
