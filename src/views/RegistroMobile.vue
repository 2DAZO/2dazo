<template>
  <div class="main-container me-2 ms-2">
    <NavbarMobile2/>
    <Barra></Barra>
    <div class="contenido">
      <div class="icono-container mt-5">
        

        <h1 class="mb-0"><strong>Hola</strong></h1>
        <p class="lh-1">Mira nuestras categorías</p>
      </div>
      <div class="categorias-container d-flex flex-column">
        <div class="d-flex justify-content-around mb-3">
          <div class="categorias rounded"></div>
          <div class="categorias rounded"></div>
        </div>
        <div class="d-flex justify-content-around mb-3">
          <div class="categorias rounded"></div>
          <div class="categorias rounded"></div>
        </div>
        <div class="d-flex justify-content-around mb-3">
          <div class="categorias rounded"></div>
          <div class="categorias rounded"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Barra from "../components/Barra.vue";
import NavbarMobile2 from "../components/NavbarMobile2.vue";

export default {
  name: "CategoriasMobile",
  components: {
    Barra,
    NavbarMobile2,
  },
};
</script>

<style scoped>

.main-container {
  height: 100vh;
}

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
