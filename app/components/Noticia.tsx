


interface INoticia {
    titulo: String
    descripcion: String
    gap?: number
}

export default function Noticia({titulo, descripcion, gap=0}: INoticia) {
    return (
        <div className={`flex flex-col m-4 border`}>
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
        </div>
    )
}