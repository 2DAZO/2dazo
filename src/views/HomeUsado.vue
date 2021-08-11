<template>
  <div class="homeUsado">
    <Navegador></Navegador>
    <Banner></Banner>
    <Categorias></Categorias>
    <div class="container justify-content-evenly row maximo-productos">
      <div class="card border-0 text-start producto" >
        <img src="https://http2.mlstatic.com/D_Q_NP_621621-MCO46015188216_052021-AB.webp" class="card-img-top" alt="">
        <div class="card-body d-flex flex-column justify-content-start align-items-start" style="display:grid;">
          <div>
            <p class="card-text nombre-producto"><strong>PC Master Pro PC Master Pro PC Master Pro PC Master Pro PC Master Pro</strong></p>
          </div>
          <div class="" style="display:grid; grid-template-columns: 1fr 1fr; margin-top:10px;">
            <div class="lh-sm" style="display: flex; flex-direction:column; justify-content:center;">
              <div style="font-size:12px;">
                <p style="margin-bottom:0;">Precio negociable: <strong>Si</strong></p>
              </div>
              <div>
                <p style="font-weight:900;">$ 1'700.000</p>
              </div>
            </div>
            <div class="lh-sm" style="text-align: end; display: flex; flex-direction:column; justify-content:center;">
              <p style="margin-bottom:0;">Estado</p>
              <p style="font-weight:900;">10/10</p>
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
import Banner from '../components/Banner.vue';
import Categorias from '../components/Categorias.vue';

export default {
  name: "HomeUsado",
  components: {
    Navegador,
    Banner,
    Categorias,
  },
};
</script>
<style scoped>

h2{
  font-size: 16px;
  margin: 0;
}

.margenr{
  margin-right: 5px;
}

.col{
  padding: 0 0 0 10px;
}

.carrusel-container {
  margin-bottom: 20px;
}

.producto{
   max-width: 250px;
   width:100%;
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
