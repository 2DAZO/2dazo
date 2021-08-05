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
    <ul class="navbar-nav  mb-lg-0">
    <li class="nav-item">
        <router-link to="/HomeNuevo" class="nav-link enlace">Atras</router-link>
    </li>
    <li class="nav-item">
        <router-link to="/HomeNuevo" class="nav-link enlace">Atras</router-link>
    </li>
    <li class="nav-item">
        <router-link to="/HomeNuevo" class="nav-link enlace">Atras</router-link>
    </li>
    <li class="nav-item">
        <router-link to="/HomeNuevo" class="nav-link enlace">Atras</router-link>
    </li>
    <li class="nav-item">
        <router-link to="/HomeNuevo" class="nav-link enlace">Atras</router-link>
    </li>
    <li class="nav-item">
        <router-link to="/HomeNuevo" class="nav-link enlace">Atras</router-link>
    </li><li class="nav-item">
        <router-link to="/HomeNuevo" class="nav-link enlace">Atras</router-link>
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
  width: 100%;
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

