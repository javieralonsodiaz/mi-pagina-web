import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("pagina-1", "routes/Pagina1.tsx"),
    route("pagina-2", "routes/Pagina2.tsx"),
    route("pagina-3", "routes/Pagina3.tsx"),
] satisfies RouteConfig;
