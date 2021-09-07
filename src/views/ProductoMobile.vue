<template>
  <div class="main-container mt-3 me-4 ms-4">
    <BotonWhatsapp></BotonWhatsapp>
    <div>
      <div class="mb-3">
        <img src="https://http2.mlstatic.com/D_Q_NP_621621-MCO46015188216_052021-AB.webp" alt="imagen del producto" style="max-width:300px;" class="product-img rounded card-img-top p-2">
      </div>
      <div class="d-flex flex-column">
        <div class="d-flex flex-column text-start">
          <p class="mb-1">Villavicencio</p>
          <p class="fw-bold " style="font-size:18px;">Zapatillas Nike</p>
        </div>
        <div class="precio-content mb-4">
          <div class="d-flex flex-column text-start">
            <p class="mb-1" style="font-size:14px;">Precio negociable: <span style="font-size:14px;">Si</span></p>
            <p class="fw-bold" style="font-size:18px;">$1.750.000</p>
          </div>
          <div class="d-flex flex-column text-end">
            <p class="mb-1" style="font-size:14px;">Estado:</p>
            <p class="fw-bold" style="font-size:18px;">8/10</p>
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
      <div></div>
    </div>
    
  </div>
</template>

<script>
import BotonWhatsapp from "../components/BotonWhatsapp.vue";

export default {
  name: "ProductoMobile",
  components: {
    BotonWhatsapp,
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

</style>>
