<template>
  <div class="homeUsado">
    <Navegador></Navegador>
    <BotonesNavegador></BotonesNavegador>
    <Banner></Banner>
    <Barra></Barra>
    <div class="container-xxl">
    <Categorias></Categorias>
    <ListaProductos></ListaProductos>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import BotonesNavegador from '../components/BotonesNavegador.vue'
import Barra from '../components/Barra.vue';
import Navegador from '../components/Navegador.vue';
import Banner from '../components/Banner.vue';
import Categorias from '../components/Categorias.vue';
import ListaProductos from '../components/ListaProductos.vue';

export default {
  name: "HomeUsado",
  components: {
    BotonesNavegador,
    Barra,
    Navegador,
    Banner,
    Categorias,
    ListaProductos,
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

.maximo {
margin: auto;
max-width: 1600px;
}


</style>
