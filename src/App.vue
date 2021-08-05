<template>
  <div class="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

 :root {
    --blanco:#fff;
    --naranja: #FF7465;
    --verde: #25D366;
    --azul: #477CFF;
    --gris-claro: #EAEAE9;
    --gris-oscuro: rgb(90, 90, 90);
    --negro: rgb(44, 44, 44);
}

.app {
  padding: 5px 0 0 0;
}
#nav {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
}

</style>
