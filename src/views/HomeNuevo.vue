<template>
  <div class="homeNuevo">
    <Banner></Banner>
    <div class="proximamente">
      <div class="atras">
        <router-link to="/">atras</router-link>
      </div>
      <h1>Proximamente</h1>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.HomeNuevo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.proximamente h1{
  color: black;
}
</style>

