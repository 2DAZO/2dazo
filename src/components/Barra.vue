<template>
  <div class="d-flex justify-content-center">
    <div
      class="
        d-flex d-lg-none
        justify-content-center
        align-items-center
        position-fixed
        menu
      "
    >
      <router-link to="/" class="item d-flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          /></svg
        >Inicio</router-link
      >
      <router-link to="/top-b" class="item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          /></svg
        >Lo más top</router-link
      >
      <router-link to="/" class="item buscador" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          /></svg
      ></router-link>
      <router-link to="/categorias-b" class="item"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          /></svg
        >Categorias</router-link
      >
      <router-link to="/seguridad-b" class="item"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
          /></svg
        >Seguridad</router-link
      >
    </div>
        <!-- Full screen modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog m-0">
        <div class="modal-content buscador-modal">
          <div class="modal-header">
            <h1 style="color: var(--naranja);">Buscador</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="input-group buscador-m d-flex input-search">
              <input
                type="text"
                class="form-control texto "
                placeholder="Lo que quieras mi rey"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button class="btn" type="button" id="button-addon2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 icon-small"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Understood</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




<style scoped>
.menu {
  z-index: 1000;
  bottom: 0px;
  width: 90%;
  height: 60px;
  margin-bottom: 5px;
  border-radius: 30px;
  background: rgb(255, 255, 255);
  box-shadow: 0 0px 10px rgba(136, 136, 136, 0.329);
}

.item {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 10px;
  text-decoration: none;
  color: var(--gris-oscuro);
}

.item svg {
  color: var(--naranja);
  width: 20px;
}

.buscador {
  width: 15%;
  padding: 10px 0;
  border-radius: 10px;
  margin: 10px;
  background: var(--naranja);
}

.buscador svg {
  color: var(--blanco);
}

.buscador-modal{
  width: 100vw !important;
  height: 100vh !important;
}

.buscador-m {
  margin: 0 0 0 10px;
  background-color: var(--gris-claro);
  border-bottom: 1px solid var(--naranja);
}

.buscador-m input {
  border: none;
  outline: none;
  background-color: #fff0;
}

.buscador-m button {
  border: none;
  color: #ff7465;
  transition: all 0.3s;
}
</style>
