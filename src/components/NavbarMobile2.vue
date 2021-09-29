<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light navbar-container">
      <BotonAtras/>

      <button
        type="button"
        class="btn btn btn-outline-primary ubicacion"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 icon-small"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <router-link to="/ubicacion" class="mb-0 ubicacion enlace">Ingresa tu ubicación</router-link>
        <svg
          g
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 icon-small"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <router-link
        to="/"
        class="navbar-brand"
        style="margin: 0"
        href="#"
      >
        <img
          src="https://res.cloudinary.com/segundazo/image/upload/v1628277929/LOGO_Mesa_de_trabajo_1_orzv3e.png"
          alt=""
          height="30"
        />
      </router-link>
    </nav>
  </div>
</template>
<script>
import BotonAtras from "./BotonAtras.vue";

export default {
  name: "NavbarMobile2",
  components: {
    BotonAtras,
  },
};
</script>
<style scoped>

.navbar-container{
  display: flex;
  justify-content: space-between;
}

/* .input-search {
  width: 250px;
} */

.buscador {
  margin: 0 0 0 10px;
  background-color: var(--gris-claro);
  border-bottom: 1px solid var(--naranja);
}

.buscador input {
  border: none;
  outline: none;
  background-color: #fff0;
}

.buscador button {
  border: none;
  color: #ff7465;
  transition: all 0.3s;
}

.menu {
  padding: 0;
  border-color: rgb(0 0 0 / 0%) !important;
}

.menu svg {
  height: 25px;
  color: var(--naranja);
}

.enlace {
  font-size: 15px;
  display: flex;
  padding: 0 10px;
  width: max-content;
  align-items: center;
  text-decoration: none;
  color: var(--gris-oscuro);
  transition: all 0.3s;
}

.iniciar-sesion {
  color: var(--naranja);
  text-decoration: none;
}

.categorias:hover {
  transform: scale(1.05);
}

.categorias svg {
  height: 20px;
  color: var(--blanco);
}

.ubicacion {
  font-size: 15px;
  color: var(--naranja);
  display: flex;
  align-items: center;
  border: none;
  transition: all 0.3s;
}

.ubicacion:hover {
  color: var(--gris-oscuro);
  background: none;
  border: none;
  transform: scale(1.1);
}
</style>