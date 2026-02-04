export default function Services({ serviceCard }) {
  return (
    <section
      className="w-full xl:w-4/5 sm:pb-8 sm:pe-8"
      aria-label="Service Highlights"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 perspective-[1000px]">
        {serviceCard.map(
          ({ title, description, gradient, textColor, hoverShadow }, index) => (
            <div
              key={index}
              className={`group [transform-style:preserve-3d] transition-transform duration-500 hover:rotate-x-[6deg] hover:rotate-y-[6deg] bg-gradient-to-br ${gradient} ${textColor} p-6 rounded-xl relative overflow-hidden backdrop-blur-md bg-opacity-60 border border-white/10 ${hoverShadow}`}
            >
              <div className="absolute inset-0 opacity-10 bg-cover" />
              <div className="relative z-10">
                <h3 className="text-lg font-semibold leading-snug">{title}</h3>
                <p className="mt-2 text-sm opacity-90 leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
