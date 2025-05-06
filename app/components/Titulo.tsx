


interface IProps {
    titulo: String
    descripcion?: String
}

export default function Titulo({ titulo, descripcion}: IProps) {
    return (
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                {titulo}
            </h2>
            {descripcion && (
            <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
                {descripcion}
            </p>
            )}
        </div>
    )
}