<template>
<nav class="navbar navbar-expand-lg navbar-light maximo">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="https://res.cloudinary.com/segundazo/image/upload/v1628141649/LOGO_Mesa_de_trabajo_1_fwfg2h.png" alt=""  height="30">
    </a>
    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
    </button>
     <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
  </button>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end order-1" id="navbarNav">
      <ul class="navbar-nav align-items-center">
        <li class="nav-item nav-link">
          <router-link to="/" class="enlace">Inicio</router-link>
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
<div class="collapse" id="collapseExample">
  <div class="card card-body maximo" style="border:none;">
    <div class="input-group">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
  <button class="btn btn-outline-secondary" type="button" id="button-addon2">Buscar</button>
</div>
  </div>
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

