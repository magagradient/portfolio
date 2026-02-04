# Portfolio de Desarrollo – Magalí Guerzoni

Portfolio personal de desarrollo de software, creado como espacio de presentación profesional y registro de proyectos reales y académicos.

El objetivo de este sitio es mostrar no solo el resultado visual, sino también el enfoque técnico, las decisiones de arquitectura y la forma de pensar los proyectos, con especial énfasis en desarrollo backend y aplicaciones web.

## Sobre este portfolio

Este portfolio fue desarrollado como parte de mi proceso de formación y búsqueda laboral en desarrollo de software.

Incluye proyectos personales en curso y proyectos académicos finalizados, seleccionados para mostrar distintos enfoques técnicos, tecnologías y niveles de complejidad. El foco principal está puesto en el backend, el diseño de APIs y la organización del código, sin dejar de lado la integración con frontend cuando el proyecto lo requiere.

El sitio se encuentra en evolución constante, a medida que los proyectos crecen o se incorporan nuevas funcionalidades.

## Stack tecnológico

El portfolio está desarrollado utilizando un stack moderno orientado a aplicaciones web rápidas, mantenibles y escalables.

- **Next.js** para la estructura del sitio y renderizado eficiente.
- **React** para la construcción de la interfaz de usuario mediante componentes.
- **Tailwind CSS** para el estilado, priorizando consistencia visual y rapidez de desarrollo.
- **JavaScript (ES6+)** como lenguaje principal.

## Decisiones técnicas

El desarrollo de este portfolio prioriza claridad, mantenibilidad y coherencia técnica por sobre la complejidad innecesaria.

- **Next.js** fue elegido por su estructura clara, buen soporte para SEO y facilidad de despliegue, lo que lo hace ideal para un sitio de presentación profesional.
- **Tailwind CSS** permite mantener un diseño consistente sin depender de hojas de estilo extensas, facilitando ajustes rápidos y evitando sobreingeniería visual.
- La información de los proyectos se encuentra desacoplada de los componentes de UI, ubicada en archivos de datos independientes. Esta decisión permite escalar el contenido, reutilizar componentes y mantener una separación clara de responsabilidades.
- Se destaca un proyecto principal en desarrollo activo, acompañado por proyectos académicos finalizados, con el objetivo de mostrar tanto la evolución técnica como una base sólida en desarrollo backend.
- El código busca ser explícito y legible, priorizando estructuras claras por sobre abstracciones innecesarias.

## Proyectos destacados

El proyecto principal incluido en este portfolio es un **e-commerce full stack en desarrollo activo**, concebido como una aplicación real, con foco en arquitectura backend, modelado de datos y escalabilidad. Este proyecto refleja mi forma actual de trabajar y las decisiones técnicas que estoy profundizando.

El portfolio se complementa con proyectos académicos finalizados, incluidos para mostrar experiencia en desarrollo de APIs REST, manejo de bases de datos relacionales y no relacionales, y organización de código en proyectos backend.

Cada proyecto cuenta con su propio repositorio y documentación específica.

## Estructura del proyecto

La estructura del proyecto está pensada para mantener una separación clara de responsabilidades y facilitar la escalabilidad.

- **pages/**  
  Contiene las páginas del sitio utilizando el sistema de ruteo de Next.js (Pages Router).

- **components/**  
  Componentes reutilizables de la interfaz, organizados por responsabilidad visual y funcional.

- **data/**  
  Archivos de datos que contienen la información de los proyectos. Esta capa desacoplada permite modificar o agregar contenido sin afectar la lógica de presentación.

- **public/**  
  Recursos estáticos como imágenes y favicons.

- **styles/**  
  Configuración global de estilos y Tailwind CSS.

## Ejecutar el proyecto localmente

Para ejecutar este proyecto en un entorno local, seguí los siguientes pasos:

1. Clonar el repositorio  
   `git clone <url-del-repositorio>`

2. Ingresar al directorio del proyecto  
   `cd nombre-del-proyecto`

3. Instalar las dependencias  
   `npm install`

4. Iniciar el servidor de desarrollo  
   `npm run dev`

El proyecto se ejecutará por defecto en http://localhost:3000
