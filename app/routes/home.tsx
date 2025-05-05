import Noticia from "~/components/Noticia";
import type { Route } from "./+types/home";
import Ejemplo from "~/components/Ejemplo";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "1º ASIR" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export default function Home() {
     return (
      <div className="border-4 ">
        <h1>Noticias</h1>
        <Ejemplo/>
        {/* Noticias */}
        <section className="border border-yellow-300">
          
          {/* Noticia 1 */}
          <Noticia titulo="Titulo 1" descripcion="Descripcion 1" gap={8}/>
          <Noticia titulo="Titulo 2" descripcion="Descripcion 2"/>
          <Noticia titulo="Titulo 3" descripcion="Descripcion 3"/>
          
        </section>

        
      </div>
     )
}


{/* <div className="flex flex-col border-4 border-blue-500 justify-center items-center h-screen"> */}
{/* <h1 className="text-4xl">HOLA 1º ASIR :)</h1>
<h2>Nuevos cambios</h2>
</div> */}