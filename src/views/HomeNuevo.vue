<template>
  <div class="homeNuevo">
    <div class="botones-container">
      <router-link to="/">Usado</router-link> |
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

<style scoped>
.botones-container {
  margin-bottom: 10px;
}

.banner {
  width: 100%;
  height: 140px;
  margin-bottom: 10px;
  background-color: #477CFF;
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
  background-color: #477CFF;
  border-radius: 10px;
}

.ventas-container div {
  width: 100%;
  height: 140px;
  margin-bottom: 10px;
  background-color: #477CFF;
  border-radius: 10px;
}
</style>
