import { createRouter, createWebHistory } from "vue-router";
import HomeUsado from "../views/HomeUsado.vue";
import HomeNuevo from "../views/HomeNuevo.vue";
import VenderUsados from "../views/VenderUsados.vue";
import CategoriaUsados from "../views/CategoriaUsados.vue";
import UbicacionMobile from "../views/UbicacionMobile.vue";

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
        path: "/categorias",
        name: "CategoriaUsados",
        component: CategoriaUsados,
    },
    {
        path: "/ubicación",
        name: "UbicacionMobile",
        component: UbicacionMobile,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;