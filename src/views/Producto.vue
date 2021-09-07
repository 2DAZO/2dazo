<template>
  <div>
    <Navegador></Navegador>
    <div class="content-main bg-white rounded container mt-4">
      <div class="content-product p-4">
        <div>
          <img src="https://http2.mlstatic.com/D_Q_NP_621621-MCO46015188216_052021-AB.webp" style="width: 80%;" alt="">
        </div>
        <div class="d-flex flex-column text-start">
          <div class="precio-content mb-3">
            <div class="d-flex flex-column text-start">
              <p class="mb-1">Villavicencio</p>
              <h4 class="fw-bold">Zapatillas Nike</h4>
            </div>
            <div class="d-flex flex-column text-end">
              <p class="mb-1">Estado:</p>
              <h4 class="fw-bold">8/10</h4>
            </div>
          </div>
          <div class="d-flex flex-column text-start">
            <p class="mb-1">Precio negociable: <span style="font-size:18px;">Si</span></p>
            <h4 class="fw-bold">$1.750.000</h4>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navegador from "../components/Navegador.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Producto",
  components: {
    Navegador,
    Footer,
  },
};
</script>

<style scoped>
.content-product {
  display:grid;
  grid-template-columns: 1fr 1fr;
}

.precio-content {
  display:grid;
  grid-template-columns: 1fr 1fr;
}
</style>>
