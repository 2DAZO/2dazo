<template>
  <div class="app">
    <router-view />
  </div>
</template>

<style lang="scss">
.app {
  font-family: 'Poppins', sans-serif;
  text-align: center;
  color: #2c3e50;
} 

:root {
    --blanco:#fff;
    --naranja: #FF7465;
    --verde: #25D366;
    --azul: #0d6efd;
    --gris-claro: #f8f8f8;
    --gris-oscuro: rgb(90, 90, 90);
    --negro: rgb(44, 44, 44);
}

.icon{
  height: 25px;
  color: var(--naranja);
}

.icon-small{
  height: 20px;
  color: var(--naranja);
}

#nav {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
}

</style>
