<template>
  <div class="homeUsado">
    <Navegador></Navegador>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner maximo">
        <div class="carousel-item active">
          <img src="https://http2.mlstatic.com/D_NQ_944252-MLA46967599466_082021-OO.webp" class="d-block w-100" alt="">
        </div>
        <div class="carousel-item">
          <img src="https://http2.mlstatic.com/D_NQ_944252-MLA46967599466_082021-OO.webp" class="d-block w-100" alt="">
        </div>
        <div class="carousel-item">
          <img src="https://http2.mlstatic.com/D_NQ_944252-MLA46967599466_082021-OO.webp" class="d-block w-100" alt="">
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
    <div class="categorias">
      
    </div>
    <div class="container justify-content-between row maximo-productos">
      <div class="card" style="width: 14rem;">
        <img src="https://http2.mlstatic.com/D_Q_NP_621621-MCO46015188216_052021-AB.webp" class="card-img-top" alt="">
        <div class="card-body">
          <p class="card-text">PC Master Pro</p>
        </div>
      </div>
      <div class="card" style="width: 14rem;">
        <img src="https://http2.mlstatic.com/D_Q_NP_621621-MCO46015188216_052021-AB.webp" class="card-img-top" alt="">
        <div class="card-body">
          <p class="card-text">PC Master Pro</p>
        </div>
      </div>
      <div class="card" style="width: 14rem;">
        <img src="https://http2.mlstatic.com/D_Q_NP_621621-MCO46015188216_052021-AB.webp" class="card-img-top" alt="">
        <div class="card-body">
          <p class="card-text">PC Master Pro</p>
        </div>
      </div>
      <div class="card" style="width: 14rem;">
        <img src="https://http2.mlstatic.com/D_Q_NP_621621-MCO46015188216_052021-AB.webp" class="card-img-top" alt="">
        <div class="card-body">
          <p class="card-text">PC Master Pro</p>
        </div>
      </div>
      <div class="card" style="width: 14rem;">
        <img src="https://http2.mlstatic.com/D_Q_NP_621621-MCO46015188216_052021-AB.webp" class="card-img-top" alt="">
        <div class="card-body">
          <p class="card-text">PC Master Pro</p>
        </div>
      </div>
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

.maximo {
margin: auto;
max-width: 1600px;
}
.maximo-productos {
margin: auto;
max-width: 1200px;
}

</style>
