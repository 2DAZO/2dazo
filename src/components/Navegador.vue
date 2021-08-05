<template>
<nav class="navbar navbar-expand-lg navbar-light flex-column">
  <div class="container-fluid maximo">
    <a class="navbar-brand" href="#">
      <img src="https://res.cloudinary.com/segundazo/image/upload/v1628141649/LOGO_Mesa_de_trabajo_1_fwfg2h.png" alt=""  height="25">
    </a>
    <div class="input-group buscador">
  <input type="text" class="form-control" placeholder="Lo que menos te imaginas" aria-label="Recipient's username" aria-describedby="button-addon2">
  <button class="btn" type="button" id="button-addon2">Buscar</button>
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
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
  <div class="container-fluid maximo">
      <button type="button" class="btn margen" style="color:var(--gris-oscuro);" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Ingresa tu ubicación
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
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--gris-oscuro);
    transition:  all .3s;
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
margin: 0 15px;
padding: 5px 25px;
background-color: var(--gris);
border-bottom: solid 1px var(--naranja);
}

.buscador input {
border: none;
outline: none;
}

.buscador button {
border: none;
color: #ff7465;
transition: all .3s;
}

.buscador button:hover {
transform:rotateX(50);
}
</style>

