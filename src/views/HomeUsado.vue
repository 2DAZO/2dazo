<template>
  <div class="homeUsado">
    <Navegador></Navegador>
    <div id="carouselExampleControls" class="carousel slide carrusel-container" data-bs-ride="carousel">
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
    <div class="container justify-content-evenly row maximo-productos">
      <div class="card border-0 text-start" style="max-width: 300px;">
        <img src="https://http2.mlstatic.com/D_Q_NP_621621-MCO46015188216_052021-AB.webp" class="card-img-top" alt="">
        <div class="card-body d-flex flex-column justify-content-start align-items-start" style="display:grid;">
          <div>
            <p class="card-text nombre-producto"><strong>PC Master Pro PC Master Pro PC Master Pro PC Master Pro PC Master Pro</strong></p>
          </div>
          <div class="" style="display:grid; grid-template-columns: 1fr 1fr;">
            <div class="lh-sm" style="display: flex; flex-direction:column; justify-content:center;">
              <div style="font-size:12px;">
                <p>Precio negociable: <strong>Si</strong></p>
              </div>
              <div>
                <p>$ 1'700.000</p>
              </div>
            </div>
            <div class="lh-sm" style="text-align: end; display: flex; flex-direction:column; justify-content:center;">
              <p>Estado</p>
              <p>10/10</p>
            </div>
          </div>
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

.carrusel-container {
  margin-bottom: 20px;
}

.maximo {
margin: auto;
max-width: 1600px;
}
.maximo-productos {
margin: auto;
max-width: 1200px;
}
.nombre-producto {
  display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

</style>
