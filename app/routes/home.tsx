import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "1º ASIR" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
     return (
      <div className="flex flex-col border-4 border-pink-500 justify-center items-center h-screen">
        <h1 className="text-4xl">HOLA 1º ASIR :)</h1>
        <h2>Esto es un subtitulo</h2>
      </div>
     )
}
// export default function Home() {
//   return <Welcome />;
// }
