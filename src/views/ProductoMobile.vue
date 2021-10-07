<template>
  <div class="main-container me-4 ms-4">
    <NavbarProducto/>
    <BotonWhatsapp></BotonWhatsapp>
    <div class="pt-2">
      <div class="mb-3">
        <img src="https://http2.mlstatic.com/D_Q_NP_621621-MCO46015188216_052021-AB.webp" alt="imagen del producto" style="max-width:300px;" class="product-img rounded card-img-top p-2">
      </div>
      <div class="d-flex flex-column">
        <div class="d-flex flex-column text-start mb-3">
          <p class="mb-2 fw-semibold ciudad">Villavicencio</p>
              <h4 class="fw-bold" style="font-size:24px;">Zapatillas Nike</h4>
        </div>
        <div class="precio-content mb-4">
          <div class="d-flex flex-column text-start">
            <p class="mb-1" style=" font-weight: 600;">
              Precio negociable: <span style="font-size: 18px">Si</span>
            </p>
            <h4 class="fw-bold" style="font-size:36px; color: var(--naranja);">$1.750.000</h4>
          </div>
          <div class="d-flex flex-column justify-content-center text-end">
            <p class="mb-1" style="font-size: 18px; font-weight: 600;">Estado:</p>
              <h4 class="fw-bold" style="font-size:36px; color: var(--naranja);">8/10</h4>
          </div>
        </div>
      </div>

      <div class="d-flex flex-column text-start">
        <p class="fw-bold" style="font-size:18px;">Descripción</p>
        <div>
          <p class="fw-bold mb-1">Características principales</p>
          <ul>
            <li>Marca Nike</li>
            <li>Modelo: CI3866</li>
            <li>Color: Black/White</li>
            <li>AIR 270 REACT</li>
          </ul>
          <div class="d-flex flex-column text-end">
            <span class="fw-bold">Ver más...</span>
          </div>
        </div>
      </div>

      <div class=" d-flex flex-column text-start mt-5">
            <p class="fw-bold" style="font-size:18px;">Seguridad</p>
            <div>
              <p class=" mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta nam iste. Eveniet omnis molestiae corrupti repellendus, dolorum mollitia corporis recusandae! Repellat ratione optio magni praesentium dignissimos animi porro aut!</p>
            </div>
          </div>
      <div></div>
    </div>
    
  </div>
</template>

<script>
import BotonWhatsapp from "../components/BotonWhatsapp.vue";

import NavbarProducto from "../components/NavbarProducto.vue";

export default {
  name: "ProductoMobile",
  components: {
    BotonWhatsapp,
    NavbarProducto,
  },
};
</script>

<style scoped>
.main-container{
  height: 100vh;
}

.product-img{
  width:100%;
}

.precio-content {
  display:grid;
  grid-template-columns: 1fr 1fr;
}

.ciudad{
  width: max-content;
	font-size: 18px;
	border-bottom-right-radius: 20px;
	border-top-right-radius: 20px;
	padding: 5px 10px;
	color: var(--blanco);
	background: var(--verde);
}

</style>>
