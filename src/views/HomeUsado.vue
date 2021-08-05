<template>
  <div class="homeUsado">
    <Navegador></Navegador>
    <div class="botones-container">
      <router-link to="/nuevo">Nuevo</router-link> |
      <router-link to="/vender">Vender</router-link>
    </div>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://images.theconversation.com/files/269676/original/file-20190416-147508-gc6092.jpg?ixlib=rb-1.1.0&rect=0%2C414%2C2471%2C1233&q=45&auto=format&w=1356&h=668&fit=crop" class="d-block w-100" alt="">
        </div>
        <div class="carousel-item">
          <img src="https://images.theconversation.com/files/269676/original/file-20190416-147508-gc6092.jpg?ixlib=rb-1.1.0&rect=0%2C414%2C2471%2C1233&q=45&auto=format&w=1356&h=668&fit=crop" class="d-block w-100" alt="">
        </div>
        <div class="carousel-item">
          <img src="https://images.theconversation.com/files/269676/original/file-20190416-147508-gc6092.jpg?ixlib=rb-1.1.0&rect=0%2C414%2C2471%2C1233&q=45&auto=format&w=1356&h=668&fit=crop" class="d-block w-100" alt="">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src

import Navegador from '../components/Navegador.vue';

export default {
  name: "HomeUsado",
  components: {
    Navegador,
  },
};
</script>
<style scoped>

</style>
