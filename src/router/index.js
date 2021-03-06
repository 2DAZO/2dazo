import { createRouter, createWebHistory } from "vue-router";
import HomeUsado from "../views/HomeUsado.vue";
import HomeNuevo from "../views/HomeNuevo.vue";
import VenderUsados from "../views/VenderUsados.vue";
import CategoriasMobile from "../views/CategoriasMobile.vue";
import Categorias from "../views/Categorias.vue";
import UbicacionMobile from "../views/UbicacionMobile.vue";
import Seguridad from "../views/Seguridad.vue";
import TopMobile from "../views/TopMobile.vue";
import Login from "../views/Login.vue";
import Registro from "../views/Registro.vue";
import Recuperar from "../views/Recuperar.vue";
import Top from "../views/Top.vue";
import Producto from "../views/Producto.vue";

const routes = [{
        path: "/",
        name: "HomeUsado",
        component: HomeUsado,
    },
    {
        path: "/nuevo",
        name: "HomeNuevo",
        component: HomeNuevo,
    },
    {
        path: "/vender",
        name: "VenderUsados",
        component: VenderUsados,
    },
    {
        path: "/categorias-b",
        name: "CategoriasMobile",
        component: CategoriasMobile,
    },
    {
        path: "/categorias",
        name: "Categorias",
        component: Categorias,
    },
    {
        path: "/ubicacion",
        name: "UbicacionMobile",
        component: UbicacionMobile,
    },
    {
        path: "/seguridad",
        name: "Seguridad",
        component: Seguridad,
    },
    {
        path: "/top-b",
        name: "TopMobile",
        component: TopMobile,
    },
    {
        path: "/top",
        name: "Top",
        component: Top,
    },
    {
        path: "/producto/:id",
        name: "Producto",
        component: Producto,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/registro",
        name: "Registro",
        component: Registro,
    },
    {
        path: "/recuperar",
        name: "Recuperar",
        component: Recuperar,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;