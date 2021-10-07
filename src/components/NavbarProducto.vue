<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light navbar-container">
      <BotonAtras/>
      <router-link
        to="/"
        class="navbar-brand order-0 "
        style="margin: 0"
        href="#"
      >
        <img
          src="https://res.cloudinary.com/segundazo/image/upload/v1628277929/LOGO_Mesa_de_trabajo_1_orzv3e.png"
          alt=""
          height="30"
        />
      </router-link>

      <div class="input-group buscador d-flex input-search">
        <input
          type="text"
          class="form-control texto "
          placeholder="Lo que quieras mi rey"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button class="btn" type="button" id="button-addon2">
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>

      <div>
        <button
          class="navbar-toggler menu order-2 ms-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
    <div class="container-xxl">
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav align-items-center">
              <li class="nav-item dropdown d-none d-lg-block">
                <a
                  to="/"
                  class="d-flex categorias rounded"
                  data-bs-toggle="collapse"
                  href="#collapsecategorias"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapsecategorias"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 me-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    /></svg
                  >Categorías</a
                >
              </li>
              <li class="nav-item nav-link">
                <router-link to="/" class="enlace d-block d-lg-none"
                  >Categorías</router-link
                >
              </li>
              <li class="nav-item nav-link">
                <router-link to="/" class="enlace">Inicio</router-link>
              </li>
              <li class="nav-item nav-link">
                <router-link to="/" class="enlace">Lo más TOP</router-link>
              </li>
              <li class="nav-item nav-link">
                <router-link to="/seguridad-b" class="enlace d-lg-none"
                  >Seguridad</router-link
                >
              </li>
              <li class="nav-item nav-link">
                <router-link to="/seguridad" class="d-none enlace d-lg-flex"
                  >Seguridad</router-link
                >
              </li>
              <li class="nav-item nav-link">
                <router-link to="/" class="enlace">T&C</router-link>
              </li>
              <li class="nav-item nav-link">
                <router-link to="/" class="iniciar-sesion fw-bold d-lg-none"
                  >Iniciar Sesión</router-link
                >
              </li>
            </ul>
          </div>
        </div>
  </div>
</template>
<script>
import BotonAtras from "./BotonAtras.vue";

export default {
  name: "NavbarMobile",
  components: {
    BotonAtras,
  },
};
</script>
<style scoped>

.navbar-container{
  display: grid;
  grid-template-columns: auto auto 1fr auto;
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
</style>