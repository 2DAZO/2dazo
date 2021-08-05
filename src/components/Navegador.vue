<template>
<nav class="navbar navbar-expand-lg navbar-light maximo">
<div class="container-fluid">
    <a class="navbar-brand" href="#">
    <img
        src="https://res.cloudinary.com/segundazo/image/upload/v1628141649/LOGO-02_cuhfym.png"
        alt="Logo 2DAZO"
        class="logo"
    />
    </a>
    <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>
    ingresa tu ubicación
    </button>
    <div
class="modal fade"
id="exampleModal"
tabindex="-1"
aria-labelledby="exampleModalLabel"
aria-hidden="true"
>
<div class="modal-dialog">
    <div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button
        type="button"
        class="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
        ></button>
    </div>
    <div class="modal-body">...</div>
    <div class="modal-footer">
        <button
        type="button"
        class="btn btn-secondary"
        data-bs-dismiss="modal"
        >
        Close
        </button>
        <button type="button" class="btn btn-primary">Save changes</button>
    </div>
    </div>
</div>
</div>
    <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
    >
    <span class="navbar-toggler-icon"></span>
    </button>
</div>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
    <div class="input-group">
    <button
        class="btn btn-outline-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
    >
        Todas la categorías
    </button>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
    <input
        type="text"
        class="form-control"
        aria-label="Text input with dropdown button"
    />
    </div>
    <ul class="navbar-nav mb-lg-0">
    <li class="nav-item">
        <router-link to="/HomeNuevo" class="nav-link enlace"
        >Atras</router-link
        >
    </li>
    <li class="nav-item">
        <router-link to="/HomeNuevo" class="nav-link enlace"
        >Atras</router-link
        >
    </li>
    <li class="nav-item">
        <router-link to="/HomeNuevo" class="nav-link enlace"
        >Atras</router-link
        >
    </li>
    <li class="nav-item">
        <router-link to="/HomeNuevo" class="nav-link enlace"
        >Atras</router-link
        >
    </li>
    <li class="nav-item">
        <router-link to="/HomeNuevo" class="nav-link enlace"
        >Atras</router-link
        >
    </li>
    <li class="nav-item">
        <router-link to="/HomeNuevo" class="nav-link enlace"
        >Atras</router-link
        >
    </li>
    <li class="nav-item">
        <router-link to="/HomeNuevo" class="nav-link enlace"
        >Atras</router-link
        >
    </li>
    </ul>
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

.enlace {
text-decoration: none;
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

