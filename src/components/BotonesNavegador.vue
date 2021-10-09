<template>
    <div class="d-flex d-lg-none order-3 order-lg-2 m-auto justify-content-center mb-3" style="width:100%;">
        <router-link to="/HomeNuevo" class="enlace" style="width:50%;">
        <button type="button" class="btn btn-primary nuevo" style="min-width:125px; width:100%">
          Nuevo
        </button>
      </router-link>

      <div class="enlace order-5 order-lg-3" style="width:50%;" data-bs-toggle="modal" data-bs-target="#venderModal">
        <button type="button" class="btn vender" style="min-width:125px; width:100%">
          Vender
        </button>
      </div>

      <div
    class="modal fade"
    id="venderModal"
    tabindex="-1"
    aria-labelledby="venderModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" style="top: 25vh; max-width: 800px;">
      <div class="modal-content">
        <div class="d-flex align-items-center justify-content-end p-3">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body row">
          
        </div>
        <div class="d-flex align-items-center justify-content-end p-3">
          <router-link to="/registro" class="">
            <button type="button"
            class="boton-ubicacion rounded text-light border-0 p-2"
            data-bs-dismiss="modal"
            aria-label="Close"
            >Registrarme</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
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