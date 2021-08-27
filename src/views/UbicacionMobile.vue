<template>
  <div class="vh-100">
    <Navegador></Navegador>
    <Barra></Barra>
    <div class="container contenido mt-5">
      <div class="icono-container mt-5 mb-5">
        <h1 class="mb-0"><strong>Elige tu ubicación</strong></h1>
        <p class="lh-1">Acá podrás ver y cambia tu ubicación</p>
      </div>
      <div class="row">
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
    </div>
  </div>
</template>

<script>
import Navegador from '../components/Navegador.vue'
import Barra from "../components/Barra.vue";

export default {
  name: "CategoriasMobile",
  components: {
    Navegador,
    Barra,
  },
};
</script>

<style scoped>
.contenido {
  padding: 0 10px 0;
}

.icono-container {
  color: var(--naranja);
}

.categorias {
  width: 160px;
  height: 75px;
  background-color: var(--naranja);
}
</style>>
