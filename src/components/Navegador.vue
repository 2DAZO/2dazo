<template>
<nav class="navbar navbar-expand-lg navbar-light maximo">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="https://res.cloudinary.com/segundazo/image/upload/v1628141649/LOGO_Mesa_de_trabajo_1_fwfg2h.png" alt=""  height="30">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item nav-link">
          <router-link to="/" class="enlace">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door margenes" viewBox="0 0 16 16">
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
            </svg>
            Inicio</router-link>
        </li>
        <li class="nav-item nav-link">
          <router-link to="/" class="enlace">Categorías</router-link>
        </li>
        <li class="nav-item nav-link">
          <router-link to="/" class="enlace">Lo más TOP</router-link>
        </li>
        <li class="nav-item nav-link">
          <router-link to="/" class="enlace">Seguridad</router-link>
        </li>
        <li class="nav-item nav-link">
          <router-link to="/" class="enlace">T&C</router-link>
        </li>
        <li class="nav-item nav-link">
          <router-link to="/" class="enlace sesion">Iniciar sesión</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>


<script>
export default {
name: "Navegador",
};
</script>

<style scoped>
.logo {
height: 25px;
}

.enlace{
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--negro);
}

.margenes{
    margin: 0 5px;
    color: var(--naranja);
}

.maximo {
margin: auto;
max-width: 1200px;
}

.buscador {
margin: 0 15px;
padding: 5px 25px;
border-radius: 50px;
background-color: var(--gris);
}

.buscador input {
border: none;
outline: none;
}

.buscador button {
border: none;
color: #ff7465;
}

.buscador button:hover {
color: white;
background-color: #ff7465;
}
</style>

