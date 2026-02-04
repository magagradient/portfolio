export default function Hero() {
  return (
    <header className="p-8 text-center sm:text-left">
      <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight relative inline-block pb-6">
        DESARROLLADORA DE SOFTWARE <br />
        <span className="text-[#6a6a6a] font-extrabold">JUNIOR</span>
        <span className="absolute bottom-0 left-12 sm:left-0 w-40 h-1 bg-gradient-to-r from-red-500 to-orange-400 rounded-full"></span>
      </h1>

      <p className="mt-6 text-gray-400 w-full lg:w-3/4">
        Desarrolladora de software junior enfocada en la creación de aplicaciones web funcionales, con código claro y buen manejo de lógica backend.
      </p>
    </header>
  );
}
