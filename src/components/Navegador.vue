<template>
<nav class="navbar navbar-expand-lg navbar-light flex-column">
  <div class="container-fluid maximo pb-2" style="
    border-bottom: 1px solid var(--gris-claro); flex-wrap:nowrap;">
    <a class="navbar-brand" style="margin:0;" href="#">
      <img src="https://res.cloudinary.com/segundazo/image/upload/v1628141649/LOGO_Mesa_de_trabajo_1_fwfg2h.png" alt=""  height="25">
    </a>
    <div class="input-group buscador">
  <input type="text" class="form-control" placeholder="Lo que menos te imaginas" aria-label="Recipient's username" aria-describedby="button-addon2">
  <button class="btn" type="button" id="button-addon2"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 icon-small" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg></button>
</div>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav align-items-center">
        <li class="nav-item nav-link">
          <router-link to="/" class="enlace">Inicio</router-link>
        </li>
        <li class="nav-item nav-link">
          <router-link to="/" class="enlace">Categorías</router-link>
        </li>
        <li class="nav-item nav-link">
          <router-link to="/" class="enlace">LomásTOP</router-link>
        </li>
        <li class="nav-item nav-link">
          <router-link to="/" class="enlace">Seguridad</router-link>
        </li>
        <li class="nav-item nav-link">
          <router-link to="/" class="enlace">T&C</router-link>
        </li>
        <li class="nav-item nav-link">
          <router-link to="/" class="enlace sesion">Iniciarsesión</router-link>
        </li>
      </ul>
    </div>
    <button class="navbar-toggler menu" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
</svg>
    </button>
  </div>
  <div class="container-fluid maximo pt-2 pb-2">
      <button type="button" class="btn ubicacion" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>  Ingresa tu ubicación
    </button>
  </div>
</nav>
<div class="collapse" id="collapseExample">
</div>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
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
.logo {
height: 25px;
}

.enlace{
    font-size: 15px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--gris-oscuro);
    transition:  all .3s;
}

.ubicacion{
    font-size: 15px;
    color: var(--gris-oscuro);
    display: flex;
    align-items: center;
    padding: 0;
}

.ubicacion svg{
  margin-right: 5px;
}

.enlace:hover{
color: var(--naranja);
}

.margen{
    margin: 0 15px;
}

.margenes{
    margin: 0 5px;
    color: var(--naranja);
}

.sesion{color: var(--naranja);
    background: var(--blanco);
    padding: 10px 15px;
    box-shadow: inset 0 0 0 1px var(--naranja);
    border-radius: 50px;
    transition: all .3s;
}

.sesion:hover{
    color: var(--blanco);
    background: var(--naranja);
    padding: 10px 15px;
}

.boton{color: var(--naranja);
    background: var(--blanco);
    padding: 10px 15px;
    box-shadow: inset 0 0 0 1px var(--naranja);
    border-radius: 50px;
    transition: all .3s;
}

.boton:hover{
    color: var(--blanco);
    background: var(--naranja);
    padding: 10px 15px;
}

.maximo {
margin: auto;
max-width: 1200px;
}

.buscador {
margin: 0 10px;
background-color: var(--gris-claro);
border-bottom: solid 1px var(--naranja);
}

.buscador input {
border: none;
outline: none;
background-color: #fff0;
}

.buscador button {
border: none;
color: #ff7465;
transition: all .3s;
}


.menu{
  padding: 0;
  border-color: rgb(0 0 0 / 0%) !important;
}

.menu svg{
  height: 25px;
    color: var(--naranja);
}


</style>

