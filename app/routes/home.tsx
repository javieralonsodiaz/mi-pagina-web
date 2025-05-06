import Noticia from "~/components/Titulo";
import type { Route } from "./+types/home";
import ComponenteEjemplo from "~/components/ComponenteEjemplo";
import Titulo from "~/components/Titulo";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "1º ASIR" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export default function Home() {
  return (
    <section>
      <Titulo titulo="Página de ejemplo de 1º de ASIR" />
      <ComponenteEjemplo />
    </section>

  )
}


{/* <div className="flex flex-col border-4 border-blue-500 justify-center items-center h-screen"> */ }
{/* <h1 className="text-4xl">HOLA 1º ASIR :)</h1>
<h2>Nuevos cambios</h2>
</div> */}