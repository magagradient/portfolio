import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://github.com/magagradient",
    label: "GitHub",
    icon: FaGithub,
  },
];

export default function Sidebar() {
  return (
    <aside className="md:sticky md:top-0 md:h-screen md:w-2/5 lg:w-1/3 bg-white text-black p-8 md:rounded-r-3xl shadow-lg flex justify-center items-center">
      <div className="flex flex-col items-center text-center space-y-5">
        <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl p-1">
          <img
            src="/images/perfil6.png"
            alt="Foto de perfil de Magalí Guerzoni"
            className="w-80 h-96 object-cover rounded-2xl"
            loading="lazy"
          />
        </div>

        <h2 className="text-2xl font-extrabold">Magalí Guerzoni</h2>

        <p className="text-gray-600 max-w-xs">
          Desarrolladora de software junior enfocada en la creación de aplicaciones web.
        </p>

        <nav aria-label="GitHub">
          <ul className="flex space-x-4 text-orange-500 text-xl">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="transition-transform hover:scale-150"
                >
                  <Icon />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
