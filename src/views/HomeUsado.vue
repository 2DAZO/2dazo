<template>
  <div class="homeUsado">
    <HeaderUsados></HeaderUsados>
    <div class="botones-container">
      <router-link to="/nuevo">Nuevo</router-link> |
      <router-link to="/vender">Vender</router-link>
    </div>
    <div class="banner">

    </div>
    <div class="categorias-container">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="ventas-container">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderUsados from "@/components/HeaderUsados.vue";

export default {
  name: "Home",
  components: {
    HeaderUsados,
  },
};
</script>
<style scoped>
.botones-container {
  margin-bottom: 10px;
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
