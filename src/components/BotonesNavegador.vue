<template>
    <div class="d-flex d-lg-none order-3 order-lg-2 m-auto justify-content-center" style="width:100%;">
        <router-link to="/HomeNuevo" class="enlace" style="width:50%;">
        <button type="button" class="btn btn-primary nuevo" style="min-width:125px; width:100%">
          Nuevo
        </button>
      </router-link>

      <router-link to="/Home" class="enlace order-5 order-lg-3" style="width:50%;">
        <button type="button" class="btn vender" style="min-width:125px; width:100%">
          Vender
        </button>
      </router-link>
      </div>
</template>

<style scoped>
.enlace {
  font-size: 15px;
  display: flex;
  padding: 0 10px;
  width: max-content;
  align-items: center;
  text-decoration: none;
  color: var(--gris-oscuro);
  transition: all 0.3s;
}

.vender {
  align-items: center;
  background: none;
  border: 1px solid var(--verde);
  color: var(--verde) !important;
  text-decoration: none;
  transition: all 0.3s;
}

.vender svg {
  height: 20px;
  color: var(--blanco);
}
</style>