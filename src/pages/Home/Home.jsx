import "@fontsource-variable/onest";
import "./home.css";
import movie from "../../assets/img/best_movie.png";
import django from "../../assets/img/biblioteca.png";
import ccip from "../../assets/img/ccip.png";
import smartParking from "../../assets/img/smartparking.png";
import dani from "../../assets/img/danidev.png";
function Home() {
  return (
    <main>
      {/* Introduccion */}
      <div className="introduccion py-16 md:py-36 w-full mx-auto container lg:max-w-4xl md:max-w-2xl">
        <div className="flex gap-8 items-center">
          <h1 className="font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">
            Hey, soy danidev
          </h1>
          <a
            href="https://linkedin.com/in/midudev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center transition md:justify-center md:hover:scale-105"
          >
            <div className="flex items-center ">
              <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span>
                <div
                  className="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap"
                  style={{ border: "1px solid #87CEEB" }}
                >
                  Disponible para trabajar
                </div>
              </span>
            </div>
          </a>
        </div>
        <p className="py-6 ">
          Estudiante del Instituto Tecnológico de Estudios Superiores de
          Arequipa <strong>TECSUP en Perú</strong>,
          <strong> con un interés destacado en el desarrollo web</strong>. En la
          actualidad, me encuentro enfocado en mi formación, buscando
          oportunidades para aprender y contribuir al desarrollo de aplicaciones
          únicas.
        </p>
        <nav className="flex gap-3">
          <a
            href="mailto:miduga@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            role="link"
            className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-yellow-500/80 text-md hover:bg-gray-900 hover:border-gray-700 group max-w-fit hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
          >
            <svg
              className="size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path>
              <path d="M3 6l9 6l9 -6"></path>
              <path d="M15 18h6"></path>
              <path d="M18 15l3 3l-3 3"></path>
            </svg>
            Contáctame
          </a>
          <a
            href="https://www.linkedin.com/in/dante-samuel-rodriguez-chambi-444041279/"
            target="_blank"
            rel="noopener noreferrer"
            role="link"
            className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-yellow-500/80 text-md hover:bg-gray-900 hover:border-gray-700 group max-w-fit hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
          >
            <svg
              className="size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M8 11l0 5"></path>
              <path d="M8 8l0 .01"></path>
              <path d="M12 16l0 -5"></path>
              <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
            </svg>
            LinkedIn
          </a>
        </nav>
        {/* Experiencia */}
        <div className="experiencia py-16">
          <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
            <svg
              className="size-8"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
              <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
              <path d="M12 12l0 .01"></path>
              <path d="M3 13a20 20 0 0 0 18 0"></path>
            </svg>
            Experiencia Laboral
          </h2>

          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Marzo 2023
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-yellow-400">
                Desarrollo Backend y Frontend
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-white">
                Realize un proyecto de desarrollo web, con el uso de Html, Css y
                JavaScript.
              </p>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Marzo 2024
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-yellow-400">
                Estudiante de Desarrollo Web
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-white">
                Actualmente me encuentro curszando mi ultimo ciclo de estudios
                con proyectos realizados en Django, React, Node.js y Angular.
              </p>
            </li>
          </ol>
        </div>
        {/* Proyectos */}
        <div className="proyectos ">
          <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
            <svg
              className="size-7"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M7 8l-4 4l4 4"></path>
              <path d="M17 8l4 4l-4 4"></path>
              <path d="M14 4l-4 16"></path>
            </svg>
            Proyectos
          </h2>
          <div className="flex flex-col gap-y-16">
            {/* Best Movie */}
            <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
              <div className="w-full md:w-1/2">
                <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                  <img
                    src={movie}
                    alt="Primer ciclo de estudios"
                    className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 md:max-w-lg">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  Best Movie - A beautiful movie website.
                </h3>
                <div className="flex flex-wrap mt-2">
                  <ul className="flex flex-row mr-2 gap-x-2">
                    <li>
                      <span className="flex gap-x-2 rounded-full text-xs bg-black text-white py-1 px-2">
                        <svg
                          className="size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 452 520"
                        >
                          <path
                            fill="#e34f26"
                            d="M41 460L0 0h451l-41 460-185 52"
                          />
                          <path fill="#ef652a" d="M226 472l149-41 35-394H226" />
                          <path
                            fill="#ecedee"
                            d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"
                          />
                          <path
                            fill="#fff"
                            d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"
                          />
                        </svg>
                        HTML
                      </span>
                    </li>
                    <li>
                      <span className="flex gap-x-2 rounded-full text-xs bg-[#003159] text-white py-1 px-2">
                        <svg
                          className="size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 452 520"
                        >
                          <path
                            fill="#0c73b8"
                            d="M41 460L0 0h451l-41 460-185 52"
                          />
                          <path fill="#30a9dc" d="M226 472l149-41 35-394H226" />
                          <path
                            fill="#ecedee"
                            d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z"
                          />
                          <path
                            fill="#fff"
                            d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z"
                          />
                        </svg>
                        CSS
                      </span>
                    </li>
                    <li>
                      <span className="flex gap-x-2 rounded-full text-xs bg-yellow-700 text-white py-1 px-2">
                        <svg
                          className="size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="2500"
                          height="2500"
                          viewBox="0 0 1052 1052"
                        >
                          <path fill="#f0db4f" d="M0 0h1052v1052H0z" />
                          <path
                            d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z"
                            fill="#323330"
                          />
                        </svg>
                        JavaScript
                      </span>
                    </li>
                  </ul>
                  <div className="mt-2 text-gray-700 dark:text-gray-400">
                    Esta pagina fue creada en mi primer ciclo de estudios, esta
                    pagina web similar a Netflix, fue creada con HTML, CSS y
                    JavaScript.
                  </div>
                  <footer className="flex items-end justify-start mt-4 gap-x-4">
                    <a
                      href="https://github.com/DanniDevv/best-movie"
                      className="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-github"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                      </svg>
                      Code
                    </a>
                    <a
                      href=""
                      className="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-link"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 15l6 -6" />
                        <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                        <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                      </svg>
                      Preview
                    </a>
                  </footer>
                </div>
              </div>
            </article>
            {/* Api Django */}
            <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
              <div className="w-full md:w-1/2">
                <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                  <img
                    src={django}
                    alt="Primer ciclo de estudios"
                    className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 md:max-w-lg">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  Django-based API.
                </h3>
                <div className="flex flex-wrap mt-2">
                  <ul className="flex flex-row mr-2 gap-x-2">
                    <li>
                      <span className="flex gap-x-2 rounded-full text-xs bg-[#053a26] text-white py-1 px-2">
                        <svg
                          className="size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="800"
                          height="800"
                          viewBox="0 0 32 32"
                        >
                          <path
                            d="M14.135 4H18.1v18.169a26.218 26.218 0 0 1-5.143.535c-4.842-.005-7.362-2.168-7.362-6.322 0-4 2.673-6.6 6.816-6.6a6.448 6.448 0 0 1 1.724.2V4Zm0 9.142a3.992 3.992 0 0 0-1.337-.2c-2 0-3.163 1.223-3.163 3.366 0 2.087 1.107 3.239 3.138 3.239a9.355 9.355 0 0 0 1.362-.1v-6.3Z"
                            style={{ fill: "#44b78b" }}
                          />
                          <path
                            d="M24.4 10.059v9.1c0 3.133-.235 4.639-.923 5.938A6.316 6.316 0 0 1 20.237 28l-3.678-1.733a5.708 5.708 0 0 0 3.141-2.629c.566-1.121.745-2.42.745-5.837v-7.742ZM20.441 4.02h3.964v4.028h-3.964z"
                            style={{ fill: "#44b78b" }}
                          />
                        </svg>
                        Django
                      </span>
                    </li>
                    <li>
                      <span className="flex gap-x-2 rounded-full text-xs bg-black text-white py-1 px-2">
                        <svg
                          className="size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 452 520"
                        >
                          <path
                            fill="#e34f26"
                            d="M41 460L0 0h451l-41 460-185 52"
                          />
                          <path fill="#ef652a" d="M226 472l149-41 35-394H226" />
                          <path
                            fill="#ecedee"
                            d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"
                          />
                          <path
                            fill="#fff"
                            d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"
                          />
                        </svg>
                        HTML
                      </span>
                    </li>
                    <li>
                      <span className="flex gap-x-2 rounded-full text-xs bg-[#003159] text-white py-1 px-2">
                        <svg
                          className="size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 452 520"
                        >
                          <path
                            fill="#0c73b8"
                            d="M41 460L0 0h451l-41 460-185 52"
                          />
                          <path fill="#30a9dc" d="M226 472l149-41 35-394H226" />
                          <path
                            fill="#ecedee"
                            d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z"
                          />
                          <path
                            fill="#fff"
                            d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z"
                          />
                        </svg>
                        CSS
                      </span>
                    </li>
                  </ul>
                  <div className="mt-2 text-gray-700 dark:text-gray-400">
                    Esta API fue creada con el fin de aprender a usar Django,
                    gracias a la creación de esta API me permitió ganar un
                    concurso de mi Institución.
                  </div>
                  <footer className="flex items-end justify-start mt-4 gap-x-4">
                    <a
                      href="https://github.com/DanniDevv/BibliotecaDjangoV3"
                      className="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-github"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                      </svg>
                      Code
                    </a>
                    <a
                      href=""
                      className="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-link"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 15l6 -6" />
                        <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                        <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                      </svg>
                      Preview
                    </a>
                  </footer>
                </div>
              </div>
            </article>
            {/* CCIP */}
            <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
              <div className="w-full md:w-1/2">
                <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                  <img
                    src={ccip}
                    alt="Primer ciclo de estudios"
                    className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 md:max-w-lg">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  CCIP - Creation of a web page.
                </h3>
                <div className="flex flex-wrap mt-2">
                  <ul className="flex flex-row mr-2 gap-x-2">
                    <li>
                      <span className="flex gap-x-2 rounded-full text-xs bg-black text-white py-1 px-2">
                        <svg
                          className="size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 452 520"
                        >
                          <path
                            fill="#e34f26"
                            d="M41 460L0 0h451l-41 460-185 52"
                          />
                          <path fill="#ef652a" d="M226 472l149-41 35-394H226" />
                          <path
                            fill="#ecedee"
                            d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"
                          />
                          <path
                            fill="#fff"
                            d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"
                          />
                        </svg>
                        HTML
                      </span>
                    </li>
                    <li>
                      <span className="flex gap-x-2 rounded-full text-xs bg-[#003159] text-white py-1 px-2">
                        <svg
                          className="size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 452 520"
                        >
                          <path
                            fill="#0c73b8"
                            d="M41 460L0 0h451l-41 460-185 52"
                          />
                          <path fill="#30a9dc" d="M226 472l149-41 35-394H226" />
                          <path
                            fill="#ecedee"
                            d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z"
                          />
                          <path
                            fill="#fff"
                            d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z"
                          />
                        </svg>
                        CSS
                      </span>
                    </li>
                    <li>
                      <span className="flex gap-x-2 rounded-full text-xs bg-yellow-700 text-white py-1 px-2">
                        <svg
                          className="size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="2500"
                          height="2500"
                          viewBox="0 0 1052 1052"
                        >
                          <path fill="#f0db4f" d="M0 0h1052v1052H0z" />
                          <path
                            d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z"
                            fill="#323330"
                          />
                        </svg>
                        JavaScript
                      </span>
                    </li>
                  </ul>
                  <div className="mt-2 text-gray-700 dark:text-gray-400">
                    Concebí esta página durante mi cuarto ciclo académico,
                    mientras realizaba una pasantía empresarial junto a un
                    compañero. Terminando de manera exitosa el proyecto.
                  </div>
                  <footer className="flex items-end justify-start mt-4 gap-x-4">
                    <a
                      href="https://github.com/DanniDevv/landing-page-ccip"
                      className="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-github"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                      </svg>
                      Code
                    </a>
                    <a
                      href=""
                      className="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-link"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 15l6 -6" />
                        <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                        <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                      </svg>
                      Preview
                    </a>
                  </footer>
                </div>
              </div>
            </article>
            {/* Smart-Parking */}
            <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
              <div className="w-full md:w-1/2">
                <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                  <img
                    src={smartParking}
                    alt="Primer ciclo de estudios"
                    className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 md:max-w-lg">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  Smart Parking - Final Project
                </h3>
                <div className="flex flex-wrap mt-2">
                  <ul className="flex flex-row mr-2 gap-x-2">
                    <li>
                      <span className="flex gap-x-2 rounded-full text-xs bg-[#04361b] text-white py-1 px-2">
                        <svg
                          className="size-4"
                          viewBox="0 0 256 289"
                          width="256"
                          height="289"
                          xmlns="http://www.w3.org/2000/svg"
                          preserveAspectRatio="xMidYMid"
                        >
                          <path
                            d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505 7.155-2.385 8.48-2.915 15.9-7.156.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915l-105.74-60.953c-1.06-.53-2.385-.53-3.18 0L20.405 80.166c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.636 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.326-3.18 3.181-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18v120.58c0 20.936-11.396 33.126-31.272 33.126-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.24 220.885 0 213.465 0 205.515V83.346C0 75.396 4.24 67.976 11.13 64L116.87 2.783c6.625-3.71 15.635-3.71 22.26 0L244.87 64C251.76 67.975 256 75.395 256 83.346v122.17c0 7.95-4.24 15.37-11.13 19.345L139.13 286.08c-3.445 1.59-7.42 2.385-11.13 2.385Zm32.596-84.009c-46.377 0-55.917-21.2-55.917-39.221 0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.916 1.06 2.916 2.65 2.12 14.045 8.215 20.936 36.306 20.936 22.261 0 31.802-5.035 31.802-16.96 0-6.891-2.65-11.926-37.367-15.372-28.886-2.915-46.907-9.275-46.907-32.33 0-21.467 18.02-34.187 48.232-34.187 33.921 0 50.617 11.66 52.737 37.101 0 .795-.265 1.59-.795 2.385-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.326 0-2.65-1.06-2.916-2.385-3.18-14.575-11.395-19.345-33.126-19.345-24.38 0-27.296 8.48-27.296 14.84 0 7.686 3.445 10.07 36.306 14.31 32.597 4.24 47.967 10.336 47.967 33.127-.265 23.321-19.345 36.571-53.002 36.571Z"
                            fill="#539E43"
                          />
                        </svg>
                        Node.js
                      </span>
                    </li>
                    <li>
                      <span className="flex gap-x-2 rounded-full text-xs bg-[#59002c] text-white py-1 px-2">
                        <svg
                          className="size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 242 256"
                        >
                          <g clipPath="url(#a)">
                            <mask
                              id="b"
                              width="242"
                              height="256"
                              x="0"
                              y="0"
                              maskUnits="userSpaceOnUse"
                              style={{ maskType: "luminance" }}
                            >
                              <path fill="#fff" d="M0 0h242v256H0V0Z" />
                            </mask>
                            <g mask="url(#b)">
                              <path
                                fill="url(#c)"
                                d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"
                              />
                              <path
                                fill="url(#d)"
                                d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"
                              />
                            </g>
                          </g>
                          <defs>
                            <linearGradient
                              id="c"
                              x1="53.2"
                              x2="245"
                              y1="231.9"
                              y2="140.7"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#E40035" />
                              <stop offset=".2" stopColor="#F60A48" />
                              <stop offset=".4" stopColor="#F20755" />
                              <stop offset=".5" stopColor="#DC087D" />
                              <stop offset=".7" stopColor="#9717E7" />
                              <stop offset="1" stopColor="#6C00F5" />
                            </linearGradient>
                            <linearGradient
                              id="d"
                              x1="44.5"
                              x2="170"
                              y1="30.7"
                              y2="174"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#FF31D9" />
                              <stop
                                offset="1"
                                stopColor="#FF5BE1"
                                stopOpacity="0"
                              />
                            </linearGradient>
                            <clipPath id="a">
                              <path fill="#fff" d="M0 0h242v256H0z" />
                            </clipPath>
                          </defs>
                        </svg>
                        Angular
                      </span>
                    </li>
                    <li>
                      <span className="flex gap-x-2 rounded-full text-xs bg-black text-white py-1 px-2">
                        <svg
                          className="size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                          width="64"
                          height="64"
                        >
                          <path
                            fill="#fff"
                            d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z"
                          />
                        </svg>
                        Express.js
                      </span>
                    </li>
                  </ul>
                  <div className="mt-2 text-gray-700 dark:text-gray-400">
                    Concebí esta página durante mi cuarto ciclo académico,
                    mientras realizaba una pasantía empresarial junto a un
                    compañero. Terminando de manera exitosa el proyecto.
                  </div>
                  <footer className="flex items-end justify-start mt-4 gap-x-4">
                    <a
                      href="https://github.com/DanniDevv/Login-Smartparking"
                      className="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-github"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                      </svg>
                      Code
                    </a>
                    <a
                      href=""
                      className="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-link"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 15l6 -6" />
                        <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                        <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                      </svg>
                      Preview
                    </a>
                  </footer>
                </div>
              </div>
            </article>
          </div>
        </div>
        {/* About Me */}
        <div className="section undefined w-full mx-auto container lg:max-w-4xl md:max-w-2xl py-16">
          <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-8 text-black/80 dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-user-star"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h.5" />
              <path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
            </svg>
            Sobre mí
          </h2>
          <article className="flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row">
            <div className="[&>p]:mb-4 [&>p>strong]:text-yellow-500 dark:[&>p>strong]:text-yellow-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1">
              <p>
                Me llamo Dante Samuel pero mis amigos me llaman dani. Comence en
                la programación a los 17 años debido a que me gusta la
                tecnología.
                <strong>
                  {" "}
                  Actualmente me encuentro cursando el ultimo año de mi carrera
                </strong>
              </p>
              <p>
                Algunos de mis proyectos se atribuyen gracias a la colaboracion{" "}
                <strong>
                  entre proyectos influyentes en la industria de la tecnología
                </strong>
              </p>
              <p>
                Mi objetivo es ser mejorar mis conocimientos en la tecnologia y
                programación,{" "}
                <strong>
                  {" "}
                  actualizandome tal como lo hace el mundo tecnologico
                </strong>
              </p>
            </div>
            <img
              src={dani}
              alt=""
              className="sobremi order-1 object-cover w-64 h-full p-1 bg-white md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl dark:bg-yellow-500/5 ring-1 ring-white/20 "
            />
          </article>
        </div>
      </div>
    </main>
  );
}

export default Home;
