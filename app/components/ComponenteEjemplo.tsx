import Titulo from "./Titulo"

export const paginas = [
    {
        title: "Página 1",
        description: "Descripción de la página 1",
        url: "pagina-1",
        color: "#ff76df"
    },
    {
        title: "Página 2",
        description: "Descripción de la página 2",
        url: "pagina-2",
        color: "#55dfff"
    },
    {
        title: "Página 3",
        description: "Descripción de la página 3",
        url: "pagina-3",
        color: "#FFFF00"
    }
]

export default function ComponenteEjemplo() {
    return (
        <section>
            <div className=" px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
                <Titulo titulo="Título de una sección" descripcion="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae consequuntur repellendus esse molestias illo soluta ratione vero et." />
                <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        paginas.map((pagina) => (
                            <div className="space-y-4">
                                <span
                                    style={{ backgroundColor: pagina.color }}
                                    className={`text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300`}>
                                    {pagina.title}
                                </span>
                                <h3 className="text-2xl font-bold leading-tight text-pink-600 dark:text-white">
                                    {pagina.title}
                                </h3>
                                <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                                    {pagina.description}
                                </p>
                                <a href={pagina.url} title=""
                                    className="bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    role="button">
                                    Ver {pagina.title}
                                    <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </div>

                        ))
                    }

                   
                </div>
            </div>
        </section>)
}
