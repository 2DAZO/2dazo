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
.app {
  padding: 10px;
}
#nav {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
}
.menu {
    width: 40px;
    heigth: 40px;
    border: 1px solid gray;
    border-radius: 50%;
    
}

</style>
