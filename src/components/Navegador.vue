<template>
  <nav class="navbar navbar-expand-lg navbar-light flex-column">
    <div class="container-xxl pb-2">
      <router-link
        to="/"
        class="navbar-brand order-0"
        style="margin: 0"
        href="#"
      >
        <img
          src="https://res.cloudinary.com/segundazo/image/upload/v1628277929/LOGO_Mesa_de_trabajo_1_orzv3e.png"
          alt=""
          height="30"
        />
      </router-link>
      <button
        type="button"
        class="btn btn btn-outline-primary ubicacion order-1 order-lg-1"
        data-bs-toggle="modal"
        data-bs-target="#ubicacionModal"
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
        <p class="mb-0">Ingresa tu ubicación</p>
        <svg
          g
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 icon-small"
          style="margin-left: 5px"
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

      <div class="d-none d-lg-flex order-lg-2">
        <router-link to="/HomeNuevo" class="enlace">
          <button type="button" class="btn btn-primary">
            Compra productos nuevos
          </button>
        </router-link>

        <router-link to="/vender" class="enlace">
          <button type="button" class="btn vender">Vende con nosotros</button>
        </router-link>
      </div>

      <router-link
        to="/Home"
        class="order-4 order-lg-4 sesion d-none d-lg-block"
      >
        <button
          type="button"
          class="
            btn btn-outline-primary
            botonbordeado
            d-flex d-lg-flex
            align-items-center
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 icon-small me-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <p class="m-0">Ingresar</p>
        </button>
      </router-link>

      <button
        class="navbar-toggler menu order-2"
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

    <div class="container-xxl">
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
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
            <router-link to="/seguridad-b" class="enlace d-lg-none">Seguridad</router-link>
          </li>
          <li class="nav-item nav-link">
            <router-link to="/seguridad" class="d-none enlace d-lg-flex">Seguridad</router-link>
          </li>
          <li class="nav-item nav-link">
            <router-link to="/" class="enlace">T&C</router-link>
          </li>
          <li class="nav-item nav-link">
            <router-link to="/" class="iniciar-sesion fw-bold d-lg-none">Iniciar Sesión</router-link>
          </li>
        </ul>
      </div>
      <div class="input-group buscador d-none d-lg-flex">
        <input
          type="text"
          class="form-control texto"
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
    </div>
  </nav>

  <div class="collapse container" id="collapsecategorias">
    <div class="row my-4">
      <div class="col-4">
        <ul>
          <li>Hogar</li>
          <li>Hogar</li>
          <li>Hogar</li>
          <li>Hogar</li>
          <li>Hogar</li>
          <li>Hogar</li>
        </ul>
      </div>
      <div class="col-4">
        <ul>
          <li>Hogar</li>
          <li>Hogar</li>
          <li>Hogar</li>
          <li>Hogar</li>
          <li>Hogar</li>
          <li>Hogar</li>
        </ul>
      </div>
      <div class="col-4">
        <ul>
          <li>Hogar</li>
          <li>Hogar</li>
          <li>Hogar</li>
          <li>Hogar</li>
          <li>Hogar</li>
          <li>Hogar</li>
        </ul>
      </div>
      <div class="col-4">
        <ul>
          <li>Hogar</li>
          <li>Hogar</li>
          <li>Hogar</li>
          <li>Hogar</li>
          <li>Hogar</li>
          <li>Hogar</li>
        </ul>
      </div>
      <div class="col-4">
        <ul>
          <li>Hogar</li>
          <li>Hogar</li>
          <li>Hogar</li>
          <li>Hogar</li>
          <li>Hogar</li>
          <li>Hogar</li>
        </ul>
      </div>
      <div class="col-4">
        <ul>
          <li>Hogar</li>
          <li>Hogar</li>
          <li>Hogar</li>
          <li>Hogar</li>
          <li>Hogar</li>
          <li>Hogar</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="collapse" id="collapseExample"></div>
  <div
    class="modal fade"
    id="ubicacionModal"
    tabindex="-1"
    aria-labelledby="ubicacionModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" style="top: 25vh">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="titulo-modal mb-0" id="ubicacionModalLabel">
            <strong>Elige tu ubicación</strong>
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body row">
          <div class="col text-start">
            <p class="mb-1 fw-bold">Departamento</p>
            <select
              class="form-select rounded-pill"
              aria-label="Default select example"
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="col text-start">
            <p class="mb-1 fw-bold">Municipio</p>
            <select
              class="form-select rounded-pill"
              aria-label="Default select example"
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="boton-ubicacion rounded text-light border-0 p-2">Agregar dirección</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Navegador",
};
</script>

<style scoped>

.iniciar-sesion {
  color: var(--naranja);
  text-decoration: none;
}

.logo {
  height: 25px;
}

.nuevo {
  align-items: center;
  background: none;
  border: 1px solid var(--azul);
  color: var(--azul);
  text-decoration: none;
  transition: all 0.3s;
}

.vender {
  align-items: center;
  background: none;
  border: 1px solid var(--verde);
  color: var(--verde);
  text-decoration: none;
  transition: all 0.3s;
}

.vender:hover {
  transform: scale(1.01);
  color: var(--verde);
}

.vender svg {
  height: 20px;
  color: var(--blanco);
}

.categorias {
  padding: 10px 30px;
  align-items: center;
  background: var(--naranja);
  color: var(--blanco);
  text-decoration: none;
  transition: all 0.3s;
}

.categorias:hover {
  transform: scale(1.05);
}

.categorias svg {
  height: 20px;
  color: var(--blanco);
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

/* .enlace:focus{
  color: var(--naranja) !important;
} */

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

.botonrelleno {
  color: var(--blanco);
  border-color: var(--naranja);
  background-color: var(--naranja);
  transition: all 0.3s;
}

.botonrelleno:hover {
  border-color: var(--naranja);
  background-color: var(--naranja);
  transform: scale(1.1);
}

.botonbordeado {
  color: var(--naranja);
  border: none;
  transition: all 0.3s;
}

.botonbordeado:hover {
  background: none;
  color: var(--naranja);
}

.ubicacion svg {
  margin: 0 5px;
}

.ubicacion:hover svg {
  color: var(--naranja);
}

.enlace:hover {
  transform: scale(1.1);
}

.margen {
  margin: 0 15px;
}

.margenes {
  margin: 0 5px;
  color: var(--naranja);
}

.sesion {
  color: var(--naranja);
  text-decoration: none;
  padding: 2px 5px;
  box-shadow: inset 0 0 0 1px var(--naranja);
  border-radius: 5px;
  transition: all 0.3s;
}

.sesion:hover {
  transform: scale(1.1);
}

.boton {
  color: var(--naranja);
  background: var(--blanco);
  padding: 10px 15px;
  box-shadow: inset 0 0 0 1px var(--naranja);
  border-radius: 50px;
  transition: all 0.3s;
}

.boton:hover {
  color: var(--blanco);
  background: var(--naranja);
  padding: 10px 15px;
}

.buscador {
  margin: 0 0 0 10px;
  background-color: rgb(233, 233, 233);
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
.boton-ubicacion{
  background-color: var(--naranja);
}
.titulo-modal{
  color: var(--naranja);
}
</style>

