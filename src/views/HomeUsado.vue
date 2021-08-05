<template>
  <div class="homeUsado">
    <Navegador></Navegador>
    <div class="botones-container">
      <router-link to="/nuevo">Nuevo</router-link> |
      <router-link to="/vender">Vender</router-link>
    </div>
    <div class="banner">
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
.botones-container {
  margin-bottom: 10px;
}

.tamano{
  width: 250px;
  margin: 0 20px;
}

.banner {
  width: 100%;
  height: 140px;
  margin-bottom: 10px;
  background-color: #FF7465;
  border-radius: 10px;
}

.categorias-container {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}

.categorias-container div {
  width: 80px;
  height: 40px;
  background-color: #FF7465;
  border-radius: 10px;
}

.ventas-container div {
  width: 100%;
  height: 140px;
  margin-bottom: 10px;
  background-color: #FF7465;
  border-radius: 10px;
}

</style>
